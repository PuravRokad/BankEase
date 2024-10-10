'use server'
require("dotenv").config();
import { Client, Account, Databases, Users } from 'node-appwrite';
// import { NEXT_APPWRITE_KEY } from '/Users/puravrokad/submitted work/Sem-7/minorproject/BankEase/.env';
// import { NEXT_PUBLIC_APPWRITE_ENDPOINT, NEXT_PUBLIC_APPWRITE_PROJECT } from '$env/static/public';
import { Database } from 'lucide-react';
import { cookies } from 'next/headers';


export async function createAdminClient() {
    const client = new Client()
        .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
        .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)
        .setKey(process.env.NEXT_APPWRITE_KEY!); // Set the Appwrite API key!

    // Return the services we want to use.
    return {
        get account() {
            return new Account(client);
        },
        get database() {
            return new Databases(client);
        },
        get user() {
            return new Users(client);
        }

    };
}

export async function createSessionClient() {
    const client = new Client()
        .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
        .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

    // Extract our custom domain's session cookie from the request
    const session = cookies().get('appwrite-session');
    if (!session || !session.value) {
        throw new Error("No user session");
    }

    client.setSession(session.value);

    // Return the services we want to use.
    return {
        get account() {
            return new Account(client);
        }
    };
}
