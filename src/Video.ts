import Photo, { PhotoArguments } from './Photo'

export class Video {

  private json: VideoArguments

  constructor (json: VideoArguments) {
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

  get credit (): string {
    return this.json.creditline
  }

  get caption (): string {
    return this.json.caption
  }

  get url (): string {
    return this.json.src
  }

  get photo (): Photo {
    return new Photo(this.json.video_poster)
  }
}

export interface VideoArguments {
  id: number
  position_after_paragraph: number
  datetime_iso8601: string
  creditline: string
  caption: string
  src: string
  video_poster: PhotoArguments
}

export default Video
