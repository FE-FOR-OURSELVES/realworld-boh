import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Articles from '../components/Articles';
import { getArticles } from '../modules/articles';

const ArticlesContainer = ({ articles, loading, getArticles }) => {
  useEffect(() => {
    getArticles();
  }, [getArticles]);

  return <Articles articles={articles} loading={loading} />;
};

export default connect(
  ({ articles, loading }) => ({
    articles,
    loading,
  }),
  {
    getArticles,
  },
)(ArticlesContainer);
