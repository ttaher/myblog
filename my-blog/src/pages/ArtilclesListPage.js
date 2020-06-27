import React from 'react';
import ArticleContent from './article-content';
import ArticlesList from '../components/ArticlesList';

const ArtilclesListPage = () => (
    <>
        <h1>Articles</h1>
        <ArticlesList articles ={ArticleContent}></ArticlesList>
    </>
);

export default ArtilclesListPage;
