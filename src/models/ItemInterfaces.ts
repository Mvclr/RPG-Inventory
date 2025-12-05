import { Interface } from "readline";
import { ItemRarity, ItemType } from "./ItensTypes";

export interface IbaseItem {
    name: string;
    type: ItemType;
    rearity: ItemRarity;
    weight: number;
    value:number;
}

