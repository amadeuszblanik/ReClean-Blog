const cacheableResponse = require('cacheable-response')
const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 8080
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const handle = app.getRequestHandler()

const ssrCache = cacheableResponse({
  ttl: 1000 * 60 * 60, // 1hour
  get: async ({ req, res, pagePath, queryParams }) => ({
    data: await app.renderToHTML(req, res, pagePath, queryParams)
  }),
  send: ({ data, res }) => res.send(data)
})

app.prepare().then(() => {
  const server = express()

  server.get('/', (req, res) => ssrCache({ req, res, pagePath: '/' }))

  server.get('/post/:slug', (req, res) => {
    //const queryParams = { slug: req.params.slug }
    //const pagePath = '/post'
    app.render(req, res, '/post', req.params)
    //return ssrCache({ req, res, pagePath, queryParams })
  })

  server.get('/category/:catId', (req, res) => {
    //const queryParams = { slug: req.params.slug }
    //const pagePath = '/post'
    app.render(req, res, '/category', req.params)
    //return ssrCache({ req, res, pagePath, queryParams })
  })

  server.get('/search/:query', (req, res) => {
    //const queryParams = { slug: req.params.slug }
    //const pagePath = '/post'
    app.render(req, res, '/search', req.params)
    //return ssrCache({ req, res, pagePath, queryParams })
  })

  server.get('*', (req, res) => handle(req, res))

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
