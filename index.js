const Hypercore = require('hypercore')
const Hyperbee = require('hyperbee')
const c = require('compact-encoding')
const RAM = require('random-access-memory')
const isOptions = require('is-options')

module.exports = class Beelite extends Hyperbee {
  constructor (storage, key, opts = {}) {
    if (isOptions(key)) {
      opts = key
      key = null
    }

    let core = null

    if (!storage || storage === ':ram') {
      core = new Hypercore(RAM, key)
    } else if (typeof storage === 'string') {
      core = new Hypercore(storage, key)
    } else {
      core = storage
    }

    super(core, {
      alwaysDuplicate: false,
      ...opts,
      keyEncoding: opts.keyEncoding || 'utf8',
      valueEncoding: opts.valueEncoding || c.any
    })
  }
}
