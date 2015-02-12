# koa-ractive

Ractive components rendering in server

## Installation

```
$ npm install koa-ractive
```

## Example

```js

var views = require('koa-ractive')
var path = require('path')
var router = require('koa-router')

app.use(views(path.join(__dirname, './templates')))
app.use(router(app))

app.get('/', function*(){
  this.render('home')
})
```