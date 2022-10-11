import React from "react";
import { useParams } from "react-router-dom";

const SingleStory = ({ newsArticles }) => {
  const { id } = useParams();
  console.log(id);
  console.log(newsArticles);
  const newsArticle = newsArticles.filter(
    (article) => article.id === Number(id)
  );
  console.log(newsArticle);
  return (
    <section>
      <h3>{newsArticle.title}</h3>
    </section>
  );
};

export default SingleStory;
