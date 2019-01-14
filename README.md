# Stuft

A simple news API. Use at your own risk.

## API

The stuft module exposes one function that handles network requests and parsing. It returns a Promise, meaning you can also use the async/await syntax.

You can call the `stuft` function with several options. You can mix these options except when `id` is present, then `limit` and `section` have no effect. Find out what `fetchOptions` you can pass in here: https://github.github.io/fetch/#options.

## Examples:

### Getting articles
```javascript
import stuft from "stuft";

// Using async/await
(async () => {
  // get the first 5 articles
  const articles = await stuft();
  for (const article of articles) {
    console.log(article.id, article.title);
  }
})();
```

### Getting articles from a specific section
```javascript
import stuft, { Section } from "stuft";

// Using Promises:
(() => {
  // get the first 5 articles from the business section
  stuft({ section: Section.Business })
    .then((articles) => {
      for (const article of articles) {
        console.log(article.id, article.title);
      }
    })
    .catch((err) => {
      console.error(err);
    });
})();
```

### Getting more than 5 articles
```javascript
const stuft = require("stuft").default; // commonjs

// Using async/await
(async () => {
  // get the first 20 articles
  const articles = await stuft({ limit: 20 });
  for (const article of articles) {
    console.log(article.id, article.title);
  }
})();
```

### Getting a specific article
```javascript
import stuft from "stuft";

// Using async/await
(async () => {
  // get a specific article
  const articles = await stuft({ id: 109912957 });
  const article = articles[0];
  console.log(article.id, article.title);
})();
```
