/**
 * Represents an actual image.
 */
export class Photo {

  private json: IPhotoArguments;

  /**
   * Creates a new instance of Photo.
   * @param json The JSON object containing the information about the photo.
   */
  constructor(json: IPhotoArguments) {
    this.json = json;
  }

  /**
   * Gets the id of the photo. This is quite often the same id as its' parent Image.
   */
  get id(): number {
    return this.json.id;
  }

  /**
   * Gets the width (in pixels) of the image.
   */
  get width(): number {
    return this.json.width;
  }

  /**
   * Gets the height (in pixels) of the image.
   */
  get height(): number {
    return this.json.height;
  }

  /**
   * Gets the URL of the image.
   */
  get url(): string {
    return this.json.src;
  }

  /**
   * Gets the type of image that this is.
   */
  get type(): string {
    return this.json.media_type || "";
  }
}

export interface IPhotoArguments {
  id: number;
  layout: string;
  src: string;
  width: number;
  height: number;
  media_type?: string;
}

export default Photo;
