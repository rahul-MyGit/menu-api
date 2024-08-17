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

export const getAllSubCategoriesController = async (req: Request, res: Response) => {
    try {
        const subCategories = await prisma.subCategory.findMany();
        res.json(subCategories);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching sub - categories'});
    }
};

//getting all subcategory under category
export const getAllSubCategoryController = async (req: Request, res: Response) => {
    try {
        const { categoryId } = req.params;
        const subCategories = await prisma.subCategory.findMany({
            where: { categoryId: parseInt(categoryId) },
        });
        res.json(subCategories);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching sub-categories' });
    }
};
