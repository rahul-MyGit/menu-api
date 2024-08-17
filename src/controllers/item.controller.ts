import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createItemController = async (req: Request, res: Response) => {
    try {
        const { baseAmount, discount, ...rest } = req.body;
        const totalAmount = baseAmount - discount;
        const item = await prisma.item.create({
            data: { ...rest, baseAmount, discount, totalAmount },
        });
        res.json(item);
    } catch (error) {
        res.status(500).json({ error: 'Error while creating the items'});
    }
};
