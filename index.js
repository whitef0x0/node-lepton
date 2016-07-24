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
        compress: function( sourceFile, compressedFile, options, callback){
            exec( "lepton -memory=1024M -threadmemory=128M " + sourceFile + " " + compressedFile, function (error, stdout, stderr) {
                if (error) {
                    console.error('exec error: ' + error);
                    return callback(null, error);
                }
	
		fs.readFile(compressedFile, function(error, file_binary_data){
			if(err) return callback(null, error);

			fs.unlink(compressedFile);
                	return callback(file_binary_data, null);
		});
            });
        },
        decompress: function( sourceFile, decompressedFile, options, callback){

            exec( "lepton -memory=1024M -threadmemory=128M " + sourceFile + " " + decompressedFile, function (error, stdout, stderr) {
                if (error) {
                    console.error('exec error: ' + error);
                    return callback(null, error);
                }
               
		fs.readFile(decompressedFile, function(error, file_binary_data){
                        if(err) return callback(null, error);

                        fs.unlink(decompressedFile);
                        return callback(file_binary_data, null);
                });
                return callback(null, error);
            });
        },
    };
    
    module.exports = node_lepton;

}())
