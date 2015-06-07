module.exports = (grunt) ->
  pkg = grunt.file.readJSON('package.json');
  grunt.initConfig
    coffee:
      compile:
        files: [
          expand: true
          cwd: 'source/'
          src: [
            '**/*.coffee'
          ]
          dest: 'source/'
          ext: '.js'
        ]
    watch:
      files: ['source/**/*.coffee']
      tasks: 'coffee'

  # gruntのパッケージを読み込みます
  for taskName of pkg.devDependencies when taskName.substring(0, 6) is 'grunt-'
    grunt.loadNpmTasks(taskName)

    grunt.registerTask 'default', ['watch']
