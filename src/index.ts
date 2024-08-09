import commands from "./commands";
import { Client } from "discord.js";
import 'dotenv/config';

const client = new Client({
  intents:  []
});

const startBot = async () => {
    await client.login(process.env.BOT_TOKEN);

    client.on("ready", async ()=>{
        if(client.application){
            await client.application.commands.set(commands);
        }
    })

    client.on("interactionCreate", async (interaction) => {
        if (interaction.isCommand()) {
            const currentCommand = commands.find(({name}) => name === interaction.commandName);

            if(currentCommand){
                await interaction.deferReply();
                currentCommand.execute(client, interaction);
            }
        }
    });
}

startBot()