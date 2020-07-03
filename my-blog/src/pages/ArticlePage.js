import React, { useState, useEffect } from 'react';
import articleContent from './article-content';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvoteSection';
import AddCommentForm from '../components/AddCommentForm';
import NotFoundPage from './NotFoundPage';

const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name == name);

    const [articleInfo, setarticleInfo] = useState({ name: '', content: [], upvotes: 0, comments: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            setarticleInfo(body);
        }
        fetchData();
    }, [name])
    if (!article) {
        return <NotFoundPage></NotFoundPage>
    }
    const relatdArticles = articleContent.filter(article => article.name !== name);
    return (
        <>
            <h1>{articleInfo.title} </h1>
            <UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setarticleInfo} />
            {articleInfo.content.map((para, key) => (
                <p key={key}>{para}</p>
            ))}
            <AddCommentForm articleName={name} setArticleInfo={setarticleInfo} ></AddCommentForm>
            <CommentsList comments={articleInfo.comments}></CommentsList>
            {/* <ArticlesList articles={relatdArticles} /> */}
        </>
    )
};

export default ArticlePage;
