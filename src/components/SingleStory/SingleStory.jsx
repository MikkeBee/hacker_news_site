import React from "react";
import { useParams } from "react-router-dom";

const SingleStory = ({ newsArticles }) => {
  const { id } = useParams();
  const newsArticle = newsArticles.find((article) => article.id === Number(id));
  const unixConversion = () => {
    const millisecs = newsArticle.time * 1000;
    const dateObj = new Date(millisecs);
    const readableDate = dateObj.toLocaleString();
    return readableDate;
  };
  console.log(newsArticle);
  return (
    <section>
      <h3>{newsArticle.title}</h3>
      <p>Added by: {newsArticle.by}</p>
      <p>Date: {unixConversion()}</p>
      <p>
        Link:{" "}
        <a href="{newsArticle.url}" target="_blank">
          {newsArticle.url}
        </a>
      </p>
    </section>
  );
};

export default SingleStory;
