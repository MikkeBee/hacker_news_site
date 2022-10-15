import React from "react";
import { useParams } from "react-router-dom";
import classes from "./singlestory.module.css";

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

  if (newsArticles.length > 0) {
    return (
      <section className={classes.articleGallery}>
        <h1>{newsArticle.title}</h1>
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
  }
  return null;
};

export default SingleStory;
