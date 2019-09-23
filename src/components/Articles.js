import React from 'react';

const Articles = ({ articles }) => (
  <div>
    <span>Article List</span>
    {articles.map((article) => (
      <section>
        <h1>{`Title: ${article.title}`}</h1>
        <div>{article.body}</div>
        <span>{`CreatedAt: ${article.createdAt}`}</span>
      </section>
    ))}
  </div>
);

export default Articles;
