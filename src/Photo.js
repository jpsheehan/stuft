class Photo {
  /**
   * Creates a new instance of Photo
   * @param {Object} json The raw json data
   */
  constructor (json) {
    this.json = json
  }

  /**
   * @returns {Number}
   */
  id () {
    return this.json.id
  }

  /**
   * @returns {Number}
   */
  get width () {
    return this.json.width
  }

  /**
   * @returns {Number}
   */
  get height () {
    return this.json.height
  }

  /**
   * @returns {String}
   */
  get url () {
    return this.json.src
  }

  /**
   * @returns {String}
   */
  get type () {
    return this.json.media_type
  }
}

export default Photo
