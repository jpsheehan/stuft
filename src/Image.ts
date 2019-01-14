import Photo, { IPhotoArguments } from "./Photo";

export class Image {

  private json: IImageArguments;

  constructor(json: IImageArguments) {
    this.json = json;
  }

  get id(): number {
    return this.json.id;
  }

  get position(): number {
    return this.json.position_after_paragraph;
  }

  get datetime(): Date {
    return new Date(this.json.datetime_iso8601);
  }

  get caption(): string {
    return this.json.caption;
  }

  get source(): string {
    return this.json.source_name;
  }

  get credit(): string {
    return this.json.creditline;
  }

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
