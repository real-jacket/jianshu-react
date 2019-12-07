/**
 * @param {string} url
 * @returns {Object}
 */
// eslint-disable-next-line import/prefer-default-export
export function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    `{"${
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')
        .replace(/\+/g, ' ')
    }"}`,
  )
}
