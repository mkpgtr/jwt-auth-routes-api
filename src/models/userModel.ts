import dbPromise from '../database';

export interface User {
  id?: number;
  username: string;
  password: string;
}

export const createUserTable = async () => {
  const db = await dbPromise;
  await db.exec(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
  )`);
};

export const getUserByUsername = async (username: string): Promise<User | undefined> => {
  const db = await dbPromise;
  return db.get<User>('SELECT * FROM users WHERE username = ?', username);
};

export const createUser = async (user: User): Promise<void> => {
  const db = await dbPromise;
  await db.run('INSERT INTO users (username, password) VALUES (?, ?)', user.username, user.password);
};
