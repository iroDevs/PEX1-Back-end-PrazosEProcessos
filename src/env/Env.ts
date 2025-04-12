import { z } from 'zod';
import { config } from 'dotenv';


config();
const envSchema = z.object({
    ENV: z.string(),
    APP_PORT: z.coerce.number(),
    GMAIL_USER: z.string(),
    GMAIL_PASS: z.string(),
})

const Env = envSchema.parse(process.env);


export default Env;