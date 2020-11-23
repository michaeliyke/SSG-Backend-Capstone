/**
 * tasks/pipeline.js
 *
 * The order in which your CSS, JavaScript, and client-side template files
 * injected as <script> or <link> tags.
 *
 * > If you are not relying on automatic asset linking, then you can safely ignore this file.
 *
 * For more information see:
 *   https://sailsjs.com/anatomy/tasks/pipeline.js
 */
// CSS files to inject as <link> tags, in order.
//
// > Note: if you're using built-in LESS support with default settings,
// > you'll want to change `assets/styles/importer.less` instead.
//
var cssFilesToInject = [

  // Bring in `.css` files for themes and style guides (e.g. Bootstrap, Foundation)
  'dependencies/**/*.css',

  // All of the rest of your custom `.css`
  'styles/**/*.css'
];
// Client-side javascript files to inject as <script> tags, in order.
//
var jsFilesToInject = [

  // Load `sails.io` before everything else.
  'dependencies/sails.io.js',

  // other client-side JavaScript dependencies.
  // (e.g. Lodash, Vue.js, jQuery, Bootstrap, Ember, Angular, etc.)
  // list dependencies that depend on each other in the right order!
  'dependencies/lodash.js',
  'dependencies/jquery.min.js',
  'dependencies/vue.js',
  'dependencies/vue-router.js',
  'dependencies/**/*.js',

  // Vendor dependencies
  'vendor/jquery/dist/jquery.js',
  'vendor/semantic/dist/semantic.js',
  'vendor/jsrender/jsrender.js',

  // First amongst the app-level files, bring in cloud configuration
  'js/cloud.setup.js',

  // Bring in components & utilities before bringing in the rest (i.e. page scripts)
  'js/components/**/*.js',
  'js/utilities/**/*.js',

  // The rest of your custom client-side js files
  'js/**/*.js'
];
// https://sailsjs.com/docs/concepts/assets/task-automation
//
var templateFilesToInject = [
  'templates/**/*.html'
];

//
// **You should not need to change any of
// the code below, unless you are modifying the default asset pipeline.**

// Default path for public folder (see documentation on sailsjs.com for more information)
var tmpPath = '.tmp/public/';

// Prefix relative paths to source files so they point to the proper locations
// (i.e. where the other Grunt tasks spit them out, or in some cases, where
// they reside in the first place)
module.exports.cssFilesToInject = cssFilesToInject.map((cssPath) => {
  // If we're ignoring the file, make sure the ! is at the beginning of the path
  if (cssPath[0] === '!') {
    return require('path').join('!' + tmpPath, cssPath.substr(1));
  }
  return require('path').join(tmpPath, cssPath);
});
module.exports.jsFilesToInject = jsFilesToInject.map((jsPath) => {
  // If we're ignoring the file, make sure the ! is at the beginning of the path
  if (jsPath[0] === '!') {
    return require('path').join('!' + tmpPath, jsPath.substr(1));
  }
  return require('path').join(tmpPath, jsPath);
});
module.exports.templateFilesToInject = templateFilesToInject.map((tplPath) => {
  // If we're ignoring the file, make sure the ! is at the beginning of the path
  if (tplPath[0] === '!') {
    return require('path').join('!assets/', tplPath.substr(1));
  }
  return require('path').join('assets/', tplPath);
});
