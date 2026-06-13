// @ts-check
/**
 * Trial example for the GraphQL-owned `ws` domain.
 *
 * Usage:
 * 1) npm i socket.io-client
 * 2) update BASE_URL + credentials
 * 3) node trial.ws.mjs
 */

import { io } from 'socket.io-client';
import { BfwApiSdk } from '@bfw/api-sdk/core';
import { GraphWsToken, UserAddressWsToken, UserWsToken } from '@bfw/api-sdk/graphql/endpoints/shared';
import { YesNoEnum } from '@bfw/api-sdk/graphql/libs';


const sdk = new BfwApiSdk({
  graphql: { 
    ws: {
        baseUrl: "http://0.0.0.0:20150",
        //baseUrl: "https://bfw-nestjs-microservice-ws.thatsend.app",

        eventPrefix: '',
        socket: {
          path: '/socket.io',
          transports: ['polling', 'websocket'],
          withCredentials: true,
        },
        auth: {
          socketAuthTokenPrefix: 'Bearer ',
        },
        socketFactory: ({ url, options }) => io(url, options),
      },
    //baseUrl: 'http://localhost:20147/graphql',
    baseUrl: 'https://bfw-nestjs-microservice-api.thatsend.app/graphql',
    //headers: { Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InYxIn0.eyJzdWIiOiJNUT09IiwidXNlcm5hbWUiOiJhZG1pbiIsImVtYWlsIjoiaW5mb0B0aGF0c2VuZC5jb20iLCJyb2xlX2lkIjoxLCJ0eXBlIjoiYWNjZXNzX3Rva2VuIiwiaWF0IjoxNzcyNTE4NzMxLCJleHAiOjE3NzI2MDUxMzEsImF1ZCI6IkFwcGxpY2F0aW9uIiwiaXNzIjoiVEhBVFNFTkQifQ.Nz_oeOkEYVGHCbkLcORuwsPwB9hSzh4_xt4Jov0OMnTaDfBZlAvUxuS7CaV6FySEduxXZpeb6b14iwEe4LMRDsPtRIloIGiYn4kWqmEhzd4YpLd_JxMCxgGayS12KbhwGmiVnL5CViNttUFcwXzM0wOJPDxM6db9ng3N9cZWct1VXV_OQ7PjYzFSinRLOTPxhmTOonZwpElAI0S5ykDMBSWtZjyEMeEL89yFkCHMT82zVL4qFAPmpADFicNvZZzM0monjynmLls8KCeLbdEbpWlGSsFTssuO9f7w8OYBOMUAVvfsAqsvYf2IWYmJX0hTI6qAHaJjXKp_3ynsAJq9eg` },
  },
  rest: { 
    //baseUrl: 'http://localhost:20152/rest' 
    baseUrl: 'https://bfw-nestjs-microservice-api.thatsend.app/rest',
  },
  config: {
    tokenStore: {
      persistentStorageStrategy: 'file', // we need to perform test with mutiple storage type here
      //fileName: 'my-custom-jwt.json',
      // or jwtFilePath: '/absolute/or/relative/path/custom.jwt.json'
    },
    logRequest: true,
    logResponse: true,
    // Use headers or setRequestHeader for defaults such as apollo-require-preflight.

  },
});

const authTokens = {
  jwt_access_token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImF2MSJ9.eyJzdWIiOiJNUSIsInVzZXJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImluZm9AdGhhdHNlbmQuY29tIiwicm9sZV9pZCI6MSwidHlwZSI6ImFjY2Vzc190b2tlbiIsImlhdCI6MTc4MDcyNTQyMCwiZXhwIjoxNzgwODExODIwLCJhdWQiOiJBcHBsaWNhdGlvbiIsImlzcyI6IlRIQVRTRU5EIn0.PEmnKLmDFUMwldpe1xtUIky3-pyIrDWG8nWbHLJJX_eF35w7ILo0DWAhprrVB4mSSbWmKGk8tGD7srAnrleUSZZQ_yDQZBd7JejTkQdsiquGJCZcxGnHCUcW0ITT0qBBp2sH3Qt_bDLUtU7_7e5I6PK_N4y6tOiONHUu9yN-qyj8x1RgqtzjgFqiDKBPosvLunCuNlNUMcgjCjWpCymqRSu0v4JRck2JJmuLF9AmD6q6XQXZ6bUwO6kJGVtBeuzYFBwyfn08tw8xyfzxSjNy0zUlnW4mnLhfEVVpyvlz9JgzXctiGag7UW05InplRpJIoOjv_VEP8FZd3JZbJRZNOg',
  jwt_refresh_token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InJ2MSJ9.eyJzdWIiOiJNUSIsInVzZXJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImluZm9AdGhhdHNlbmQuY29tIiwicm9sZV9pZCI6MSwidHlwZSI6InJlZnJlc2hfdG9rZW4iLCJpYXQiOjE3ODA3MjU0MjAsImV4cCI6MTc4MTMzMDIyMCwiYXVkIjoiQXBwbGljYXRpb24iLCJpc3MiOiJUSEFUU0VORCJ9.YZdhEOEiDMshGTq103ml9QS-Nkx5Siyf6sK4pz67TMdmmcKABYPkwTDUI1hbt5z8AkauxkroE6beV4L_FaY9o1drwIsASuZ4dDVfmHUW4iqc-FMDERePm9V5UTGsh_A6_pl_zGdFsS12iLrwBuzEtgvPs8W6ydslDN5Ov7fo5BQEwbAE1QRmGwYEE3r8KQpOcMVR8iZFy1TwCaI9XvRJ57aVxrFbF0DNoeo699UZ4h4g2CFCDPw6WkWDJpCAt5qUrcH__1oINst0-75vO3ZFcgPPNSzqHLV7786_L6FzcVM78YbXYnncSxhlCNkho5PjyxpZSlTgPbO2ImPPM2KKoQM',
  
};

// Tokens live in the AuthSession (per-domain) rather than the auth API client.
  /*
  sdk.rest.authSession.setTokens(authTokens); // used only by sdk.rest.ws
  sdk.graphql.authSession.setTokens(authTokens); // used only by sdk.graphql.ws
  */
  const restTokens = sdk.rest.authSession.getJwtFromPersistentStorage(authTokens);
  const graphTokens = sdk.graphql.authSession.getJwtFromPersistentStorage(authTokens);

  if (restTokens) {
    sdk.rest.authSession.setTokens(restTokens);
    sdk.rest.statefulAuthSession.setToken(restTokens.jwt_access_token);
  }

  if (graphTokens) {
    sdk.graphql.authSession.setTokens(graphTokens);
    sdk.graphql.statefulAuthSession.setToken(graphTokens.jwt_access_token);
  }
  

  // Optional: stateful user JWT (single token string) for `statefulauthorization` header
  // statefulauthorization: Bearer <token>
  // const statefulJwt = 'eyJ...';
  sdk.rest.statefulAuthSession.setToken(authTokens.jwt_access_token);
  sdk.graphql.statefulAuthSession.setToken(authTokens.jwt_access_token);

async function main() {
  // Register lazy WS modules first
  sdk.graphql.ws.use(GraphWsToken);
  sdk.graphql.ws.use(UserWsToken);
  sdk.graphql.ws.use(UserAddressWsToken);

  // Connect
  await sdk.graphql.ws.connect();
  console.log('✅ GraphQL ws connected');

  const unsubscribeGraphHello = await sdk.graphql.ws.graph.subsrcibeHello((payload) => {
    console.log('[graph.hello]', payload.msg);
  });

  /*const unsubscribeUserCreate = await sdk.graphql.ws.user.subscribeCreate((payload) => {
    console.log('[user.pub.create]', payload.id);
  });*/

  // send to server
  await sdk.graphql.ws.user.publishCreate({
    input:{
      username: `trial_user_${Date.now()}`,
      primary_email: `trial_${Date.now()}@example.com`,
      has_two_factor_auth: YesNoEnum.NO,
      connsrc_id: 1,
    },
  });

  //recive from server
  const unsubscribeUserCreate = await sdk.graphql.ws.user.subscribeCreate({
    response: (payload) => {
      //console.log('[user.pub.create]', payload.id);
      sdk.graphql.ws.user.joinSubject(payload.id);
      //sdk.graphql.ws.user.leaveSubject(payload.id)
    },
  });

  
  const unsubscribeUserAddressCreate = await sdk.graphql.ws.userAddress.subscribeCreate({
    response: (payload) => {
      console.log('[userAddress.pub.create]', payload.id);
    },
  });


  /*setTimeout(() => {
    unsubscribeGraphHello?.();
    unsubscribeUserCreate?.();
    sdk.graphql.ws.disconnect();
    console.log('✅ GraphQL ws disconnected');
  }, 80_000);*/
}

main().catch((err) => {
  console.error('❌ trial failed', err);
  sdk.graphql.ws.disconnect();
});
