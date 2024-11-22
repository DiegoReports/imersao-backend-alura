import express from 'express';
import { listarPosts } from '../controllers/postsController.js';

const routes = (app) => {
  // Indicando funcionalidade de Parse em JSON
  app.use(express.json());
  // Rota para obter todos os posts [all posts]
  app.get('/posts', listarPosts);
}

export default routes;