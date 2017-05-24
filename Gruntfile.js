module.exports = function(grunt) {

  var configs = require('load-grunt-config')(grunt, {
    configPath: __dirname + '/grunt-tasks',
    data: {
      pkg: grunt.file.readJSON("package.json")
    }
  });

  // configure the tasks
  grunt.initConfig(configs);
  // define the tasks
  grunt.registerTask(
    'release',[
      'lint',
      'copy',
      'sass:expanded',
      'sass:min',
      'postcss:expended',
      'postcss:min',
      'concat:dist',
      'uglify:dist',
      'uglify:extras',
      'usebanner:release',
      'compress:main',
      'compress:src',
      'compress:starter_template',
      'compress:parallax_template',
      'replace:version',
      'replace:readme',
      'rename:rename_src',
      'rename:rename_compiled'
    ]
  );

  grunt.registerTask('jade_compile', ['jade', 'notify:jade_compile']);
  grunt.registerTask('js_compile', ['concat:temp', 'uglify:bin', 'notify:js_compile', 'clean:temp']);
  grunt.registerTask('sass_compile', ['sass:gh', 'sass:bin', 'postcss:gh', 'postcss:bin', 'notify:sass_compile']);
  grunt.registerTask('server', ['browserSync', 'notify:server']);
  grunt.registerTask('lint', ['removelogging:source']);
  grunt.registerTask('monitor', ["concurrent:monitor"]);
  grunt.registerTask('travis', ['js_compile', 'sass_compile', 'jasmine']);
};
