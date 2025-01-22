# beelite

Hyperbee and Hypercore in one

```
npm i beelite
```

## Usage

```js
const Beelite = require('beelite')

const db = new Beelite('./storage')

await db.put('/key', 'value')

const entry = await db.get('/key')

// Use it as Hyperbee..
```

#### `db = new Beelite(storage[, key, options])`

Create a new Beelite instance.

It's just a Hyperbee with additions in the constructor.

The storage can be `:ram` to use `random-access-memory` or a dir path.

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
