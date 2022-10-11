import React from "react";
import { Link } from "react-router-dom";
import classes from "./newsgallery.module.css";

const NewsGallery = ({ newsArticles }) => {
  return (
    <div className={classes.newsGallery}>
      <ol type="1">
        {newsArticles
          //   .filter((item, index) => index < 20)
          .map((newsArticle) => (
            <li key={newsArticle.id} className={classes.newsItem}>
              <Link to={`/${newsArticle.id}`}>{newsArticle.title}</Link>
            </li>
          ))}
      </ol>
    </div>
  );
};

export default NewsGallery;
