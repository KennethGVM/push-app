# Push Notifications App

Aplicación de práctica creada con Expo SDK 58, React Native y Expo Router para aprender el ciclo de vida de las notificaciones push: pedir permisos, obtener un Expo Push Token, recibir notificaciones y responder a ellas desde la app.

## Qué aprendí

- Solicitar permisos de notificaciones y configurar un canal en Android.
- Obtener un Expo Push Token asociado al proyecto de EAS.
- Escuchar notificaciones recibidas mientras la app está abierta.
- Manejar la respuesta del usuario al tocar una notificación, incluso cuando abre la app, y navegar a una pantalla usando los datos de la notificación.
- Separar el cliente móvil del servidor que envía las notificaciones.

## Cómo funciona

1. La app registra el dispositivo y muestra el Expo Push Token.
2. Un servidor puede enviar una notificación a ese token mediante Expo Push Service.
3. La app muestra las notificaciones recibidas.
4. Si la notificación incluye un `chatId`, al tocarla se abre la pantalla correspondiente.

El proyecto complementario `push-server` está hecho con NestJS y `expo-server-sdk`. Su endpoint de práctica recibe uno o más tokens y envía una notificación de prueba. El cliente y el servidor son proyectos separados; el botón de envío del cliente está actualmente comentado.

## Requisitos

- Node.js y npm.
- Un dispositivo físico para probar notificaciones push.
- Un proyecto de Expo/EAS con las credenciales de notificaciones configuradas.
- En Android, el archivo `google-services.json` correspondiente a tu proyecto Firebase.

Las notificaciones push requieren una compilación de desarrollo o una compilación instalada de la app; no basta con ejecutar la app en un navegador.

## Instalación y ejecución

```bash
npm install
npx expo start
```

Para crear una compilación de desarrollo, consulta la [documentación de Expo](https://docs.expo.dev/develop/development-builds/introduction/) y configura las credenciales de push para la plataforma que quieras probar.

## Probar el flujo

1. Instala y abre la app en un dispositivo con permisos de notificación habilitados.
2. Copia el Expo Push Token que aparece en pantalla.
3. Ejecuta el servidor complementario `push-server` y envía el token a su endpoint `POST /api/send-notification`.
4. Comprueba la notificación y toca su contenido para probar la navegación a la pantalla de chat.

El servidor usa un mensaje y un `chatId` de prueba. Consulta su README para ver el formato de la solicitud.

## Alcance de esta práctica

Este proyecto sirve para aprender y probar notificaciones. El endpoint de ejemplo del servidor no tiene autenticación y no debe exponerse públicamente tal cual. Para un producto real, protege el endpoint, valida quién puede enviar mensajes y gestiona los tokens de forma segura en el servidor.

No publiques archivos de credenciales, claves privadas ni tokens reales. `google-services.json` y `firebase-config.json` se mantienen fuera del control de versiones; configura tus propias credenciales localmente.
