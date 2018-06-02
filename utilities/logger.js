'use strict'

function Logger () {
  this.logApiCall = function (meta) {
    if (process.env.NODE_ENV === 'test') { return }
    var res = meta.res || meta
    if (res && res.statusCode === 404) { return }
    if (meta.err) {
      res.err = meta.err
    }
    // TODO: log API call somewhere?
    if (process.env.NODE_ENV === 'dev') {
      console.log(res.statusCode + ': ' + meta.message + ' -- ' + JSON.stringify(res).substr(0, 80))
    }
  }
}

module.exports = new Logger()
