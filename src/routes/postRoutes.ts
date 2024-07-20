import { Router } from 'express';
import { addPost, getAllPosts } from '../controllers/postController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.post('/posts', authMiddleware, addPost);
router.get('/posts', getAllPosts);

export default router;
