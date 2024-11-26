import mongoose from "mongoose";
import crypto from "node:crypto";
import { Customer } from "../entity/Customer.entitie";

const CustomerMongoSchame = new mongoose.Schema<Customer>(
  {
    uuid: {
      type: String,
      required: true,
      unique: true,
      default: () => crypto.randomUUID(),
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    address: [
      {
        street: { type: String, trim: true, required: true },
        city: { type: String, trim: true, required: true },
        state: { type: String, trim: true, required: true },
        zipCode: { type: String, trim: true },
      },
    ],
    photo: {
      type: String,
      required: true,
    },
    restaurantsFavorites: [{ type: String, _id: false }],
    rol: {
      type: String,
    },
    orders: [{ type: String, _id: false }],
    notifications: [{ type: String, _id: false }],
    wishlist: [{ type: String, _id: false }],
    preferredPaymentMethod: [{ type: String, _id: false }],
    isVerified: false,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default CustomerMongoSchame;
