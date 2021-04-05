import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { UnorderedListOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import youtubeApi from '../../api/youtube';
import VideoList from '../VideoList/VideoList';
import VideoDetail from '../VideoDetails/VideoDetail';
import { toggleBtn } from '../../store/actions/toggleAction';

import './search-panel.css';

const SearchPanel = ({ toggleBtn, toggle }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [hide, setHide] = useState(true);

  const [term, setTerm] = useState('');
  const [totalResults, setTotalResults] = useState(0);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    if (term === '') {
      setSearch(false);
      setSelectedVideo(null);
      setHide(false);
    }
  }, [term]);

  const btnItems = [
    { icon: <UnorderedListOutlined /> },
    { icon: <AppstoreOutlined /> },
  ];

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
    console.log('video', video);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const handleFormSubmit = async (termFromSearchBar) => {
      const response = await youtubeApi.get('/search', {
        params: {
          q: termFromSearchBar,
        },
      });

      setVideos(response.data.items);
      setTotalResults(response.data.pageInfo.totalResults);
      setSearch(true);
      setSelectedVideo(null);
    };
    handleFormSubmit(term);
  };

  const changeSort = (index) => {
    toggleBtn(index);
  };

  return (
    <div className="container">
      <div className={search ? ' container__wrap-active' : ' container__wrap'}>
        <form
          className={
            search ? ' container__search-active' : ' container__search'
          }
          onSubmit={handleSubmit}
        >
          <h2>Поиск видео</h2>
          <div className="container__search_field">
            <input
              onChange={handleChange}
              name="video-search"
              type="text"
              placeholder="Что хотите посмотреть?"
            />
            <button className="container__search_btn">Найти</button>
          </div>
        </form>
      </div>

      <div
        className={
          search
            ? ' container__search_filter-panel'
            : ' container__search_filter-panel-block'
        }
      >
        <div className="filter-panel__text">
          <p>
            Видео по запросу <span>«{term}»</span>
          </p>
          <div className="filter-panel_total">{totalResults}</div>
        </div>
        <div className="filter-panel__btn">
          {btnItems.map((i, key) => {
            return (
              <div key={key}>
                <Button
                  className={'btn__toggle' + (toggle === key ? ' active' : '')}
                  onClick={() => changeSort(key)}
                  icon={i.icon}
                ></Button>
              </div>
            );
          })}
        </div>
      </div>

      {!hide ? (
        <div
          className={
            search ? ' container__content' : ' container__content-none'
          }
        >
          <div className="container__content_video ">
            <VideoDetail video={selectedVideo} />
          </div>

          <div className="container__content_list">
            <VideoList
              handleVideoSelect={handleVideoSelect}
              videos={videos}
              video={selectedVideo}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  toggle: state.toggleReducer.toggle,
});

export default connect(mapStateToProps, { toggleBtn })(SearchPanel);
