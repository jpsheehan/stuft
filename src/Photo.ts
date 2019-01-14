export class Photo {

  private json: IPhotoArguments;

  constructor(json: IPhotoArguments) {
    this.json = json;
  }

  get id(): number {
    return this.json.id;
  }

  get width(): number {
    return this.json.width;
  }

  get height(): number {
    return this.json.height;
  }

  get url(): string {
    return this.json.src;
  }

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
