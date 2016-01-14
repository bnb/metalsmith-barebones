var metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown')
var assets = require('metalsmith-assets');
var collections = require('metalsmith-collections');
var layouts = require('metalsmith-layouts');



metalsmith(__dirname)
    .use(markdown({
        smartypants: true,
        gfm: true,
        tables: true
    }))
    .use(assets({
        source: './assets',
        destination: './assets'
    }))
    .use(collections({
        
    }))
    .use(layouts({
        engine: 'handlebars'
    }))
    .build(function(err){
        if(err) throw(err)
    });