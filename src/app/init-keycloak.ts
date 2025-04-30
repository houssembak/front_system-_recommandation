import { KeycloakService } from "keycloak-angular";
export const environment = {
  production: false,
  title: 'Monday',
  keycloak: {
      realm: 'MyProject',
      clientId: 'frontend',
      url: 'http://localhost:8080'
  }
};
export function initializeKeycloak(keycloak: KeycloakService) {

    return () =>
        keycloak.init({
            config: {
                url: environment.keycloak.url,
                realm: environment.keycloak.realm,
                clientId: environment.keycloak.clientId,
            },
            initOptions: {
                onLoad: 'login-required',
                checkLoginIframe: false

            }
        }).catch((error) => {
            console.error('Failed to initialize Keycloak', error);
            return Promise.resolve(); // Very important!
          });
        
        }