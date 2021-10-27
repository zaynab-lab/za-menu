const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema(
  {
    ownerName: { type: String },
    ownerNumber: { type: String, require: true, unique: true },
    brand: {
      name: { type: String },
      imgLink: { type: String }
    },
    businessCode: { type: String },
    businessType: { type: String },
    exRate: { type: Number },
    currency: { type: String },
    signDates: { type: Date, default: Date.now },
    orderTimes: Number,
    credit: Number,
    address: {
      content: { type: String },
      long: { type: Number },
      lat: { type: Number }
    },
    messages: [
      {
        reciverNumber: { type: String },
        content: { type: String },
        date: { type: Date, default: Date.now }
      }
    ],
    addedby: { type: String }
  },

  { collection: "businesses" }
);

export default mongoose.models.Business ||
  mongoose.model("Business", businessSchema);
