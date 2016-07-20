/*
*   File:       index.js (pdffiller)
*   Project:    PDF Filler
*   Date:       May 2015.
*
*   Description: This PDF filler module takes a data set and creates a filled out
*                PDF file with the form fields populated.
*/
(function(){
    var child_process = require('child_process'),
        exec = require('child_process').exec,
        _ = require('lodash'),
        fs = require('fs');

    var node_lepton = {

        compress: function( sourceFile, callback){
            var regName = /FieldName: ([^\n]*)/,
                regType = /FieldType: ([A-Za-z\t .]+)/,
                regFlags = /FieldFlags: ([0-9\t .]+)/,
                fieldArray = [],
                currField = {};

            if(nameRegex !== null && (typeof nameRegex) == 'object' ) regName = nameRegex;

            exec( "lepton " + sourceFile, function (error, stdout, stderr) {
                if (error) {
                    console.error('exec error: ' + error);
                    return callback(error, null);
                }
                
                return callback(null, stdout);
            });
        },
    };
    
    module.exports = node_lepton;

}())
