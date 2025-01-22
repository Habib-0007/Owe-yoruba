import { body, ValidationChain } from 'express-validator';

export const validateProverb: ValidationChain[] = [
    body('proverb').notEmpty().withMessage('Proverb is required').isString(),
    body('translation').notEmpty().withMessage('Translation is required').isString(),
    body('meaning').notEmpty().withMessage('Meaning is required').isString(),
];