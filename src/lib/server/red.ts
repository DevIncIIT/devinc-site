import { createClient } from "redis";
import { config } from "dotenv";
config();

const client = await createClient({
    url: process.env.REDIS_URL,
    password: process.env.REDIS_PASSWORD,
}).on("error", (err: any) => {
    console.error("Redis Client Error", err);
}).on("ready", () => {
    console.log("Redis Client Ready");
}).connect();

export default client;