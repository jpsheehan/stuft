import stuft from "./index";

(async () => {
  const articles = await stuft({ id: 109911861 });
  // tslint:disable-next-line
  articles.forEach((article) => console.log(`#${article.id}: ${article.title}`));
})();
