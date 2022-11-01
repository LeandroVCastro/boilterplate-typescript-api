import { createServer, Server, plugins } from 'restify';
import * as dotenv from 'dotenv';
dotenv.config();
import { routes } from './http/routes';
// import usersRoutes from './users.routes';
// import connectMongoDb from './connect.mongodb';
// import { environment } from './environment';

const initApp = async () => {
  // cria o servidor da nossa aplicacao
  const app: Server = createServer({
    name: 'api.restify',
    version: '1.0.0'
  });

  routes(app);

  // habilita o uso de req.body e req.query
  app.use(plugins.queryParser());
  app.use(plugins.bodyParser());

  try {
    // coloca a aplicacao para rodar na porta setada na variavel [ environment.PORT ]
    app.listen(3000, () => {
      // eslint-disable-next-line no-console
      console.info(`O servidor esta rodando na porta: HTTP - 3000`);
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(`Servidor nao pode ser iniciado | ${err}`);
    process.exit(2);
  }
};
// inicializa a funcao da aplicacao
initApp();
