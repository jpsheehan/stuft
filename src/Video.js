import Photo from './Photo'

class Video {
  /**
   * Creates a new instance of Video
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
   * @returns {Number}
   */
  get position () {
    return this.json.position_after_paragraph
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
  get credit () {
    return this.json.creditline
  }

  /**
   * @returns {String}
   */
  get caption () {
    return this.json.caption
  }

  /**
   * @returns {String}
   */
  get url () {
    return this.json.src
  }

  /**
   * @returns {Photo}
   */
  get photo () {
    return new Photo(this.json.video_poster)
  }
}

export default Video
