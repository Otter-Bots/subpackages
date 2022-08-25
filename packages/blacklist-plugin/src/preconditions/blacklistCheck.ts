import { Precondition } from "@sapphire/framework";
import { CommandInteraction, Message, Snowflake } from "discord.js";
export class BlacklistCheckPrecondition extends Precondition {
    public override async messageRun(message: Message) {
        return this.check(message.author.id);
    }
    public override async chatInputRun(interaction: CommandInteraction) {
        return this.check(interaction.user.id);
    }
    private async check(userId: Snowflake) {
        const response = await this.container.blacklist.find(userId);
        if (response) return this.error({ message: `User is blacklisted`});
        return this.ok();
    }
}