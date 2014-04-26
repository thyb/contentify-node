'use strict';

module.exports = function(grunt) {
    // Project configuration.
    var gruntConf = {
        watch: {
            coffee: {
                files: ['./lib/*.coffee'],
                tasks: ['coffee']
            },
        },
        coffee: {
            default: {
                expand: true,
                cwd: 'lib',
                src: ['*.coffee'],
                dest: 'lib',
                ext: '.js',
                options: {
                    bare: true
                }
            }
        },
        taskDefault: ['coffee']
    };

    grunt.initConfig(gruntConf);

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.registerTask('default', gruntConf.taskDefault);
};