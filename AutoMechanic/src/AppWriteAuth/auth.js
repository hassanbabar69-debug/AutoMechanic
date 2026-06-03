import conf from '../configure/conf';
import { Client, Account, ID } from "appwrite";

export class Author{

    client = new Client()
    account;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl) 
        .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)
    }

async signup({ email, password, name, role }) {
  try {
   
    await this.account.create(ID.unique(), email, password, name)
    
   
    await this.account.createEmailPasswordSession(email, password)
    
    
    await this.account.updatePrefs({ role: role })
    
  } catch (error) {
    throw error
  }
}

    async login({email,password}){
      try{
  return await this.account.createEmailPasswordSession(email, password)}
    catch(error){

        throw error

     }
    }


    async getcurrentuser(){
        try{

            return await this.account.get()

        }
        catch(error){

            return null

        }

        
    }

     async logout(){
        try{

            return await this.account.deleteSessions();

        }
        catch(error){

            throw error

        }

        
    }






}


const auth = new Author();

export default auth;