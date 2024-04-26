import conf from '../conf/conf';
import { Client, Account, ID } from "appwrite";

class AuthService {
    constructor() {
        this.client = new Client();
        this.account = new Account(this.client);
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // Call another method or return userAccount if needed
                return await this.login({ email, password });
            } else {
                throw new Error("Failed to create account");
            }
        } catch (error) {
            console.error("Error creating account:", error);
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error)
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error)
        }
        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error)

        }
    }
}

const authService = new AuthService();

export default authService;