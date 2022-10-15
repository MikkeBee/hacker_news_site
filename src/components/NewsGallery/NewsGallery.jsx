import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./newsgallery.module.css";
import LoadButton from "../LoadButton/LoadButton";

const NewsGallery = ({ allArticleIDs, getItems, newsArticles }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const clickHandler = () => {
    const fetchedIDs = newsArticles.map(({ id }) => id);
    const nextFetchIDs = allArticleIDs
      //filters out all IDs that are not in fetchedIDs
      .filter((id) => !fetchedIDs.includes(id))
      .filter((id, index) => index < 20);
    getItems(nextFetchIDs);
  };

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
        {showButton && <LoadButton clickHandler={clickHandler} />}
      </div>
    );
  }
  return null;
};

export default NewsGallery;
