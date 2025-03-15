import { z } from 'zod';
import { config } from 'dotenv';


config();
const envSchema = z.object({
    ENV: z.string(),
    APP_PORT: z.coerce.number(),
})

const Env = envSchema.parse(process.env);


export default Env;