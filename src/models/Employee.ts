/*

employee_id: INT (Primary Key, Auto Increment)
name: VARCHAR(255) (Not Null)
email: VARCHAR(255) (Unique, Not Null)
designation_id: INT (Foreign Key References Designations.designation_id, Not Null)
date_joined: DATE (Not Null)

*/

import mongoose, { Document, Schema } from "mongoose";
export interface Employee extends Document {
  username: string;
  createdAt: Date;
  email: string;
  designation_id: mongoose.Types.ObjectId;
}
const EmployeeSchema: Schema<Employee> = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  designation_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Designation",
    required: true,
  },
});

export const EmployeeModel =
  mongoose.models.Employee ||
  mongoose.model<Employee>("Employee", EmployeeSchema);
