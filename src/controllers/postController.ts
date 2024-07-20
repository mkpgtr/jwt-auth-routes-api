import { Request, Response } from 'express';
import { createPost, getPosts } from '../models/postModel';

export const addPost = async (req: Request, res: Response) => {
  const { title, content } = req.body;

  if (!req.userId) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    await createPost({ userId: req.userId, title, content });
    res.status(201).json({ message: 'Post created' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating post' });
  }
};

export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const posts = await getPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving posts' });
  }
};
