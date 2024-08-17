import { NextFunction, Request, Response } from "express";
import { z } from "zod";

export const validateSchema = (schema: z.ZodSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse(req.body);
            next();
        } catch (error) {
            if(error instanceof z.ZodError){
                res.status(400).json({ error: error.errors });
            }else{
                res.status(400).json({ error: 'Interval server error'});
            }
        }
    };
};
