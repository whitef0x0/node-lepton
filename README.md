Node-Lepton
===========
A NodeJS wrapper library for Dropbox JPEG Letpon compression tool.

Quick start
-----------
**This guide assumes you have Dropbox Lepton and node/npm already installed.**

First, run `npm install node-lepton --save` for your app. Then, in an Express app:

```js
var pdfFiller = require('node-lepton');

// ...
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
  
