var app = module.exports = require('koa')()
var views = require('../index')
var path = require('path')
var router = require('koa-router')

app.use(views(path.join(__dirname, './templates')))
app.use(router(app))

app.get('/', function*(){
	this.render('home',{
		name : "David"
	})
})

app.listen(4000)
