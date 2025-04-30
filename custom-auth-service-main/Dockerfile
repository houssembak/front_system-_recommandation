FROM quay.io/keycloak/keycloak:24.0.4 as builder

# Configure a database vendor
ENV KC_DB=postgres

WORKDIR /opt/keycloak

# for demonstration purposes only, please make sure to use proper certificates in production instead
RUN keytool -genkeypair -storepass password -storetype PKCS12 -keyalg RSA -keysize 2048 -dname "CN=server" -alias server -ext "SAN:c=DNS:localhost,IP:127.0.0.1" -keystore conf/server.keystore

# Modify the build command to include the token-exchange feature
RUN /opt/keycloak/bin/kc.sh build 

FROM quay.io/keycloak/keycloak:latest
COPY --from=builder /opt/keycloak/ /opt/keycloak/

COPY ./themes/my-theme/ /opt/keycloak/themes/my-theme
COPY ./keycloak-multi-tenancy-23.2.1.jar/ /opt/keycloak/providers/
COPY ./SPI_Update-0.0.1-SNAPSHOT.jar/ /opt/keycloak/providers/
COPY ./CheckUserEnabledAuthenticatorFactory.jar/ /opt/keycloak/providers/
COPY ./email.jar/ /opt/keycloak/providers/




ENTRYPOINT ["/opt/keycloak/bin/kc.sh", "start-dev"]
