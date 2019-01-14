import Photo, { IPhotoArguments } from "./Photo";

/**
 * Represents an image in an article.
 */
export class Image {

  private json: IImageArguments;

  /**
   * Creates a new instance of Image.
   * @param json The JSON object containing the information about the image.
   */
  constructor(json: IImageArguments) {
    this.json = json;
  }

  /**
   * Gets the id of the image.
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
   * Gets the date this image was uploaded.
   */
  get datetime(): Date {
    return new Date(this.json.datetime_iso8601);
  }

  /**
   * Gets the caption of the image.
   */
  get caption(): string {
    return this.json.caption;
  }

  /**
   * Gets the source (attribution) of the image.
   */
  get source(): string {
    return this.json.source_name;
  }

  /**
   * Gets the credit for the image.
   */
  get credit(): string {
    return this.json.creditline;
  }

  /**
   * Gets the photos associated with the image.
   * There can be several different photos that differ in size/resolution/quality/etc...
   */
  get photos(): Photo[] {
    return this.json.variants.map((variant) => new Photo(variant));
  }
}

export interface IImageArguments {
  id: number;
  position_after_paragraph: number;
  datetime_iso8601: string;
  datetime_display: string;
  creditline: string;
  source_code: string;
  source_name: string;
  caption: string;
  variants: IPhotoArguments[];
}

export default Image;
