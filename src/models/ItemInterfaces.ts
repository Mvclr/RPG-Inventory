import { ItemRarity, ItemType } from "./ItensTypes";

export interface BaseItem {
    name: string;
    type: ItemType;
    rarity: ItemRarity;
    weight: number;
    value:number;
}

export interface Weapon extends BaseItem{
    type: ItemType.WEAPON;
    damage: number;
    range: number;
    durability: number;

}

export interface Armor extends BaseItem{
    type: ItemType.ARMOR;
    defense: number;
    hpBonus: number;
    durability: number;
}

export interface Potion extends BaseItem{
    type: ItemType.POTION;
    effect: string;
    duration: number;
}