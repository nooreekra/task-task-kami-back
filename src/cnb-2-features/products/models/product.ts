import mongoose, {Document, Schema} from 'mongoose';

type PriceByCity = {
    id: number, price: number
}

export interface IProduct extends Document {
    _id: mongoose.Types.ObjectId;
    title: string;
    description: string;
    images: string[];
    isActive: boolean;
    isSinglePrice: boolean;
    price: number;
    priceByCity: PriceByCity[];
}


const UserSchema: Schema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true
        },
        images: {
            type: Array,
            required: true
        },
        isActive: {
            type: Boolean,
            required: true
        },
        isSinglePrice: {
            type: Boolean,
            required: true
        },
        price: {
            type: Number,
        },
        priceByCity: {
            type: Array,
        }
    },
);

export default mongoose.model<IProduct>('product', UserSchema);
