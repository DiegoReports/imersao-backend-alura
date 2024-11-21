import { MongoClient } from "mongodb";

export default async function conectarAoBanco(strignConexao) {
  let mongoClient;
  
  try {
    mongoClient = new MongoClient(strignConexao);
    console.log('Conectando ao cluster do banco de dados...');
    await mongoClient.connect();
    console.log('Conectado ao MongoDB Atlas com sucesso!');
    
    return mongoClient;
    
  } catch (error) {
    console.error('Falha na conexão ao banco!', error);
    process.exit();
  }
}