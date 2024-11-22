import express from 'express';
import routes from './src/routes/postRoutes.js';

// Array de posts (dados fictícios para demonstração)
/* const posts = [
  {
    id: 1,
    descricao: 'Uma foto teste',
    imagem: 'https://placecats.com/millie/300/150'
  },
  {
    id: 2,
    descricao: 'Uma foto teste',
    imagem: 'https://placecats.com/millie/300/150'
  },
  {
    id: 3,
    descricao: 'Gato preto e branco',
    imagem: 'https://placecats.com/any/200/300'
  },
  {
    id: 4,
    descricao: 'Gatinho fofo dormindo',
    imagem: 'https://placecats.com/cute/150/200'
  },
  {
    id: 5,
    descricao: 'Gato com olhos azuis',
    imagem: 'https://placecats.com/blue/300/200'
  },
  {
    id: 6,
    descricao: 'Gato fazendo careta',
    imagem: 'https://placecats.com/funny/250/250'
  },
  {
    id: 7,
    descricao: 'Gato de perfil',
    imagem: 'https://placecats.com/profile/200/300'
  },
  {
    id: 8,
    descricao: 'Gato com chapéu',
    imagem: 'https://placecats.com/hat/150/200'
  },
  {
    id: 9,
    descricao: 'Gato brincando com bola',
    imagem: 'https://placecats.com/play/300/200'
  },
  {
    id: 10,
    descricao: 'Gato olhando para a câmera',
    imagem: 'https://placecats.com/stare/250/250'
  }
]; */

// Habilita a interpretação de JSON nas requisições HTTP
const app = express();
routes(app);

// Iniciando o servidor [Port 3000]
app.listen(3000, () => {
  console.log('Server is running on port 3000 ...');
});

// Função Buscar Post por ID
/* function buscarPostPorId(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id)
  });
};

// Definindo rota [single post]
app.get('/posts/:id', (req, res) => {
  const index = buscarPostPorId(req.params.id)
  res.status(200).json(posts[index]);
}); */
