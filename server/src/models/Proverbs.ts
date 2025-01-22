import mongoose, { Schema, Document } from 'mongoose';

export interface IProverb extends Document {
    proverb: string;
    translation: string;
    meaning: string;
}

const ProverbSchema: Schema = new Schema(
    {
        proverb: { type: String, required: true },
        translation: { type: String, required: true },
        meaning: { type: String, required: true },
    },
    { timestamps: true }
);

export default mongoose.model<IProverb>('Proverb', ProverbSchema);