module.exports = function(grunt) {

    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: { 
             options: {
             separator: ';',
                 },
            dist: {
                src: [ 'css/src/*.css'],
                dest: 'css/dist/css.main.css'
            }
            // 2. Настройка для объединения файлов находится тут
        },

        cssmin: {
            dist: {
                src: 'css/dist/css.main.css',
                dest: 'css/dist/css.main.min.css'
            }
        },

        sass: {
            dist: {
              files: [{
                expand: true,
                cwd: 'css/src',
                src: ['*.scss'],
                dest: 'css/src',
                ext: '.css'
              }]
             }
        },

        
    });


    // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('default', ['concat', 'cssmin', 'sass']);

};