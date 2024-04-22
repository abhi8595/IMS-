
 const add = require('../models/inventory');
const generateQR = require('../config/QR');

exports.addInventoryData = async (req, res) => {
    try {
        const inventoryData = {
            name: req.body.name,
            dateReceived: req.body.date,
            ReceivedQty: req.body.qty
        };
        
        const qrCodeData = JSON.stringify(inventoryData);
        const qrCodePath = await generateQR(qrCodeData); 
        
        await add.create({
            name: req.body.name,
            dateReceived: req.body.date,
            ReceivedQty: req.body.qty,
            qrCode: qrCodePath,
        });
        

        res.json({ success: true, qrCode: qrCodePath });
    } catch (error) {
        console.error('Error generating and saving QR code:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
};
