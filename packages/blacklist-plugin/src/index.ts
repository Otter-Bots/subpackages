import fetch, { Headers } from "node-fetch";
import { Snowflake } from "discord.js";
import { IBlacklistOptions } from "./lib/types/constructorInterface";
import { IfetchHeadersAuth } from "./lib/types/fetchHeadersInterface";
export class Blacklist {
    private url: string;
    private apiKey: string = "";
    private authorizationHeadersJSON: IfetchHeadersAuth;
    private authorizationHeaders: any;
    public constructor(options: IBlacklistOptions) {
        this.url = options.url;
        this.apiKey = options.apiKey;
        this.authorizationHeadersJSON = {
            'authorization': this.apiKey         
        }
        this.authorizationHeaders = new Headers(this.authorizationHeadersJSON as any)
    }
    public async find(userId: Snowflake) {
        /**
         * Find the status of a member in the Blacklist
         * @param userId - The user ID to check
         * @since 1.0.0
        */
       const ResponseData = await fetch(`https://${this.url}/blacklist/get/${userId}`, {
        method: "GET",
        headers: this.authorizationHeaders
       });
       const ResponseJson = await ResponseData.json();
       return ResponseJson.found
    }
    public async add(userId: Snowflake) {
        /**
         * Add a user to the Blacklist
         * @param userId - The user ID to add
         * @since 1.0.0
         */
        const ResponseData = await fetch(`https://${this.url}/blacklist/add/${userId}`, {
            method: "POST",
            headers: this.authorizationHeaders
        })
        const ResponseJson = await ResponseData.json();
        return ResponseJson.message
    }
    public async delete(userId: Snowflake) {
        /**
         * Delete a user from the Blacklist
         * @param userId - The user ID to delete
         * @since 1.0.0
         */
        const ResponseData = await fetch(`https://${this.url}/blacklist/delete/${userId}`, {
            method: "DELETE",
            headers: this.authorizationHeaders
        })
        const ResponseJson = await ResponseData.json();
        return ResponseJson.message
    }
    public async getAll() {
        /**
         * Get all users in the Blacklist
         * @since 1.0.0
         */
        const ResponseData = await fetch(`https://${this.url}/blacklist/getAll/`, {
            method: "GET",
            headers: this.authorizationHeaders
        })
        const ResponseJson = await ResponseData.json();
        return ResponseJson.blacklist
    }
}