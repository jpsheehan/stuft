import stuft from "..";

// Using async/await
(async () => {
  // get the first 20 articles
  const articles = await stuft({ limit: 20 });
  for (const article of articles) {
    console.log(article.id, article.title);
  }
})();
