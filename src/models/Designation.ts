import mongoose, { Schema, Document } from "mongoose";
export interface Designation extends Document {
  title: string;
  description?: string;
}

const DesignationSchema: Schema<Designation> = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
});

export const DesignationModel =
  mongoose.models.Designation ||
  mongoose.model<Designation>("Designation", DesignationSchema);
