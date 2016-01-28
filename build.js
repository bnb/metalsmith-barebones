var metalsmith  = require('metalsmith');
var markdown    = require('metalsmith-markdown')
var assets      = require('metalsmith-assets');
var cleanCSS    = require('metalsmith-clean-css');
var collections = require('metalsmith-collections');
var layouts     = require('metalsmith-layouts');
var watch       = require('metalsmith-watch');



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
    .use(cleanCSS({
        files: 'assets/css/**/*.css'
    }))
    .use(collections({
        // Add your collections!
        // --------- Structure:
        // 'name': {
        //     'sort-by': 'date', // Organizes posts by the `date` front-matter.
        //     'reverse': true, // Reverse chronological order (newest first).
        //     'refer'  : false // Adds a reference to the next post in the series.
        // }
    }))
    .use(layouts({
        engine: 'handlebars'
    }))
    .use(watch({
      paths: {
        "assets/**/*.js": true,
        "assets/**/*.css": true,
        "assets/**/*.jpg": true,
        "assets/**/*.gif": true,
        "assets/**/*.png": true,
        "assets/**/*.pdf": true,
        "assets/**/*.zip": true,
        "layouts/**/*.hbs": true,
        "partials/**/*.hbs": true,
        "${source}/**/*.md": true
      }
    }))
    .build(function(err){
        if(err) throw(err)
    });