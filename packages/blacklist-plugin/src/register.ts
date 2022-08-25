import { preGenericsInitialization, SapphireClient, container, postInitialization, postLogin} from "@sapphire/framework";
import { join } from "path";
import { Blacklist } from "./";
export class BlacklistPlugin {
    /**
     * A plugin to manage the blacklist
     * @since 1.0.0
     */
    public static [preGenericsInitialization](this: SapphireClient) {
        container.blacklist = new Blacklist(this.options.blacklist)
        this.logger.debug('Added the Blacklist Plugin to the container');
    }
    public static [postInitialization](this: SapphireClient) {
        this.stores.get("preconditions").registerPath(join(__dirname, "preconditions"));
        this.logger.debug('Registered the Blacklist Plugin preconditions');
        //this.stores.get("listeners").registerPath(join(__dirname, "listeners"));
        //this.logger.debug('Registered the Blacklist Plugin listeners');

    }
    public static [postLogin](this: SapphireClient) {
        this.logger.info(`Blacklist Plugin loaded`);
    }
}
declare module "@sapphire/pieces" {
    interface Container {
        blacklist: Blacklist
    }
}