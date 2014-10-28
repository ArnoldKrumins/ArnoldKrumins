/**
 * Created by arnold.krumins on 14/10/2014.
 */
module.exports = function(grunt){


    grunt.initConfig({

        concat:{

            js:{

                src:['bower_components/angular/angular.min.js',
                    'app/main.js','app/Directives/*.js','app/Services/*.js'],
                dest:'dist/app.js'

            }

        },
        uglify:{

            js:{

                src:['dist/app.js'],
                dest:'dist/app.js'

            }
        }

    })

    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-concat");

}