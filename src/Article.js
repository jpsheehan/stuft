import Image from './Image'
import Video from './Video'

class Article {
  /**
   * Creates a new instance of Article
   * @param {Object} json The raw json data
   */
  constructor (json) {
    this.json = json
  }

  /**
   * @returns {Number}
   */
  get id () {
    return this.json.id
  }

  /**
   * @returns {String}
   */
  get path () {
    return this.json.path
  }

  /**
   * @returns {String}
   */
  get section () {
    return this.json.section
  }

  /**
   * @returns {String}
   */
  get sectionTopLevel () {
    return this.json['section-top-level']
  }

  /**
   * @returns {String}
   */
  get title () {
    return this.json.title
  }

  /**
   * @returns {String}
   */
  get altTitle () {
    return this.json.alt_headline
  }

  /**
   * @returns {String}
   */
  get author () {
    return this.json.byline
  }

  /**
   * @returns {Date}
   */
  get datetime () {
    return new Date(this.json.datetime_iso8601)
  }

  /**
   * @returns {String}
   */
  get intro () {
    return this.json.intro
  }

  /**
   * @returns {String}
   */
  get altIntro () {
    return this.json.alt_intro
  }

  /**
   * @returns {String}
   */
  get source () {
    return this.json.source_name
  }

  /**
   * @returns {String}
   */
  get body () {
    return this.json.body
  }

  /**
   * @returns {Array<Image>}
   */
  get images () {
    return this.json.images.map(image => new Image(image))
  }

  /**
   * @returns {Array<Video>}
   */
  get videos () {
    return this.json.videos.map(video => new Video(video))
  }
}

export default Article
