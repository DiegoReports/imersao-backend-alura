import express from 'express';
import multer from 'multer';
import { listarPosts, postarNovoPost, uploadImagem } from '../controllers/postsController.js';

// Config Multer p/Windows
const storage = multer.diskStorage({
	destination: function(req, file, cb){
		cb(null, 'uploads/');
	},
	filename: function(req, file, cb){
		cb(null, file.originalname);
	}
});

const upload = multer({dest: "./uploads" , storage});

const routes = (app) => {
  // Indicando funcionalidade de Parse em JSON
  app.use(express.json());
  // Rota para obter todos os posts [all posts]
  app.get('/posts', listarPosts);
  // Rota para criar um novo post
  app.post('/posts', postarNovoPost);
  app.post('/upload', upload.single("imagem"), uploadImagem)
}

export default routes;