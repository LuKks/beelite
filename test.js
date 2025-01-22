const test = require('brittle')
const tmp = require('like-tmp')
const Beelite = require('./index.js')

test('ram', async function (t) {
  const a = new Beelite(':ram')
  await a.put('/key', '123')

  const entry = await a.get('/key')
  t.is(entry.value, '123')

  await a.close()

  const b = new Beelite(':ram')

  const entry2 = await b.get('/key')
  t.is(entry2, null)

  await b.close()
})

test('dir', async function (t) {
  const dir = await tmp(t)

  const db = new Beelite(dir)
  await db.put('/key', '123')

  const entry = await db.get('/key')
  t.is(entry.value, '123')

  await db.close()

  const b = new Beelite(dir)

  const entry2 = await b.get('/key')
  t.is(entry2.value, '123')

  await b.close()
})
