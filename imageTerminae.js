const QRCode = require('qrcode');
const data ={
    name : "pricemou",
    prenom : "claude",
    age : "21",
}

const generateQR = async text => {
	try {
		
		console.log(await QRCode.toString(text, {type: 'terminal'}));

	} catch(err){
		console.log(err);
	}
}

generateQR("data");