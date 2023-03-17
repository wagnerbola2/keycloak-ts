import { token } from "@/domain/entities";
import { AuthClient } from "@/domain/useCases";

export class AuthClientService implements AuthClient{
  constructor (private readonly keycloak: any) {
    
  }

  async Auth (): Promise<token>{

  }
}