module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: { //configurando grunt-contrib-less//
            development: { //ambiente padrao// 
                files: {
                    'main.css' : 'main.less' // 'arquivo.destino' : arquivo.origem//
                }
            },
            produtction: { //ambiente de produção, usuario do site//
                options: { //minificação//
                    compress: true,    
                },
                files: {
                    'main.min.css' : 'main.less' //mesma coisa que em development so que minificado//
                }
            }
        },
        clean: ['prebuild'],
        uglify: {
            target: {
                files: {
                    'main.min.js' : 'main.js'
                }
            }
        }
    })

    grunt.registerTask('olaGrunt',function(){ //cria a função a ser chamada//
        const done = this.async();
        setTimeout(function() { //gera delay de 3s//
            console.log('Olá Grunt'); //escreve Olá Grunt no terminal//
            done();
        }, 3000);
        
    })

    grunt.loadNpmTasks('grunt-contrib-less');//carrega plugin do less//
    grunt.loadNpmTasks('grunt-contrib-uglify');//carrega plugin comprimir JS//
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default',['less','clean','uglify']); //cria a task padrão que pode chamar multiplas tasks//
}