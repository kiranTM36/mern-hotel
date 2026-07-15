const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    roomNo: {
      type: Number,
      required: true,
      unique: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      enum: ["Standard", "Deluxe", "Suite", "Family"],
      required: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    capacity: {
      type: Number,
      required: true,
      default: 2,
    },

    bedType: {
      type: String,
      enum: ["Single", "Double", "Queen", "King"],
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    amenities: [
      {
        type: String,
        enum: [
          "WiFi",
          "TV",
          "AC",
          "Breakfast",
          "Bathroom",
          "Balcony",
        ],
      },
    ],

    status: {
      type: String,
      enum : ['Booked','Available'],
      default: 'Available',
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Room", roomSchema);