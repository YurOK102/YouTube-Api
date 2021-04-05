import React from 'react';

import { Layout } from 'antd';

import SearchPanel from '../SearchPanel/SearchPanel';

const TitlePage = () => {
  return (
    <Layout style={{ height: '100vh', background: '#fff' }}>
      <SearchPanel />
    </Layout>
  );
};

export default TitlePage;
