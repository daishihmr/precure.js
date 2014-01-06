module.exports = function(grunt) {
    var files = [
        'src/main.js',
        'src/unmarked.js',
        'src/maxheart.js',
        'src/splashstar.js',
        'src/five.js',
        'src/fivegogo.js',
        'src/fresh.js',
        'src/heartcatch.js',
        'src/suite.js',
        'src/smile.js',
        'src/dokidoki.js',
        'src/happinesscharge.js'
    ];

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-jsdoc');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            precure: {
                src: files,
                dest: 'build/precure.js'
            }
        },

        uglify: {
            precure: {
                files: {
                    'build/precure.min.js': ['build/precure.js']
                }
            }
        },

        watch: {
            precure: {
                tasks: ['concat'],
                files: files
            }
        },

        jasmine: {
            precure: {
                src: files,
                options: {
                    specs: 'spec/*Spec.js',
                    helpers: 'spec/*Helper.js'
                }
            }
        },

        jsdoc: {
            precure: {
                src: files,
                options: {
                    destination: 'docs'
                }
            }
        }

    });

    grunt.registerTask('default', ['jasmine', 'concat', 'uglify', 'jsdoc']);
};