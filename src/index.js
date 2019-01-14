import https from 'https'

import Article from './Article'
import {
  BASE,
  API_PATH
} from './constants'

/**
 * @param {Object} options
 * @returns {URL}
 */
function buildUrl (options) {
  const { id, limit, section } = options
  const url = new URL(BASE)

  url.pathname = API_PATH

  if (id) {
    url.pathname += '/' + id.toString()
  } else if (section) {
    url.pathname += '/' + section
  }

  if (limit) {
    url.searchParams.set('limit', limit)
  }

  return url
}

/**
 * @param {String} rawData
 * @returns {Array<Article>}
 */
function parseResponse (rawData) {
  const parsedData = JSON.parse(rawData)
  const { stories } = parsedData

  if (stories) {
    return stories.map(json => new Article(json))
  } else {
    return [ new Article(parsedData) ]
  }
}

/**
 * @param {Object} options
 * @returns {Promise}
 */
export default function stuft (options = {}) {
  return new Promise((resolve, reject) => {
    try {
      const url = buildUrl(options)

      https.get(url, (res) => {
        const contentType = res.headers['content-type']
        const { statusCode } = res

        // check for errors
        let error
        if (statusCode !== 200) {
          error = new Error(`Request Failed. Status Code: ${statusCode}`)
        } else if (!/^application\/json/.test(contentType)) {
          error = new Error(`Invalid content-type. Expected 'application/json' but received ${contentType}`)
        }
        if (error) {
          res.resume()
          reject(error)
        }

        // download the data
        let rawData = ''
        res.on('data', (chunk) => { rawData += chunk })
        res.on('error', (err) => reject(err))
        res.on('end', () => resolve(parseResponse(rawData)))
      })
    } catch (err) {
      reject(err)
    }
  })
}
