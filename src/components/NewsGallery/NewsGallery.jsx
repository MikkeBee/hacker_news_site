import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import classes from "./newsgallery.module.css";

const NewsGallery = () => {
  const [testItem, setTestItem] = useState([]);

  useEffect(() => {
    axios
      .get("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then((res) => {
        const ids = res.data.filter((id, index) => {
          if (index < 20) {
            return id;
          }
        });
        console.log(ids);
        axios
          .all(
            ids.map((id) =>
              axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            )
          )
          .then((data) => {
            const newsArticles = data.flat().map((item) => item.data);
            setTestItem(newsArticles);
          });
      });
  }, []);

  console.log(testItem);

  return (
    <div className={classes.newsGallery}>
      <ol type="1">
        {testItem
          //   .filter((item, index) => index < 20)
          .map((item) => (
            <li key={item.id} className={classes.newsItem}>
              <Link to={`/${item.id}`}>{item.title}</Link>
            </li>
          ))}
      </ol>
    </div>
  );
};

export default NewsGallery;
