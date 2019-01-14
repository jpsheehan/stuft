import Image, { IImageArguments } from "./Image";
import Video, { IVideoArguments } from "./Video";

export class Article {

  private json: IArticleArguments;

  constructor(json: IArticleArguments) {
    this.json = json;
  }

  get id(): number {
    return this.json.id;
  }

  get path(): string {
    return this.json.path;
  }

  get section(): string {
    return this.json.section;
  }

  get sectionTopLevel(): string {
    return this.json["section-top-level"];
  }

  get title(): string {
    return this.json.title;
  }

  get altTitle(): string {
    return this.json.alt_headline;
  }

  get author(): string {
    return this.json.byline;
  }

  get datetime(): Date {
    return new Date(this.json.datetime_iso8601);
  }

  get intro(): string {
    return this.json.intro;
  }

  get altIntro(): string {
    return this.json.alt_intro;
  }

  get source(): string {
    return this.json.source_name;
  }

  get body(): string {
    return this.json.body;
  }

  get images(): Image[] {
    return this.json.images.map((image) => new Image(image));
  }

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
