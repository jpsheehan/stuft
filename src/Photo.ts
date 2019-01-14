export class Photo {

  private json: PhotoArguments

  constructor (json: PhotoArguments) {
    this.json = json
  }

  get id (): number {
    return this.json.id
  }

  get width (): number {
    return this.json.width
  }

  get height (): number {
    return this.json.height
  }

  get url (): string {
    return this.json.src
  }

  get type (): string {
    return this.json.media_type
  }
}

export interface PhotoArguments {
  id: number
  width: number
  height: number
  src: string
  media_type: string
}

export default Photo
