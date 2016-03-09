module.exports = function(grunt) {

    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: { 
            dist: {
                src: [ ''],
                dest: ''
            }
            // 2. Настройка для объединения файлов находится тут
        },

        cssmin: {
            dist: {
                src: 'styles/style.css',
                dest: 'styles/style.min.css'
            }
        },
        sass: {
            dist: {
              files: [{
                expand: true,
                cwd: 'styles',
                src: ['*.scss'],
                dest: 'styles',
                ext: '.css'
              }]
             }
        },
        watch: {
             sass: {
               files: 'styles/*.scss',
               tasks: ['sass'],
               
             },
        },

    });

    // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');


    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('default', ['sass', 'cssmin']);

};