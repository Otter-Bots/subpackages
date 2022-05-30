import { SapphireClient } from "@sapphire/framework";

abstract class sharedClientMessageListenerEnabled extends SapphireClient {
    public constructor() {
		super({
			caseInsensitiveCommands: true,
			caseInsensitivePrefixes: true,
			intents: [
				'GUILDS',
				'GUILD_MEMBERS',
				'GUILD_BANS',
				'GUILD_EMOJIS_AND_STICKERS',
				'GUILD_VOICE_STATES',
				'GUILD_MESSAGES',
				'GUILD_MESSAGE_REACTIONS',
				'DIRECT_MESSAGES',
				'DIRECT_MESSAGE_REACTIONS'
			],
			loadDefaultErrorListeners: true,
            loadMessageCommandListeners: true,
			partials: ['CHANNEL']
		});
	}
	public async login(token?: string) {
		return super.login(token);
	}
}
abstract class sharedClientMessageListenerDisabled extends SapphireClient {
    public constructor() {
		super({
			caseInsensitiveCommands: true,
			caseInsensitivePrefixes: true,
			intents: [
				'GUILDS',
				'GUILD_MEMBERS',
				'GUILD_BANS',
				'GUILD_EMOJIS_AND_STICKERS',
				'GUILD_VOICE_STATES',
				'GUILD_MESSAGES',
				'GUILD_MESSAGE_REACTIONS',
				'DIRECT_MESSAGES',
				'DIRECT_MESSAGE_REACTIONS'
			],
			loadDefaultErrorListeners: true,
            loadMessageCommandListeners: false,
			partials: ['CHANNEL']
		});
	}
	public async login(token?: string) {
		return super.login(token);
	}
}