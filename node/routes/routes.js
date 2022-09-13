import express from 'express';
const router = express.Router();
import {
    getAllBlogs,
    getBlog,
    createBlog,
    updateBlog,
    deleteBlog
} from '../controllers/BlogController.js'

router.get('/', getAllBlogs)
router.get('/:id', getBlog)
router.post('/', createBlog)
router.put('/:id', updateBlog)
router.delete('/:id', deleteBlog)

export default router;