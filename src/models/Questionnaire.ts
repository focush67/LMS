import mongoose, { Schema, Document } from "mongoose";

export interface Questionnaire extends Document {
  resource_id: mongoose.Types.ObjectId;
  question: string;
  options: string[];
  correct_option: number;
}

const QuestionnaireSchema: Schema = new Schema({
  resource_id: {
    type: Schema.Types.ObjectId,
    ref: "TrainingResource",
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    validate: {
      validator: function (value: string[]) {
        return value.length === 4;
      },
      message: "A question must have exactly 4 options.",
    },
    required: true,
  },
  correct_option: {
    type: Number,
    required: true,
    validate: {
      validator: function (value: number) {
        return value >= 0 && value <= 3;
      },
      message: "Correct option must be an index between 0 and 3.",
    },
  },
});
export const QuestionnaireModel =
  mongoose.models.Questionnaire ||
  mongoose.model<Questionnaire>("Questionnaire", QuestionnaireSchema);
