const mongoose = require("mongoose");
const { Schema } = mongoose;

// imports end

const cartSchema = new mongoose.Schema(
  {
    items: [{ type: Schema.Types.ObjectId, ref: "Product", required: true }],

    subtotal: {
      type: Number,
      trim: true,
    },

    shipping: {
      type: String,
      trim: true,
    },

    deliveryFee: {
      type: Number,
      trim: true,
    },

    total: {
      type: Number,
      trim: true,
    },
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", productSchema);
module.exports = Cart;
