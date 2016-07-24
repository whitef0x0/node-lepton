/*
*   File:       index.js (node-lepton)
*   Project:    Node-Lepton
*   Date:       July 2016.
*
*   Description: This npm module provides a wrapper for using Dropbox's Lepton in Nodejs code
*/


(function(){
    var child_process = require('child_process'),
        exec = require('child_process').exec,
        fs = require('fs');

    var node_lepton = {
        compress: function( sourceFile,  options, callback){
	    var generatedFile = Math.random().toString(36).slice(2)+".lep";
            exec( "lepton -memory=1024M -threadmemory=128M " + sourceFile + " " + generatedFile, function (error, stdout, stderr) {
                if (error) {
                    console.error('exec error: ' + error);
                    return callback(error, null);
                }
	
		fs.readFile(generatedFile, function(error, file_binary_data){
			if(error) return callback(error, null);

			fs.unlink(generatedFile, function(err){
				if(err) return callback(err, null);
				return callback(null, file_binary_data);
			});
		});
            });
        },
        decompress: function( sourceFile, options, callback){
	    var generatedFile = Math.random().toString(36).slice(2)+".jpeg";	
            exec( "lepton -memory=1024M -threadmemory=128M " + sourceFile + " " + generatedFile, function (error, stdout, stderr) {
                if (error) {
                    console.error('exec error: ' + error);
                    return callback(error, null);
                }
               
		fs.readFile(generatedFile, function(error, file_binary_data){
                        if(error) return callback(error, null);

                	fs.unlink(generatedFile, function(err){
                                if(err) return callback(err, null);
                                return callback(null, file_binary_data);
                        });
		});
                return callback(null, error);
            });
        },
    };
    
    module.exports = node_lepton;

}())
