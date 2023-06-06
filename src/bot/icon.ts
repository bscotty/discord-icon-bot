import {Discord, Slash, SlashOption} from "discordx";
import {ApplicationCommandOptionType, CommandInteraction} from "discord.js"

@Discord()
export class Icon {
    @Slash({name: "icon-lookup", description: "Search for an Icon search term"})
    public command(
        @SlashOption({type: ApplicationCommandOptionType.String, name: "term", description: "What to search for"})
            term: string,
        interaction: CommandInteraction
    ) {
        try {
            console.log(`Received term ${term}`)
            interaction.reply(`I don't know how to do that`)
                .catch((it) => console.error("Failed to reply", it))
        } catch (e) {
            console.error("Failed to create reply", e)
        }
    }
}