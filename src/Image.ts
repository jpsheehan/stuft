import Photo, { PhotoArguments } from './Photo'

export class Image {

  private json: ImageArguments

  constructor (json: ImageArguments) {
    this.json = json
  }

  get id (): number {
    return this.json.id
  }

  get position (): number {
    return this.json.position_after_paragraph
  }

  get datetime (): Date {
    return new Date(this.json.datetime_iso8601)
  }

  get caption (): string {
    return this.json.caption
  }

  get source (): string {
    return this.json.source_name
  }

  get credit (): string {
    return this.json.creditline
  }

  get photos (): Photo[] {
    return this.json.variants.map(variant => new Photo(variant))
  }
}

export interface ImageArguments {
  id: number
  position_after_paragraph: number
  datetime_iso8601: string
  caption: string
  source_name: string
  creditline: string
  variants: PhotoArguments[]
}

export default Image
