import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createSubCategoryController = async (req: Request, res: Response) => {
    try {
        const subCategory = await prisma.subCategory.create({data: req.body});
        res.status(201).json(subCategory);
    } catch (error) {
        res.status(500).json({ error: 'Error creating a sub - category'});
    }
};
