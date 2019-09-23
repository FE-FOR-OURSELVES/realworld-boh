import React, { Component } from 'react';
import { connect } from 'react-redux';

import Articles from 'components/Articles';

import { getArticles } from 'redux/articles';

class ArticlesContainer extends Component {
  componentDidMount() {
    const { getArticles } = this.props;
    getArticles();
  }

  render() {
    const { articles } = this.props;

    return <Articles articles={articles} />;
  }
}

const mapStateToProps = (state, ownProps) => ({
  articles: state.articles.articles,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getArticles: () => dispatch(getArticles()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlesContainer);
