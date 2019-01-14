import Photo from './Photo'

class Image {
  /**
   * Creates a new instance of Image
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
  get caption () {
    return this.json.caption
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
  get credit () {
    return this.json.creditline
  }

  /**
   * @returns {Array<Photo>}
   */
  get photos () {
    return this.variants.map(variant => new Photo(variant))
  }
}

export default Image
