import fetch from "cross-fetch";

import Article, { IArticleArguments } from "./Article";
import {
  API_PATH,
  BASE,
} from "./constants";
import { Section } from "./Section";

/**
 * Builds the URL for the request based on specific options.
 * @param options The options used to build the URL.
 */
function buildUrl(options: IStuftOptions): URL {
  const { id, limit, section } = options;
  const url = new URL(BASE);

  url.pathname = API_PATH;

  if (id) {
    url.pathname += "/" + id.toString();
  } else if (section) {
    url.pathname += "/" + section;
  }

  if (limit) {
    url.searchParams.set("limit", limit.toString());
  }

  return url;
}

/**
 * Parses the json response and returns a list of articles.
 * @param json The raw response.
 */
function parseAggregateResponse(json: IAggregateResponse): Article[] {
  return json.stories.map((a) => new Article(a));
}

/**
 * Parses the json response and returns an article.
 * @param json The raw response.
 */
function parseSingletonResponse(json: IArticleArguments): Article {
  return new Article(json);
}

/**
 * Sends a request to retrieve a number of news articles. By default, returns the first 5 articles.
 * The `options` are as follows:
 * - Set `limit` to retrieve a specific number of articles.
 * - Set `section` to retrieve articles from a specific section.
 * - Set `id` to retrieve a single article.
 * - Set `fetchOptions` to pass additional parameters to fetch.
 * @param options The options used to request articles.
 */
export default async function stuft(options: IStuftOptions = {}): Promise<Article[]> {
  const { id, fetchOptions } = options;
  const url = buildUrl(options);
  const res = await fetch(url.toString(), fetchOptions);

  // check for errors
  if (res.status !== 200) {
    throw new Error(`Request Failed. Status Code: ${res.status}`);
  }

  const json = await res.json();
  if (id) {
    return [parseSingletonResponse(json)];
  } else {
    return parseAggregateResponse(json);
  }
}

interface IStuftOptions {
  id?: number;
  limit?: number;
  section?: Section | string;
  fetchOptions?: any;
}

interface IAggregateResponse {
  stories: IArticleArguments[];
}
