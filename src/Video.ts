import Photo, { IPhotoArguments } from "./Photo";

/**
 * Represents a video that can be played.
 */
export class Video {

  private json: IVideoArguments;

  /**
   * Creates a new instance of Video.
   * @param json The JSON object containing the information about the video.
   */
  constructor(json: IVideoArguments) {
    this.json = json;
  }

  /**
   * Gets the id of the video.
   */
  get id(): number {
    return this.json.id;
  }

  /**
   * Gets the paragraph that this image appears after.
   * A value of 0 means that it appears at the beginning of the article.
   */
  get position(): number {
    return this.json.position_after_paragraph;
  }

  /**
   * Gets the datetime when the video was uploaded.
   */
  get datetime(): Date {
    return new Date(this.json.datetime_iso8601);
  }

  /**
   * Gets the credit information about the video.
   */
  get credit(): string {
    return this.json.creditline;
  }

  /**
   * Gets the caption of the video.
   */
  get caption(): string {
    return this.json.caption;
  }

  /**
   * Gets the URL of the video.
   */
  get url(): string {
    return this.json.src;
  }

  /**
   * Gets the photo that represents the still image while the video is loading.
   */
  get photo(): Photo {
    return new Photo(this.json.video_poster);
  }
}

export interface IVideoArguments {
  id: number;
  position_after_paragraph: number;
  layout: string;
  source_code: string;
  datetime_iso8601: string;
  datetime_display: string;
  creditline: string;
  caption: string;
  src: string;
  video_poster: IPhotoArguments;
}

export default Video;
