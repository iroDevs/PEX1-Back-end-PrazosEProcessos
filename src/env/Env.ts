import { z } from 'zod';
import { config } from 'dotenv';


config();
const envSchema = z.object({
    ENV: z.string(),
    APP_PORT: z.coerce.number(),
  
    DATABASE_URL: z.string().url(),
  
    GMAIL_USER: z.string().email(),
    GMAIL_APP_PASSWORD: z.string(),
    GMAIL_API_KEY: z.string(),
    GMAIL_AUTHORIZATION_CODE: z.string(),
  
    OAUTH_SECRET_CLIENT: z.string(),
    OAUTH_CLIENTE_ID: z.string(),
    OAUTH_REFRESH_TOKEN: z.string(),
    OAUTH_ACESS_TOKEN: z.string(),
  });
  

const Env = envSchema.parse(process.env);


export default Env;