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

export const getSubCategoryByIdOrNameController = async (req: Request, res: Response) => {
    try {
        const { idOrName } = req.params;
        const subCategory = await prisma.subCategory.findFirst({
          where: {
            OR: [
              { id: parseInt(idOrName) || undefined },
              { name: idOrName },
            ],
          },
          include: { items: true },
        });
        if (subCategory) {
          res.json(subCategory);
        } else {
          res.status(404).json({ error: 'Sub-category not found' });
        }

    } catch (error) {
        res.status(500).json({ error: 'Error fetching sub-category' });
    }
}

export const editSubCategoryController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updatedSubCategory = await prisma.subCategory.update({
            where: { id: parseInt(id) },
            data: req.body,
        });
        res.json(updatedSubCategory);
    } catch (error) {
        res.status(500).json({ error: 'Error updating sub-category' });
    }
}
