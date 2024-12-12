import mongoose, { Schema, Document } from "mongoose";
export interface DesignationTrainingResource extends Document {
  designation_id: mongoose.Types.ObjectId;
  resource_id: mongoose.Types.ObjectId;
}

const DesignationTrainingResourceSchema: Schema<DesignationTrainingResource> =
  new Schema({
    designation_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Designation",
      required: true,
    },
    resource_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TrainingResource",
      required: true,
    },
  });

DesignationTrainingResourceSchema.index(
  { designation_id: 1, resource_id: 1 },
  { unique: true }
);

export const DesignationTrainingResourceModel =
  mongoose.models.DesignationTrainingResourceModel ||
  mongoose.model<DesignationTrainingResource>(
    "DesignationTrainingResource",
    DesignationTrainingResourceSchema
  );
