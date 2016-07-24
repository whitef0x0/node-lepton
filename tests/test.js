var lepton = require('./../index.js');

lepton.compress('./test.jpeg', null, function(err, data){
	if(err) throw err;
	//console.log(data);
});

lepton.decompress('./test.lep', null, function(err, data){
	if(err) {
		console.log(err)
		throw err;
	}
	//console.log(data);
});
