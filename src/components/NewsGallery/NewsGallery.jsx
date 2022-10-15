import React from "react";
import { Link } from "react-router-dom";
import classes from "./newsgallery.module.css";

const NewsGallery = ({ newsArticles }) => {
  if (newsArticles.length > 0) {
    return (
      <div className={classes.newsGallery}>
        <ol>
          {newsArticles.map((newsArticle) => (
            <Link to={`/${newsArticle.id}`} key={newsArticle.id}>
              <li className={classes.newsItem}>{newsArticle.title}</li>
            </Link>
          ))}
        </ol>
      </div>
    );
  }
  return null;
};

export default NewsGallery;
