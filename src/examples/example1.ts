import stuft from "..";

// Using async/await
(async () => {
  // get the first 5 articles
  const articles = await stuft();
  for (const article of articles) {
    console.log(article.id, article.title);
  }
})();
