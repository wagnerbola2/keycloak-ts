import { client, token } from "@/domain/entities";

export interface AuthClient {
  Auth: (client: client) => Promise<token>
}