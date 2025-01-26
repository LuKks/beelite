# beelite

Hyperbee and Hypercore in one

```
npm i beelite
```

## Usage

Use a directory:

```js
const Beelite = require('beelite')

const db = new Beelite('./storage')

await db.put('/key', 'value')

const entry = await db.get('/key')

// Use it as Hyperbee..
```

Use RAM easily:

```js
const db = new Beelite(':ram')
// ...
```

Use a Hypercore directly:

```js
const Hypercore = require('hypercore')

const core = new Hypercore(...)
// Or corestore.get({ name: 'a' })

const db = new Beelite(core)
// ...
```

#### `db = new Beelite(storage[, key, options])`

Create a new Beelite instance.

It's just a Hyperbee with additions in the constructor.

The storage can be `:ram` for `random-access-memory`, a dir path, or a core.

Options:

```js
{
  // Defaults for Beelite specifically
  alwaysDuplicate: false,
  keyEncoding: 'utf8',
  valueEncoding: c.any // compact-encoding
  // The rest of the Hyperbee options are available also.
}
```

## License

MIT
