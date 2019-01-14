import Image, { ImageArguments } from './Image'
import Video, { VideoArguments } from './Video'

export class Article {
  
  private json: ArticleArguments

  constructor (json: ArticleArguments) {
    this.json = json
  }

  get id (): number {
    return this.json.id
  }

  get path (): string {
    return this.json.path
  }

  get section (): string {
    return this.json.section
  }

  get sectionTopLevel (): string {
    return this.json['section-top-level']
  }

  get title (): string {
    return this.json.title
  }

  get altTitle (): string {
    return this.json.alt_headline
  }

  get author (): string {
    return this.json.byline
  }

  get datetime (): Date {
    return new Date(this.json.datetime_iso8601)
  }

  get intro (): string {
    return this.json.intro
  }

  get altIntro (): string {
    return this.json.alt_intro
  }

  get source (): string {
    return this.json.source_name
  }

  get body (): string {
    return this.json.body
  }

  get images (): Image[] {
    return this.json.images.map(image => new Image(image))
  }

  get videos (): Video[] {
    return this.json.videos.map(video => new Video(video))
  }
}

export interface ArticleArguments {
  id: number
  path: string
  section: string
  'section-top-level': string
  title: string
  alt_headline: string
  byline: string
  datetime_iso8601: string
  intro: string
  alt_intro: string
  source_name: string
  body: string
  images: ImageArguments[],
  videos: VideoArguments[]
}

export default Article
