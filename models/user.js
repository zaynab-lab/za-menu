const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    number: { type: String, require: true, unique: true },
    role: { type: String },
    ccode: { type: String },
    blocked: { type: Boolean },
    logDates: { type: [Date] },
    signDate: { type: Date, default: Date.now },
    otp: { type: String },
    otptimes: { type: Number },
    ordertimes: { type: Number },
    activeOrder: { type: Boolean },
    jwt: { type: String },
    credit: { type: Number, default: 1 },
    mail: { type: String },
    workingtimes: { type: Number, default: 1 },
    addresses: [
      {
        id: { type: Number },
        deleted: { type: Boolean },
        content: { type: String },
        long: { type: Number },
        lat: { type: Number }
      }
    ],
    birth: { type: Date },
    promoCode: { type: String },
    invitedBy: { type: String },
    invintions: { type: Number },
    activeInvintions: { type: Number },
    byQr: { type: Boolean },
    messages: [
      {
        reciverNumber: { type: String },
        content: { type: String },
        date: { type: Date, default: Date.now }
      }
    ]
  },
  { collection: "users" }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
