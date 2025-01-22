import { Request, Response } from 'express';
import Proverb from '../models/Proverbs';

export const getProverbs = async (req: Request, res: Response): Promise<void> => {
	const { limit, page, search } = req.query;
	const query = search ? { proverb: { $regex: search, $options: 'i' } } : {};

	try {
		const perPage = parseInt(limit as string) || 10;
		const currentPage = parseInt(page as string) || 1;

		const proverbs = await Proverb.find(query)
			.skip((currentPage - 1) * perPage)
			.limit(perPage);

		const total = await Proverb.countDocuments(query);

		res.status(200).json({
			proverbs,
			pagination: {
				total,
				currentPage,
				totalPages: Math.ceil(total / perPage),
			},
		});
	} catch (error) {
		res.status(500).json({ error: 'Failed to fetch proverbs' });
	}
};

export const getProverbById = async (req: Request, res: Response): Promise<void> => {
	const { id } = req.params;

	try {
		const proverb = await Proverb.findById(id);

		if (!proverb) {
			res.status(404).json({ error: 'Proverb not found' });
			return;
		}

		res.status(200).json(proverb);
	} catch (error) {
		res.status(500).json({ error: 'Failed to fetch proverb' });
	}
};

export const addProverb = async (req: Request, res: Response): Promise<void> => {
	try {
		const newProverb = new Proverb(req.body);
		await newProverb.save();
		res.status(201).json(newProverb);
	} catch (error) {
		res.status(500).json({ error: 'Failed to add proverb' });
	}
};

export const updateProverb = async (req: Request, res: Response): Promise<void> => {
	const { id } = req.params;

	try {
		const updatedProverb = await Proverb.findByIdAndUpdate(id, req.body, { new: true });

		if (!updatedProverb) {
			res.status(404).json({ error: 'Proverb not found' });
			return;
		}

		res.status(200).json(updatedProverb);
	} catch (error) {
		res.status(500).json({ error: 'Failed to update proverb' });
	}
};

export const deleteProverb = async (req: Request, res: Response): Promise<void> => {
	const { id } = req.params;

	try {
		const deletedProverb = await Proverb.findByIdAndDelete(id);

		if (!deletedProverb) {
			res.status(404).json({ error: 'Proverb not found' });
			return;
		}

		res.status(200).json({ message: 'Proverb deleted successfully' });
	} catch (error) {
		res.status(500).json({ error: 'Failed to delete proverb' });
	}
};