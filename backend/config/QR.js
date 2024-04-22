
const QRCode=require("qrcode")
const path = require('path');

const generateQR = async (data) => {
    try {
        const filename = Date.now();
        await QRCode.toFile(path.join(__dirname,`../../public/qrcodes/${filename}.png`), data);
        return `qrcodes/${filename}.png`; 
    } catch (error) {
        console.error('Error generating QR code:', error);
        throw error;
    }
}

module.exports = generateQR;


