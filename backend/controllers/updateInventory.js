const Inventory = require('../models/inventory');
const generateQR = require('../config/QR.js');

exports.updateInventoryData = async (req, res) => {
    try {
        const newData = {
            name: req.body.name,
            dateReceived: req.body.date,
            ReceivedQty: req.body.qty
        };

        const qrCodeData = JSON.stringify(newData);
        const qrCodePath = await generateQR(qrCodeData);
        
        const updatedData = {
            name: newData.name,
            dateReceived: newData.dateReceived,
            ReceivedQty: newData.ReceivedQty,
            qrCode: qrCodePath
        };

        const inventoryId = req.params.id;
        const updatedInventory = await Inventory.findByIdAndUpdate(inventoryId, updatedData, { new: true });

        res.json({ success: true, updatedInventory });
    } catch (error) {
        console.error('Error updating inventory:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
};

