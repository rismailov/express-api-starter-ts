import express from 'express'
import MessageResponse from '../types/interfaces/MessageResponse'
import postsRouter from './posts/posts.router'

const router = express.Router()

router.get<{}, MessageResponse>('/', (req, res) => {
    res.json({
        message: 'API - 👋🌎🌍🌏',
    })
})

router.use('/posts', postsRouter)

export default router
