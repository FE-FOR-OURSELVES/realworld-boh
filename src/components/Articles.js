import React from 'react';
import styled from 'styled-components';

const ArticleDiv = styled.article`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1.5rem 0;
`;
const UserImg = styled.img`
  display: inline-block;
  vertical-align: middle;
  width: 32px;
  height: 32px;
  border-radius: 30px;
`;
const UserInfo = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin: 0 1.5rem 0 0.3rem;
  line-height: 1rem;
`;
const UserName = styled.a`
  color: #5cb85c;
  font-weight: 500 !important;
  display: block;
`;
const CreateDate = styled.span`
  color: #bbb;
  font-size: 0.8rem;
  display: block;
`;
const ArticleTitle = styled.h1`
  font-weight: 600 !important;
  font-size: 1.5rem !important;
  margin-bottom: 3px;
`;
const ArticleBody = styled.p`
  font-weight: 300;
  margin-top: 0;
  color: #999;
  margin-bottom: 15px;
  font-size: 1rem;
  line-height: 1.3rem;
`;

const Articles = ({ articles, loading }) => {
  return (
    <>
      <h1>Article List</h1>
      {loading && `로딩중...`}
      {!loading && articles && (
        <div>
          {articles.map(article => (
            <Article
              key={article.slug}
              article={article}
              author={article.author}
            />
          ))}
        </div>
      )}
    </>
  );
};

const Article = ({ article, author }) => {
  const _createdAt = new Date(article.createdAt).toDateString();

  return (
    <ArticleDiv>
      <UserImg src={author.image} alt={author.username} />
      <UserInfo>
        <UserName href={author.username}>{author.username}</UserName>
        <CreateDate>{_createdAt}</CreateDate>
      </UserInfo>
      <div>
        <ArticleTitle>{article.title}</ArticleTitle>
        <ArticleBody>{article.body}</ArticleBody>
      </div>
    </ArticleDiv>
  );
};

export default Articles;
