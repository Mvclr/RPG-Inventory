import {Schema, model} from "mongoose";
import {type InventoryItem, BaseItem} from "./ItemInterfaces";
import {ItemRarity, ItemType} from "./ItensTypes";

const itemSchema = new Schema<InventoryItem>({
    name: {type: String, required: true},
    type: {
        type:String, 
        required: true,
        enum: Object.values(ItemType)
    },
    rarity: {
        type:String, 
        required: true, 
        enum: Object.values(ItemRarity)
    },
    weight: {type:Number, required: true},
    value: {type:Number, required: true},
},{
    discriminatorKey: 'type',
    timestamps: true
})

export const ItemModel = model<InventoryItem>('Item', itemSchema);


ItemModel.discriminator(ItemType.WEAPON, new Schema({
    damage: {type: Number, required: true},
    range: {type: Number, required: true},
    durability: {type: Number, required: true}
}));

