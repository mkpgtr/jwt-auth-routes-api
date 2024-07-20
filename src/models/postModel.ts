import dbPromise from '../database';

export interface Post {
  id?: number;
  userId: number;
  title: string;
  content: string;
}

export const createPostTable = async () => {
  const db = await dbPromise;
  await db.exec(`CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    FOREIGN KEY(userId) REFERENCES users(id)
  )`);
};

export const createPost = async (post: Post): Promise<void> => {
  const db = await dbPromise;
  await db.run('INSERT INTO posts (userId, title, content) VALUES (?, ?, ?)', post.userId, post.title, post.content);
};

export const getPosts = async (): Promise<Post[]> => {
  const db = await dbPromise;
  return db.all<Post[]>('SELECT * FROM posts');
};
