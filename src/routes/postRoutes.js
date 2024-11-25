import express from 'express';
import multer from 'multer';
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from '../controllers/postsController.js';
import cors from 'cors';

const corsOptions = {
  origin: "http://localhost:8000",
  optionsSuccessStatus: 200
}

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
  // Lidando com requisições externas
  app.use(cors(corsOptions));
  // Rota para obter todos os posts [all posts]
  app.get('/posts', listarPosts);
  // Rota para criar um novo post
  app.post('/posts', postarNovoPost);
  // Rota para upload de imagens (assumindo imagem unica)
  app.post('/upload', upload.single("imagem"), uploadImagem);

  app.put("/upload/:id", atualizarNovoPost)
}

export default routes;