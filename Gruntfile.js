module.exports = function(grunt) {
    
    // Configuração do Grunt
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Configuração do LESS
        less: {
            development: {
                files: {
                    'dist/css/style.css': 'src/less/style.less'
                }
            }
        },

        // Minificação do JavaScript
        uglify: {
            my_target: {
                files: {
                    'dist/js/app.min.js': ['src/js/app.js']
                }
            }
        }
    });

    // Carregar os plugins do Grunt
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Registrar as tarefas
    grunt.registerTask('default', ['less', 'uglify']);
};
