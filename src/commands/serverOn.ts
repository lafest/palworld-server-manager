import {SlashCommand} from "../types/slashCommand";
import { sh } from "../utils/sh";

export const serverOn: SlashCommand = {
    name: "서버켜기",
    description: "팰월드 서버를 켭니다.",
    execute: async (_, interaction) => {
        await sh('./server_on.sh')
        await interaction.followUp({
            ephemeral: true,
            content: '서버가 켜집니다. 잠시 기다려주세요.',
        });
    }
};