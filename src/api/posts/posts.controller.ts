import { Request, Response } from 'express'

export function getAllPosts(req: Request, res: Response) {
    return res.json([])
}
