export interface Keycloak {
  auth: () => Promise<void>
}