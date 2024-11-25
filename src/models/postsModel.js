import 'dotenv/config';
import { ObjectId } from 'mongodb';
import conectarAoBanco from '../config/dbConfig.js';

// Conecta ao banco de dados utilizando a string de conexão fornecida no ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para obter todos os posts do banco de dados
export async function getTodosPosts() {
  // Seleciona o banco de dados 'imersao-back-end'
  const db = conexao.db("imersao-back-end");
  // Seleciona a coleção 'posts' dentro do banco de dados
  const colecao = db.collection("posts");
  // funcao para retornar nossa colecao dentro de array
  return colecao.find().toArray();
}

export async function criarPost(novoPost) {
  const db = conexao.db("imersao-back-end");
  const colecao = db.collection("posts");
  return colecao.insertOne(novoPost);
}

export async function atualizarPost(id, novoPost) {
  const db = conexao.db("imersao-back-end");
  const colecao = db.collection("posts");
  // Guardando qual ID do post a ser atualizado (doc MongoDB)
  const objID = ObjectId.createFromHexString(id)
  return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost});
}