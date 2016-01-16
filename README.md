# Barebones Metalsmith
## A boilerplate for creating websites with Metalsmtih
I've created this repository to eliminate the task of reinstalling my core plugins and rewriting my core `build.js` file every time I start a Metalsmith website.

## Included in this boilerplate
In order of inclusion inside `build.js`.

#### Metalsmith
The core Metalsmith Module
[Link][metalsmith] | [npm][metalsmith-npm] | [GitHub][metalsmith-github]

#### Metalsmith Markdown
Converts Markdown files (including front-matter) into HTML files.
[Link][metalsmith-markdown] | [npm][metalsmith-markdown-npm] | [GitHub][metalsmith-markdown-github]

#### Metalsmith Assets
Adds static assets to your build directory
[Link][metalsmith-assets] | [npm][metalsmith-assets-npm] | [GitHub][metalsmith-assets-github]

#### Metalsmith Collections
Adds collections of files to the global metadata
[Link][metalsmith-collections] | [npm][metalsmith-collections-npm] | [GitHub][metalsmith-collections-github]

#### Metalsmith Layouts
A Metalsmith plugin that allows layouts (i.e. templates) to be used in conjunction with source files.
[Link][metalsmith-layouts] | [npm][metalsmith-layouts-npm] | [GitHub][metalsmith-layouts-github]


## How to use this boilerplate
In order of importance/implementation.

#### Layouts
Currently, the boilerplate uses Handlebars templates for layouts. Edit the `layouts/index.hbs` file to modify the index template, which is applied to the `src/index.md` file. 

To create a new layout, simply add a new file with the appropriate name to `layouts/` with the suffix of `.hbs`. To apply this layout to a template, add `layout: <layout>.hbs` to any and all (each layout can be applied to more than one) `.md` file in `src/` that you want it to be applied to.


#### Assets 
To add static assets to your `build/` directory, add them to the `assets/` folder in the structure you want them in. They are currently piped to `assets/` in the `build/` directory when the build script is run, but this can be changed in the `build.js` file's `.use(assets())` call with the `destination` property.

#### Markdown source files
All Markdown source files should go into `src/`. They can be iterated, modified, and pulled from the `metalsmith-layouts` plugin, with the assistance of `metalsmith-collections` metadata and Handlebar's helper functions like `{{#each}}` and `{{#if}}`. Metadata can be pulled from inside the front-matter in these helper functions where the collection has been explicitly stated by simply calling the metadata's name; i.e. `{{title}}` to return `Title Here` from the `title: Title Here` metadata INSIDE the front-matter. 

Here is a template for basic front-matter that can be extended:

```
---
title:
slug:
layout:
collection:
---
```

#### Collections
Collections have deliberately been left empty, so as not to force any certain pattern or become reliant on defaults. Look at the `metalsmith-collections` documentation to see how to implement them.

## Build, Deploy, and Clean

#### Build
Compiles site from contents in `src/` and templates in `layouts/`.
```bash
cd /path/to/metalsmith-barebones
node build
```

#### Clean
Wipes your local `build/` folder clean.
```bash
cd /path/to/metalsmith-barebones
gulp clean
```

#### Deploy
Pushes `build/` to the `gh-pages` branch on GitHub. **The gh-pages branch must already exist in your site's repository on GitHub.com!**
```bash
cd /path/to/metalsmith-barebones
gulp deploy
```


[metalsmith]: http://metalsmith.io
[metalsmith-npm]: https://www.npmjs.com/package/metalsmith
[metalsmith-github]: https://github.com/metalsmith/metalsmith
[metalsmith-markdown]: https://github.com/segmentio/metalsmith-markdown
[metalsmith-markdown-npm]:https://www.npmjs.com/package/metalsmith-markdown
[metalsmith-markdown-github]: https://github.com/segmentio/metalsmith-markdown
[metalsmith-assets]:https://github.com/treygriffith/metalsmith-assets
[metalsmith-assets-npm]: https://www.npmjs.com/package/metalsmith-assets
[metalsmith-assets-github]: https://github.com/treygriffith/metalsmith-assets
[metalsmith-collections]: https://github.com/segmentio/metalsmith-collections
[metalsmith-collections-npm]:https://www.npmjs.com/package/metalsmith-collections
[metalsmith-collections-github]:https://github.com/segmentio/metalsmith-collections
[metalsmith-layouts]:https://github.com/superwolff/metalsmith-layouts
[metalsmith-layouts-npm]: https://www.npmjs.com/package/metalsmith-layouts
[metalsmith-layouts-github]: https://github.com/superwolff/metalsmith-layouts