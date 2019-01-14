import Image, { IImageArguments } from "./Image";
import Video, { IVideoArguments } from "./Video";

/**
 * Represents a news article.
 */
export class Article {

  private json: IArticleArguments;

  /**
   * Creates a new instance of Article.
   * @param json The JSON object containing the information about the article.
   */
  constructor(json: IArticleArguments) {
    this.json = json;
  }

  /**
   * Gets the id of the article.
   */
  get id(): number {
    return this.json.id;
  }

  /**
   * Gets the path to the actual article.
   */
  get path(): string {
    return this.json.path;
  }

  /**
   * Gets the section this article belongs to.
   */
  get section(): string {
    return this.json.section;
  }

  /**
   * Gets the top-level section this article belongs to.
   */
  get sectionTopLevel(): string {
    return this.json["section-top-level"];
  }

  /**
   * Gets the title of the article.
   */
  get title(): string {
    return this.json.title;
  }

  /**
   * Gets the short title of the article.
   */
  get altTitle(): string {
    return this.json.alt_headline;
  }

  /**
   * Gets the author of the article.
   */
  get author(): string {
    return this.json.byline;
  }

  /**
   * Gets the date that this article was published.
   */
  get datetime(): Date {
    return new Date(this.json.datetime_iso8601);
  }

  /**
   * Gets the preamble of the article.
   */
  get intro(): string {
    return this.json.intro;
  }

  /**
   * Gets the short version of the preamble of the article.
   */
  get altIntro(): string {
    return this.json.alt_intro;
  }

  /**
   * Gets the source (attribution) of the article.
   */
  get source(): string {
    return this.json.source_name;
  }

  /**
   * Gets the HTML that makes up the body of the article.
   */
  get body(): string {
    return this.json.body;
  }

  /**
   * Gets the images in the article.
   */
  get images(): Image[] {
    return this.json.images.map((image) => new Image(image));
  }

  /**
   * Gets the videos in the article.
   */
  get videos(): Video[] {
    return this.json.videos.map((video) => new Video(video));
  }
}

export interface IArticleArguments {
  id: number;
  path: string;
  url: string;
  section: string;
  "section-home": string;
  "section-top-level": string;
  layout: string;
  title: string;
  alt_headline: string;
  datetime_iso8601: string;
  datetime_display: string;
  byline: string;
  source_code: string;
  source_name: string;
  intro: string;
  alt_intro: string;
  body: string;
  images: IImageArguments[];
  videos: IVideoArguments[];
  html_assets: string[];
  galleries: any[]; // don't know what this is for
}

export default Article;
