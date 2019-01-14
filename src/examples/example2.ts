import stuft, { Section } from "..";

// Using Promises:
(() => {
  // get the first 3 articles from the business section
  stuft({ section: Section.Business, limit: 3 })
    .then((articles) => {
      for (const article of articles) {
        console.log(article.id, article.title);
      }
    })
    .catch((err) => {
      console.error(err);
    });
})();
