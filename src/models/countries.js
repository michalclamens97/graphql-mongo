import mongoose from "mongoose";

export const Countries = mongoose.model("Countries", {
  country: String,
  year: String,
  area: { type: Number, min: 18, max: 3500000 },
  population: { type: Number, min: 18, max: 3500000 },
});
