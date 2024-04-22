const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
    name: {
        type: String,
    },
    dateReceived: {
        type: Date,
    },
    dateDispatched: {
        type: Date,
        default: null,
    },
    ReceivedQty: {
        type: Number,
        default: 0,
    },
    DispatchedQty: {
        type: Number,
        default: 0,
    },
    status: {
        type: String,
        default: 'pending',
    },
    qrCode: {
        type: String,
    },
});

module.exports = mongoose.model('Inventory', InventorySchema);
