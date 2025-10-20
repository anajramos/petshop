// src/models/bruxoModel.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// ... funções do model aqui ...

export {
  findAll,
  findById,
  create,
  update,
  deleteById
};

export const findAll1 = async () => {
  return await prisma.bruxo.findMany({
    orderBy: { nome: 'asc' }
  });
};export const findAll = async () => {
  return await prisma.bruxo.findMany({
    orderBy: { nome: 'asc' }
  });
};