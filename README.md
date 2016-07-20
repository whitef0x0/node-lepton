Node-Lepton
===========
A NodeJS wrapper library for Dropbox JPEG Letpon compression tool.

Quick start
-----------
**This guide assumes you have Dropbox Lepton and node/npm already installed.**

First, run `npm install node-lepton --save` for your app. Then, in an Express app:

```js
var lepton = require('node-lepton');

// ...
```

After this you can run one of two commands, compress or decompress. You must provide a valid path for either of these functions to work.

These functions takes a callback that returns an error object and the output in form of a binary file blob.

```js
lepton.compress('../../aoeu.jpeg', '../../aoeu.lep', 
{
  unjailed: true,
},
function(err){
  if(err) throw err;
  
  console.log('Successfully compressed aoeu.jpeg');
});

lepton.decompress('../../aoeu.lep', '../../aoeu.jpeg', 
{
  unjailed: true,
},
function(err){
  if(err) throw err;
  
  console.log('Successfully decompressed aoeu.lep');
});
```

##Options

####unjailed
  type: Boolean

####single_thread
  type: Boolean

####max_children
  type: Integer

####preload
  type: Boolean

####allow_progressive
  type: Boolean

####fork
  type: Boolean

####zlib
  type: Boolean

####timebound
  type: Integer (in ms)
  
####Socket
  type: Boolean or Integer (port)
  
####Listen
  type: Boolean or Integer
  
####ZLibListen
  type: Boolean or Integer
  
