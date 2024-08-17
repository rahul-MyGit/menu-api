import { z } from "zod";

export const categorySchema = z.object({
    name: z.string().min(1),
    image: z.string().url(),
    description: z.string(),
    taxApplicability: z.boolean(),
    tax: z.number().optional(),
    taxType: z.string().optional(),
});
  
export const subCategorySchema = z.object({
    name: z.string().min(1),
    image: z.string().url(),
    description: z.string(),
    taxApplicability: z.boolean(),
    tax: z.number().optional(),
    categoryId: z.number(),
});
  
export const itemSchema = z.object({
    name: z.string().min(1),
    image: z.string().url(),
    description: z.string(),
    taxApplicability: z.boolean(),
    tax: z.number().optional(),
    baseAmount: z.number(),
    discount: z.number(),
    categoryId: z.number(),
    subCategoryId: z.number().optional(),
});
