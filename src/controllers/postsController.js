import {getTodosPosts, criarPost, atualizarPost} from "../models/postsModel.js";
import fs from "fs";

export async function listarPosts (req, res) {
  // Chama a função para obter os posts do banco de dados
  const posts = await getTodosPosts();
  // Envia os posts como resposta em formato JSON com status 200 (sucesso)
  res.status(200).json(posts);
}

export async function postarNovoPost(req, res) {
  const novoPost = req.body;
  try {
    const postCriado = await criarPost(novoPost);
    res.status(200).json(postCriado);
  } catch (erro) {
    console.error(erro.message);
    res.status(500).json({"Erro":"Falha na requisição"})
  }
}

export async function uploadImagem(req, res) {
  // Cria um novo objeto para representar o post a ser inserido
  const novoPost = {
      descricao: "", // Descrição do post (pode ser preenchida posteriormente)
      imgUrl: req.file.originalname, // Nome original do arquivo enviado
      alt: "" // Texto alternativo para a imagem (pode ser preenchido posteriormente)
  };

  try {
    // Chama a função criarPost para inserir o novo post no banco de dados
      const postCriado = await criarPost(novoPost);
    // Cria um novo nome para a imagem, utilizando o ID do post inserido
      const imagemAtualizada = `uploads/${postCriado.insertedId}.png`

    // Move a imagem para a pasta de uploads com o novo nome
      fs.renameSync(req.file.path, imagemAtualizada)
    // Retorna o post criado como resposta da requisição
      res.status(200).json(postCriado);  
  } catch(erro) {
      console.error(erro.message);
    // Envia uma resposta com status 500 (erro interno do servidor)
      res.status(500).json({"Erro":"Falha na requisição"})
  }
}

export async function atualizarNovoPost(req, res) {
  const id = req.params.id;
  const urlImagem = `http://localhost:3000/${id}.png`;
  const post = {
    imgUrl: urlImagem,
    descricao: req.body.descricao,
    alt: req.body.alt
  }
  try {
    const postCriado = await atualizarPost(id, post);
    res.status(200).json(postCriado);
  } catch (erro) {
    console.error(erro.message);
    res.status(500).json({"Erro":"Falha na requisição"})
  }
}