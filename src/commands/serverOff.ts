import {SlashCommand} from "../types/slashCommand";
import { sh } from "../utils/sh";

export const serverOff: SlashCommand = {
    name: "서버끄기",
    description: "팰월드 서버를 끕니다.",
    execute: async (_, interaction) => {
      await sh('./server_off.sh')
      await interaction.followUp({
          ephemeral: true,
          content: '서버가 꺼집니다. 잠시 기다려주세요.',
      });
    }
};