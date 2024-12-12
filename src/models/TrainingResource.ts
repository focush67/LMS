import mongoose, { Schema, Document } from "mongoose";

export interface TrainingResource extends Document {
  resource_type: "video" | "document";
  resource_title: string;
  resource_url: string;
  description?: string;
}

const TrainingResourceSchema: Schema<TrainingResource> = new Schema({
  resource_title: {
    type: String,
    required: true,
  },
  resource_type: {
    type: String,
    enum: ["video", "document"],
    required: true,
  },
  resource_url: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

export const TrainingResourceModel =
  mongoose.models.TrainingResource ||
  mongoose.model<TrainingResource>("TrainingResource", TrainingResourceSchema);
