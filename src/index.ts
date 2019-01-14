import https from "https";

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
 * Parses the raw HTTP response and returns a list of articles.
 * @param rawData The raw response.
 */
function parseResponse(rawData: string): Article[] {
  const parsedData = JSON.parse(rawData);
  const { stories } = parsedData;

  if (stories) {
    return stories.map((json: IArticleArguments) => new Article(json));
  } else {
    return [ new Article(parsedData) ];
  }
}

/**
 * Sends a request to retrieve a number of news articles.
 * @param options The options used to request articles.
 */
export default function stuft(options: IStuftOptions = {}): Promise<Article[]> {
  return new Promise((resolve, reject) => {
    try {
      const url = buildUrl(options);

      https.get(url, (res) => {
        const contentType = res.headers["content-type"] || "";
        const { statusCode } = res;

        // check for errors
        let error;
        if (statusCode !== 200) {
          error = new Error(`Request Failed. Status Code: ${statusCode}`);
        } else if (!/^application\/json/.test(contentType)) {
          error = new Error(`Invalid content-type. Expected 'application/json' but received ${contentType}`);
        }
        if (error) {
          res.resume();
          reject(error);
        }

        // download the data
        let rawData = "";
        res.on("data", (chunk) => { rawData += chunk; });
        res.on("error", (err) => reject(err));
        res.on("end", () => resolve(parseResponse(rawData)));
      });
    } catch (err) {
      reject(err);
    }
  });
}

interface IStuftOptions {
  id?: number;
  limit?: number;
  section?: Section | string;
}
