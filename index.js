var path = require('path')
var Ractive = require('ractive')
var rcu = require('rcu/rcu.node')
var fs = require('fs')

rcu.init(Ractive)

module.exports = function (directory, opts) {
	var base=directory
	
	function parser(path) {
		console.log(path)
		var template = { v:1, t:[] }
		try {
			template = rcu.parse(fs.readFileSync(path, 'utf8')).template
		} catch (e) { console.error(e) }
		return template
	}

	function render(path, data) {
		console.log('render:', base, path, data)
		var url = base+'/'+path+'.ract'
		console.log(url)
		
		var html = new Ractive({
			template: parser(url),
			data: data
		}).toHTML()
		this.body = html;
	}

	return function *(next) {
		this.render = render
		yield* next
	}
}