// src/routes/bruxoRoutes.js
import { Router } from 'express';
import * as BruxoController from '../controllers/bruxoController.js';

const router = Router();

router.get('/', BruxoController.listarTodos);
router.get('/:id', BruxoController.buscarPorId);
router.post('/', BruxoController.criar);
router.put('/:id', BruxoController.atualizar);
router.delete('/:id', BruxoController.deletar);

export default router;