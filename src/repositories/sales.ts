import { prisma } from "../services/prisma";
import { Sales } from "../types/user.types";

// criar 
export const createSales = async (data:Sales) => {
    const sale = await prisma.sales.create({
        data,
    })
    return sale
};

// Lista 
export const getSales = async () => {
    const sales = await prisma.sales.findMany({
    })
    return sales
};
// lista por ID
export const getById = async (id:number) => {
    const sale = await prisma.sales.findUnique({
        where: { id },
    });
    return sale
};
// Atualizar 
export const updateSales = async (id:number,data:Sales) => {
    const sale = await prisma.sales.update({
        where:{
            id
        },data
    })
    return sale
};

// Remover 
export const removeSale= async (id:number) => {
     await prisma.sales.delete({
        where:{
            id,
        }
    })
    return
};