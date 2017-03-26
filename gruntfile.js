module.exports = function(grunt) {

	// init configuration
	grunt.initConfig({
		jshint: {
			files: [
				"*.js", 
				"modules/core/server/*.js", 
				"modules/core/server/config/*.js",
				"modules/core/server/include/*.js",
				"modules/core/tests/*.js",
				],
			options: {
				esnext: true,
				globals: {
					jQuery: true
				}
			}
		},
		watch:{
			scripts:{
				files: [
				"*.js", 
				"modules/core/server/*.js", 
				"modules/core/server/config/*.js",
				"modules/core/server/include/*.js",
				"modules/core/tests/*.js",
				],
				tasks: ["jshint"],
			}
		}
	});


	// Load task "jshint"
	grunt.loadNpmTasks("grunt-contrib-jshint");
	// Load task "watch"
	grunt.loadNpmTasks("grunt-contrib-watch");
	
	// Register task "jshint"
	grunt.registerTask("default", ["jshint"]);
};