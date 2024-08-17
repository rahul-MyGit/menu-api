import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createCategoryController = async (req: Request, res: Response) => {
    try {
        const category = await prisma.category.create({data: req.body});
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create category'});
    }
};


export const getAllCategoryController = async (req: Request, res: Response) => {
    try {
        const categories = await prisma.category.findMany();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get all categories'});
    }
};

export const getCategoryByIdOrNameController = async (req: Request, res: Response) => {
    try {
        const { identifier } = req.params;
        const category = await prisma.category.findFirst({
          where: {
            OR: [
              { id: parseInt(identifier) || undefined },
              { name: identifier },
            ],
          },
          include: { subCateories: true, items: true },
        });
        if (category) {
          res.json(category);
        } else {
          res.status(404).json({ error: 'Category not found' });
        }

    } catch (error) {
        res.status(500).json({ error: 'Error fetching category' });
    }
}


export const editCategoryController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedCategory = await prisma.category.update({
      where: { id: parseInt(id) },
      data: req.body,
    });
    res.json(updatedCategory);
  } catch (error) {
    res.status(500).json({ error: 'Error updating category' });
  }
}