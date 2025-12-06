import type {Request, Response} from 'express'
import {ItemModel} from '../models/ItemModel'

export class ItemController {
    async create(req: Request, res: Response){
        try{
            const novoItem = await ItemModel.create(req.body)
            res.status(201).json(novoItem)
        } catch(error: any){
            res.status(400).json({message: "Erro ao criar o item!", details: error.message})
        }
    }
}