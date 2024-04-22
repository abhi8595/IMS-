const Inventory = require('../models/inventory');

exports.getAllInventory = async (req, res) => {
    try {
        const inventoryList = await Inventory.find();
        res.status(200).json(inventoryList);
    } catch (error) {
        console.error('Error fetching inventory:', error);
        res.status(500).json({
            success: false,
            error: 'Internal server error',
            message: error.message,
        });
    }
};


