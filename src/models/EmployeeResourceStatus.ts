import mongoose, { Schema, Document } from "mongoose";
export interface EmployeeResourceStatus extends Document {
  employee_id: mongoose.Types.ObjectId;
  resource_id: mongoose.Types.ObjectId;
  status: "pending" | "in_progress" | "completed";
  completion_date?: Date;
}

const EmployeeResourceStatusSchema: Schema<EmployeeResourceStatus> = new Schema(
  {
    employee_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    },
    resource_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TrainingResource",
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "In_Progress", "Completed"],
    },
    completion_date: {
      type: Date,
    },
  }
);

EmployeeResourceStatusSchema.index(
  { employee_id: 1, resource_id: 1 },
  { unique: true }
);

export const EmployeeResourceStatusModel =
  mongoose.models.EmployeeResourceStatusModel ||
  mongoose.model<EmployeeResourceStatus>(
    "EmployeeResourceStatus",
    EmployeeResourceStatusSchema
  );
