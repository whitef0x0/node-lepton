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
        _ = require('lodash'),
        fs = require('fs');

    var node_lepton = {
        compress: function( sourceFile, compressedFile, callback){
            exec( "lepton -memory=1024M -threadmemory=128M " + sourceFile + " " + compressedFile, function (error, stdout, stderr) {
                if (error) {
                    console.error('exec error: ' + error);
                    return callback(error);
                }
                
                return callback(null);
            });
        },
        decompress: function( sourceFile, decompressedFile, callback){

            exec( "lepton -memory=1024M -threadmemory=128M " + sourceFile + " " + decompressedFile, function (error, stdout, stderr) {
                if (error) {
                    console.error('exec error: ' + error);
                    return callback(error);
                }
                
                return callback(null);
            });
        },
    };
    
    module.exports = node_lepton;

}())
