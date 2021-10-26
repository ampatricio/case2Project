import express from 'express';
import { getUsers, createUser } from '../controllers/users.js';
import { getParts, createPart } from '../controllers/parts.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.get('/', getParts);
router.post('/', createPart);

export default router;