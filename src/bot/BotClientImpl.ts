import {BotClient} from "./BotClient";
import {Client} from "discordx";
import {Config} from "../config";
import {Partials} from "discord.js";
import {Icon} from "./icon";

export class BotClientImpl implements BotClient {
    private client: Client
    private config = new Config()

    public async initialize() {
        this.client = new Client({
            botId: "icon bot",
            partials: [Partials.Channel, Partials.Message],
            intents: ["Guilds", "GuildMessages"],
            botGuilds: this.config.guilds()
        })

        this.initializeCommands()

        this.client.once("ready", async () => {
            await this.onReady()
        })

        this.client.on("interactionCreate", async (interaction) => {
            this.client.executeInteraction(interaction)
        })

        await this.client.login(this.config.botToken())
    }

    private async onReady() {
        console.log("onReady")
        await this.client.initApplicationCommands()
        console.log(`onReady found commands: ${this.client.applicationCommands.map((it) => it.name).join()}`)
    }

    private initializeCommands() {
        new Icon()
    }
}