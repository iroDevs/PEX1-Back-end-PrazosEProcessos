import App from './app';
import Env from './env/Env';


const start = async () => {
    try {
        
        
        const PORTA = Env.APP_PORT;
        await App.listen({port: PORTA});
        console.log(`Servevidor rodando na porta ${PORTA}`);
        
    } catch (error) {
        App.log.error(error);
        process.exit(1);
    }
}

start();