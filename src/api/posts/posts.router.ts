import express from 'express'
import { getAllPosts } from './posts.controller'

// @ts-ignore test
const router = express.Router()

router.get('/', getAllPosts)

export default router
