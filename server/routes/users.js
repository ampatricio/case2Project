import express from 'express';
import { getUsers, createUser } from '../controllers/users.js';
import { getParts, createPart } from '../controllers/parts.js';

const router = express.Router();

router.get('/users', getUsers);
router.post('/users', createUser);
router.get('/parts', getParts);
router.post('/parts', createPart);

export default router;