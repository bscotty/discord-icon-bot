import {BotClient} from "./bot/BotClient";
import {BotClientImpl} from "./bot/BotClientImpl";

const client: BotClient = new BotClientImpl()
client.initialize()