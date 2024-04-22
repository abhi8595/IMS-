
const Inventory = require('../models/inventory');
exports.getInventoryById = async (req, res) => {
    try {
        const inventoryId = req.params.id; 
        const inventory = await Inventory.findById(inventoryId);
        if (!inventory) {
            return res.status(404).json({
                success: false,
                error: 'Inventory not found',
            });
        }
        res.status(200).json(inventory);
    } catch (error) {
        console.error('Error fetching inventory by ID:', error);
        res.status(500).json({
            success: false,
            error: 'Internal server error',
            message: error.message,
        });
    }
};

