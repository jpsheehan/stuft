import stuft from "..";

// Using async/await
(async () => {
  // get a specific article
  const articles = await stuft({ id: 109912957 });
  const article = articles[0];
  console.log(article.id, article.title);
})();
