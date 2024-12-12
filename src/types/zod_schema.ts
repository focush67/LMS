import { z } from "zod";

export const ZodEmployee = z.object({
  username: z
    .string()
    .min(5, "Username is required to have a length of at=least 5 characters"),
  createdAt: z.date().default(() => new Date()),
  email: z.string().email("Invalid EMAIL Format"),
  designation_id: z
    .string()
    .nonempty("Designation ID of the employee is required"),
});

export const ZodDesignation = z.object({
  title: z
    .string()
    .min(5, "Title is required to have a length of at-least 5 characters"),
  description: z.string().optional(),
});

export const ZodDesignationTrainingResource = z.object({
  designation_id: z
    .string()
    .nonempty("Designation ID is required for this transaction"),
  resource_id: z
    .string()
    .nonempty("Resource ID is required for this transaction"),
});

export const ZodEmployeeResourceStatus = z.object({
  employee_id: z
    .string()
    .nonempty("Employee ID is required for this transaction"),
  resource_id: z
    .string()
    .nonempty("Resource ID is required for this transaction"),
  status: z.enum(["pending", "in_progress", "completed"]),
  completion_date: z.string().datetime().optional(),
});

export const ZodQuestionnaire = z.object({
  resource_id: z
    .string()
    .nonempty("Resource ID is required for this transaction"),
  question: z
    .string()
    .nonempty("Question must be present for this transaction"),
  options: z
    .array(z.string())
    .length(4, "A question must have exactly 4 options"),
  correct_option: z
    .number()
    .int()
    .min(0, "Option index cannot be less than 0")
    .max(3, "Option index cannot be larger than 3"),
});

export const ZodTrainingResource = z.object({
  resource_title: z.string().nonempty("Resource title is required"),
  resource_type: z.enum(["video", "document"]),
  resource_url: z.string().url("Invalid URL Format"),
  description: z.string().optional(),
});

export type T_Employee = z.infer<typeof ZodEmployee>;
export type T_Designation = z.infer<typeof ZodDesignation>;
export type T_DesignationTrainingResource = z.infer<
  typeof ZodDesignationTrainingResource
>;
export type T_EmployeeResourceStatus = z.infer<
  typeof ZodEmployeeResourceStatus
>;
export type T_Questionnaire = z.infer<typeof ZodQuestionnaire>;
export type T_TrainingResource = z.infer<typeof ZodTrainingResource>;
