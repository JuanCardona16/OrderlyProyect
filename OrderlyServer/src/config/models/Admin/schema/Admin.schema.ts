import mongoose from "mongoose";
import crypto from "node:crypto";
import { Admin } from "../entity/Admin.entity";
import {
  passwordHash,
  validatePassword,
} from "@/modules/authentication/helpers";
import { setError } from "@/helpers";

const AdminMongoSchema = new mongoose.Schema<Admin>(
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
    restaurantId: {
      type: String,
      trim: true,
    },
    rol: {
      type: String,
      required: true,
      trim: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

AdminMongoSchema.pre("save", function (next) {
  if (!validatePassword(this.password)) {
    return next(setError(400, "Invalid credentials"));
  }
  this.password = passwordHash(this.password, 12);
  next();
});

export default AdminMongoSchema;
