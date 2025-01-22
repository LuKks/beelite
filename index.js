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

    if (!storage || storage === ':ram') {
      storage = RAM
    }

    const core = new Hypercore(storage, key)

    super(core, {
      alwaysDuplicate: false,
      ...opts,
      keyEncoding: opts.keyEncoding || 'utf8',
      valueEncoding: opts.valueEncoding || c.any
    })
  }
}
