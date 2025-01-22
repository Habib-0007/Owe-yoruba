import express from 'express';
import {
	getProverbs,
	getProverbById,
	addProverb,
	updateProverb,
	deleteProverb,
} from '../controllers/proverbsControllers';
import { validateProverb } from '../validators/proverbValidator';
import { validationResult } from 'express-validator';

const router = express.Router();

const handleValidationErrors = (req: any, res: any, next: any) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	next();
};

router.get('/', getProverbs);
router.get('/:id', getProverbById);
router.post('/', validateProverb, handleValidationErrors, addProverb);
router.put('/:id', validateProverb, handleValidationErrors, updateProverb);
router.delete('/:id', deleteProverb);

export default router;