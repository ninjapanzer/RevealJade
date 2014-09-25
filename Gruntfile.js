/* global module:false */
module.exports = function(grunt) {
  var port = grunt.option('port') || 8000;

  function TextBlockFilter(node) {
    this.node = node;
  }

  TextBlockFilter.prototype.visit = function(node){

      // first this is called with a node containing all the block's lines
      // as sub-nodes, with their first word interpreted as the node's name
      //
      // so here, collect all the nodes' text (including its name)
      // into a single Text node, and then visit that instead.
      // the child nodes won't be visited - we're cutting them out of the
      // parse tree

      var text = new jade.nodes.Text();
      for (var i=0; i < node.length; i++) {
          text.push (node[i].name + (node[i].text ? node[i].text[0] : ""));
      }
      this.visitNode (text);
  };
  // Project configuration

  grunt.loadNpmTasks( 'grunt-contrib-watch' );
  grunt.loadNpmTasks( 'grunt-contrib-connect' );
  grunt.loadNpmTasks( 'grunt-contrib-jade' );
  grunt.loadNpmTasks( 'grunt-contrib-sass' );

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      server: {
        options: {
          port: port,
          base: '.',
          debug: true
        }
      }
    },
    jade: {
      compile: {
        options: {
          filters: require('./filters.js'),
          pretty: true,
          data: {
            debug: false
          }
        },
        files: [{
          expand: true,
          src: [ '**/*.jade', '!shared/**' ],
          ext: '.html'
        }]
      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          src: ['**/*.scss', '!bower_components/**/*.scss'],
          ext: '.css'
        }]
      }
    },
    watch: {
      sass: {
        files: ['**/*.scss'],
        tasks: 'sass',
        options:{
          livereload: 35729
        }
      },
      jade: {
        files: ['**/*.jade'],
        tasks: 'jade',
        options:{
          livereload: 35729
        }
      }
    }

  });

  // Serve presentation locally
  grunt.registerTask( 'serve', ['jade', 'connect', 'watch' ] );

};