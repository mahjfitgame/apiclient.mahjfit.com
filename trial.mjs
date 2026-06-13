// @ts-check 
import { BfwApiSdk } from '@bfw/api-sdk/core';
import {
  AcademicDegree,
  AcademicField,
  AlertDuration,
  ApiEndpointAuth,
  ApiEndpointAuthFile,
  ApiEndpointAuthFileUploadFileFieldEnum,
  ApiEndpointAuthMarkAsMainFieldEnum,
  ApiEndpointAuthUploadFileFieldEnum,
  ApiUserRoleEnum,
  Device,
  EmailTemplate,
  EmailTemplateCategory,
  Faq,
  FaqCategory,
  FormField,
  IdentityCardType,
  JobTitle,
  QueueSms,
  QueueType,
  QueueEmail,
  QueueFacebookdm,
  SecurityQuestion,
  ThirdPartyPlatform,
  TwofaAuthenticationType,
  WorkStatus,
  WorkStatusEnum,
  QueueWhatsapp,
  AuthorisationArea,
  AuthorisationRole,
  AuthorisationModule,
  AuthorisationModuleAction,
  CrawlerJobBatch,
  CrawlerJobBatchAttempt,
  CrawlerJobBatchAuth,
  CrawlerJobBatchQueue,
  CrawlerJobResponseType,
  CrawlerJobBatchResponse,
  City,
  Country,
  CountryLanguage,
  CountryPhoneCode,
  CountryTimezone,
  Language,
  Region,
  State,
  Subregion,  
  Timezone,
  MarketingCampaign,
  MarketingCampaignType,
  Session,
  SessionMeta,
  WebhookResponse,
  WebhookResponseData,
  WebPageHierarchy,
  WebPageMaster,
  positionEnum,
  pgTypeEnum,
  Business,
  BusinessBranch,
  BusinessInfo,
  BusinessDepartment,
  UserAuthentication,
  UserMultiFactorAuthenticationTypeEnum,
} from '@bfw/api-sdk/graphql/endpoints/shared';
import {RecordSortDirectionEnum, YesNoEnum} from '@bfw/api-sdk/graphql/libs';
import { RestApp, WebCrawler, WebCrawlerResponseTypeEnum, WebScrFacebookDm, WebScrGoogleMyBusiness } from '@bfw/api-sdk/rest/endpoints';

import { readFile } from 'node:fs/promises';
import { basename, extname } from 'node:path';
import { RetsMlsProvider, UserFavouriteProperty } from '@bfw/api-sdk/graphql/endpoints/business';
import { idText, updateLanguageServiceSourceFile } from 'typescript';
import { title } from 'node:process';



function guessMimeType(filePath) {
  switch (extname(filePath).toLowerCase()) {
    case '.png':
      return 'image/png';
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg';
    case '.webp':
      return 'image/webp';
    case '.pdf':
      return 'application/pdf';
    case '.zip':
      return 'application/zip';
    case '.mp4':
      return 'video/mp4';
    case '.csv':
      return 'text/csv';
    case '.sql':
      return 'text/plain';
    case '.graphql':
    case '.gql':
      return 'application/graphql';
    case '.docx':
      return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
    default:
      return 'application/octet-stream';
  }
}

async function fileFromPath(filePath) {
  if (typeof File === 'undefined') {
    throw new Error('Global File is not available. Use Node 18+ (or provide a File polyfill).');
  }

  const bytes = await readFile(filePath);
  return new File([bytes], basename(filePath), { type: guessMimeType(filePath) });
}

async function filesFromPaths(filePaths) {
  if (!Array.isArray(filePaths)) {
    throw new TypeError(`filesFromPaths expected an array, got ${typeof filePaths}`);
  }
  return await Promise.all(filePaths.map(fileFromPath));
}

/*
// for invalid token test use below 2
{
    "jwt_access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InYxIn0.eyJzdWIiOiJNUT09IiwidXNlcm5hbWUiOiJhZG1pbiIsImVtYWlsIjoiaW5mb0B0aGF0c2VuZC5jb20iLCJyb2xlX2lkIjoxLCJ0eXBlIjoiYWNjZXNzX3Rva2VuIiwiaWF0IjoxNzcyMTcwNDU4LCJleHAiOjE3NzIyNTY4NTgsImF1ZCI6IkFwcGxpY2F0aW9uIiwiaXNzIjoiVEhBVFNFTkQifQ.WamAtiE6Bc--hHNP8casiYbO6pJ-zwYkQYQfYEGNAg3SfN6yWpHuAVYgCH_ro-qE9fKnoWMP0c87pu2aZqd8kQn9yI2ZocheZI1Ia9-piRe7f_yjI6pXYeLeAHQnJiYs3BPUR2ePsoghoIDH7iSuV8EjDR28lZp21qVC5vmscSQqcvGu3pD8NO35mklc-ZxOPxWkwJPAK89Q0x7V7Jh94oegEEe1WDtFmwNwIh2WSYx6ftaxdvWXjGjryXmrNnBiVT27zqiigHFUFmr7qSHwNd0dwRvzz62KQw4g1KpfO96RGhzlmfnBkYNOPccKo5z24eHTd4eHvDoIngFurMWsbA",
    "jwt_refresh_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InYxIn0.eyJzdWIiOiJNUT09IiwidXNlcm5hbWUiOiJhZG1pbiIsImVtYWlsIjoiaW5mb0B0aGF0c2VuZC5jb20iLCJyb2xlX2lkIjoxLCJ0eXBlIjoicmVmcmVzaF90b2tlbiIsImlhdCI6MTc3MjE3MDQ1OCwiZXhwIjoxNzcyNzc1MjU4LCJhdWQiOiJBcHBsaWNhdGlvbiIsImlzcyI6IlRIQVRTRU5EIn0.OzSfThT5A_VX9q941nlKHTY9_Sqn-1Qas1EHqJ_3UzpSax6TtYpgulzaC5Rgar2y-FpfNXhfS3tZn9k9J_AWIsd-jooO6pzoUO_phdS5mItogVxKbMfV7gdnruAmoy14mOY8HAxGelLE3qXNXIsreTnGTJ5xdrIrvY2ouysCmx0kNj6Rx2wQAZJAfzcloMhIZMhver0x4lGBPiYCg26hvESLGMDIHBOPPEAIIfvsyTo4jmZsNIZDtJzDb_eEb5wMMSzgRGSN91zV3vBKP6snV49vNCH-xUnv-sZOsxD80v04e4S25D5UocpPGNJSc8nvFSSZSmO2mLO4mKKS71f_0g",
}
{
    jwt_access_token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InYxIn0.eyJzdWIiOiJNUT09IiwidXNlcm5hbWUiOiJhZG1pbiIsImVtYWlsIjoiaW5mb0B0aGF0c2VuZC5jb20iLCJyb2xlX2lkIjoxLCJ0eXBlIjoiYWNjZXNzX3Rva2VuIiwiaWF0IjoxNzcyMTcwNDU4LCJleHAiOjE3NzIyNTY4NTgsImF1ZCI6IkFwcGxpY2F0aW9uIiwiaXNzIjoiVEhBVFNFTkQifQ.WamAtiE6Bc--hHNP8casiYbO6pJ-zwYkQYQfYEGNAg3SfN6yWpHuAVYgCH_ro-qE9fKnoWMP0c87pu2aZqd8kQn9yI2ZocheZI1Ia9-piRe7f_yjI6pXYeLeAHQnJiYs3BPUR2ePsoghoIDH7iSuV8EjDR28lZp21qVC5vmscSQqcvGu3pD8NO35mklc-ZxOPxWkwJPAK89Q0x7V7Jh94oegEEe1WDtFmwNwIh2WSYx6ftaxdvWXjGjryXmrNnBiVT27zqiigHFUFmr7qSHwNd0dwRvzz62KQw4g1KpfO96RGhzlmfnBkYNOPccKo5z24eHTd4eHvDoIngFurMWsbA',
    jwt_refresh_token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InYxIn0.eyJzdWIiOiJNUT09IiwidXNlcm5hbWUiOiJhZG1pbiIsImVtYWlsIjoiaW5mb0B0aGF0c2VuZC5jb20iLCJyb2xlX2lkIjoxLCJ0eXBlIjoicmVmcmVzaF90b2tlbiIsImlhdCI6MTc3MjE3MDQ1OCwiZXhwIjoxNzcyNzc1MjU4LCJhdWQiOiJBcHBsaWNhdGlvbiIsImlzcyI6IlRIQVRTRU5EIn0.OzSfThT5A_VX9q941nlKHTY9_Sqn-1Qas1EHqJ_3UzpSax6TtYpgulzaC5Rgar2y-FpfNXhfS3tZn9k9J_AWIsd-jooO6pzoUO_phdS5mItogVxKbMfV7gdnruAmoy14mOY8HAxGelLE3qXNXIsreTnGTJ5xdrIrvY2ouysCmx0kNj6Rx2wQAZJAfzcloMhIZMhver0x4lGBPiYCg26hvESLGMDIHBOPPEAIIfvsyTo4jmZsNIZDtJzDb_eEb5wMMSzgRGSN91zV3vBKP6snV49vNCH-xUnv-sZOsxD80v04e4S25D5UocpPGNJSc8nvFSSZSmO2mLO4mKKS71f_0g'
}

{
  GraphRefreshJWT: {
    id: 1,
    role_id: 'APIADMIN',
    username: 'admin',
    email: 'info@thatsend.com',
    jwt_access_token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InYxIn0.eyJzdWIiOiJNUT09IiwidXNlcm5hbWUiOiJhZG1pbiIsImVtYWlsIjoiaW5mb0B0aGF0c2VuZC5jb20iLCJyb2xlX2lkIjoxLCJ0eXBlIjoiYWNjZXNzX3Rva2VuIiwiaWF0IjoxNzcyMjYxNjYyLCJleHAiOjE3NzIzNDgwNjIsImF1ZCI6IkFwcGxpY2F0aW9uIiwiaXNzIjoiVEhBVFNFTkQifQ.UzqxXkyUSCMP7TJ2gPQHwACTBg1oipDzVBk3px_vtgpL9Td2N2Fi8QGDe7mGWjLEnMWBz_G8z9YKNfC5oaxahoupO-trT3El8ZMil9M42c-ituK9UcdEK7hOLcb6z9rBTI_79hKol1D6u0PeR9Vz689n0k1orn26-CtvSfKKZAoUXRCZwZbgGUgUBA7BIX8txbRIpLGfEumwD1s_aM1Lxdq748dRMm8zMajInfZPgv0QOuBNXpYCxpTDeyALOmZU2JW0SdnjqGiUT3Gvyyc39gIORDo_kG04cGPGmRPgjJLPirAx9uFoFbEvMl2kGVb4mJ55xnjvXyIyto83QNvbaQ',
    jwt_refresh_token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InYxIn0.eyJzdWIiOiJNUT09IiwidXNlcm5hbWUiOiJhZG1pbiIsImVtYWlsIjoiaW5mb0B0aGF0c2VuZC5jb20iLCJyb2xlX2lkIjoxLCJ0eXBlIjoicmVmcmVzaF90b2tlbiIsImlhdCI6MTc3MjI2MTY2MiwiZXhwIjoxNzcyODY2NDYyLCJhdWQiOiJBcHBsaWNhdGlvbiIsImlzcyI6IlRIQVRTRU5EIn0.c-4lXg4iMYlWX7cQSWNs0pu8mpHSkQP_4HfoEL4e9maYqWr8cuVuZCxbvi7_zeVV7s3VKFmv4S4MqdcsTSadGbkIYUE_liJlDdiNfQ6fufcOGcYMDnsrHoW-Rt9lPtbxypfI2Dc3W6UltYALbhJYQ4sn6oBesss7_Din7KvMzh_2mmVVIL5ojlCv5Xaa8l915Fp6qE3RUzLPGua-Y97rEy2AIGOtfI2t1pp9auOBDF9taUpirUNYnbKF3YLEx8aHdqTzPQoJSqpvO3zwYVif-ozf5Jy6Tk8em8liUqR4EfEhb5I8yopw6GuEKRk6iGz5C0L2FbDqyCcyUzfidnqxag'
  }
}
{
  GraphSignin: {
    id: 1,
    username: 'admin',
    created: '2024-07-31T22:44:35.000Z',
    deleted: null,
    email: 'info@thatsend.com',
    jwt_access_token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImF2MSJ9.eyJzdWIiOiJNUSIsInVzZXJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImluZm9AdGhhdHNlbmQuY29tIiwicm9sZV9pZCI6MSwidHlwZSI6ImFjY2Vzc190b2tlbiIsImlhdCI6MTc3NTIxNjQ3OSwiZXhwIjoxNzc1MzAyODc5LCJhdWQiOiJBcHBsaWNhdGlvbiIsImlzcyI6IlRIQVRTRU5EIn0.O7s0swEGWxZdJP1r7e7Us1iXjRljAYfqZHZJa7FW14QeG77bJO-IlLi2cTVhqaYpHLbLK29Q2Q5D6CcjoZzfneRXSkIa4sTAbn-H96Ks9bICrF0rrospvqsougPuCBqiGwX4AxWcNsX8XVMyqTL0Vyxo2aNbYwliyKvgi6D4MIlfxiCpdZ5pmaYEJhBYwGpstiAMs4qppYvqkxbi-Yj_ABwLdb5VbIx_o9I9TCdEzcUIrvtn5HXBO_Nj9g-_CN2cO6jLrUxnzNWvuSS0svSz-34V91YX0IWHQGbmYF0xp2FDZOsxFmkF9TDB7HWo_TQXEXeuXG4snOU6rwh55eqxdw',
    jwt_refresh_token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InJ2MSJ9.eyJzdWIiOiJNUSIsInVzZXJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImluZm9AdGhhdHNlbmQuY29tIiwicm9sZV9pZCI6MSwidHlwZSI6InJlZnJlc2hfdG9rZW4iLCJpYXQiOjE3NzUyMTY0NzksImV4cCI6MTc3NTgyMTI3OSwiYXVkIjoiQXBwbGljYXRpb24iLCJpc3MiOiJUSEFUU0VORCJ9.EAde_hwWb0QFVRpwHG12jobw0-kulbVbo7hU_HMoOvs0vGkm9e68IYaJu_hWYaiIoo9UXPtWGICHspSFsq7h8OfV2juXW74DPSOd6j6mtwt4YX1u3sozgNBdU3dxlt6cFLI3cVgerpfcTW6TAxlxzNM3CfjpTSFuHstlfdg2-EreCKNqwW6CGx8e6PmXW0vpRfJj4G6G-Jufi4XXVlZGPVieRio1wSi7awRDjgK3VkvakgohcY_oCT8ujqd9HGFasF-0dagXkj2OAt-RCCH3wqdQBPWPZKU5COH7IikAn3GU2vp1oMiEIgEYCn4iYzFoeKUaY0hS99R5TNrZ97oIIw',
    role_id: 'APIADMIN',
    url_slug: null,
    file_profile_photo: '20260103T055739998Z.oecn0sepme.TUE9PS5UbUZPLmRXNWtaV1pwYm1Waw==+2838063.jpg',
    is_main: '2026-01-01T07:52:02.000Z',
    record_position: 2,
    suspended: null,
    updated: '2026-02-28T16:54:22.000Z',
    file_profile_photo_url: null
  }
}
{
  username: 'admin',
  email: 'info@thatsend.com',
  jwt_access_token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InYxIn0.eyJzdWIiOiJNUT09IiwidXNlcm5hbWUiOiJhZG1pbiIsImVtYWlsIjoiaW5mb0B0aGF0c2VuZC5jb20iLCJyb2xlX2lkIjoxLCJ0eXBlIjoiYWNjZXNzX3Rva2VuIiwiaWF0IjoxNzcyNTE4NzMxLCJleHAiOjE3NzI2MDUxMzEsImF1ZCI6IkFwcGxpY2F0aW9uIiwiaXNzIjoiVEhBVFNFTkQifQ.Nz_oeOkEYVGHCbkLcORuwsPwB9hSzh4_xt4Jov0OMnTaDfBZlAvUxuS7CaV6FySEduxXZpeb6b14iwEe4LMRDsPtRIloIGiYn4kWqmEhzd4YpLd_JxMCxgGayS12KbhwGmiVnL5CViNttUFcwXzM0wOJPDxM6db9ng3N9cZWct1VXV_OQ7PjYzFSinRLOTPxhmTOonZwpElAI0S5ykDMBSWtZjyEMeEL89yFkCHMT82zVL4qFAPmpADFicNvZZzM0monjynmLls8KCeLbdEbpWlGSsFTssuO9f7w8OYBOMUAVvfsAqsvYf2IWYmJX0hTI6qAHaJjXKp_3ynsAJq9eg',
  jwt_refresh_token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InYxIn0.eyJzdWIiOiJNUT09IiwidXNlcm5hbWUiOiJhZG1pbiIsImVtYWlsIjoiaW5mb0B0aGF0c2VuZC5jb20iLCJyb2xlX2lkIjoxLCJ0eXBlIjoicmVmcmVzaF90b2tlbiIsImlhdCI6MTc3MjUxODczMSwiZXhwIjoxNzczMTIzNTMxLCJhdWQiOiJBcHBsaWNhdGlvbiIsImlzcyI6IlRIQVRTRU5EIn0.dLXnKCc71SJpVzmkFm4oDGY_zGT8wcm9uJU0Tp902u7hGtSTet1pNe4-dVQ55WNPcSkZgvyFUnBjQW1Iz0hA9mRTeRaYIb6jaZD2bY2lvyraPJFQEykgLwlasDhKf2roIiSs1epTbHQQ90gff2eemcGgEekifsU44HmGp4k26YJukwRVdb3flAvJ7x0H77jnNSst2zkKRHbEqb7AFGAyGbEkdBGw7sE_ETQCZlQ4iJ_4sQ-Y8aLw9auvZMAUmy1vyijxlyW1B_yiEKLOsA_u3fXd9EdruwdbviI6Hw5GtMa0gPWDe0HlgOKHC7WVedagBDC-O_UIcJZVvhsepFe8kQ',
  created: '2024-07-31T22:44:35.000Z'
}


uuid: 1c2e0076-a809-0e87-458a-168a2748a3f0
fingerprint: dGVzdC50aGF0c2VuZEBnbWFpbC5jb218R29vZ2xlTXlCdXNpbmVzc1NlcnZpY2U=
             dGVzdC50aGF0c2VuZEBnbWFpbC5jb218R29vZ2xlTXlCdXNpbmVzc1NlcnZpY2U

*/
const api = new BfwApiSdk({
  graphql: { 
    baseUrl: 'http://localhost:20147/graphql',
    //baseUrl: 'https://bfw-nestjs-microservice-api.thatsend.app/graphql',
    //headers: { Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InYxIn0.eyJzdWIiOiJNUT09IiwidXNlcm5hbWUiOiJhZG1pbiIsImVtYWlsIjoiaW5mb0B0aGF0c2VuZC5jb20iLCJyb2xlX2lkIjoxLCJ0eXBlIjoiYWNjZXNzX3Rva2VuIiwiaWF0IjoxNzcyNTE4NzMxLCJleHAiOjE3NzI2MDUxMzEsImF1ZCI6IkFwcGxpY2F0aW9uIiwiaXNzIjoiVEhBVFNFTkQifQ.Nz_oeOkEYVGHCbkLcORuwsPwB9hSzh4_xt4Jov0OMnTaDfBZlAvUxuS7CaV6FySEduxXZpeb6b14iwEe4LMRDsPtRIloIGiYn4kWqmEhzd4YpLd_JxMCxgGayS12KbhwGmiVnL5CViNttUFcwXzM0wOJPDxM6db9ng3N9cZWct1VXV_OQ7PjYzFSinRLOTPxhmTOonZwpElAI0S5ykDMBSWtZjyEMeEL89yFkCHMT82zVL4qFAPmpADFicNvZZzM0monjynmLls8KCeLbdEbpWlGSsFTssuO9f7w8OYBOMUAVvfsAqsvYf2IWYmJX0hTI6qAHaJjXKp_3ynsAJq9eg` },
  },
  rest: { 
    baseUrl: 'http://localhost:20152/rest' 
    //baseUrl: 'https://bfw-nestjs-microservice-api.thatsend.app/rest',
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
  }
});


const authTokens = {
  jwt_access_token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImF2MSJ9.eyJzdWIiOiJNUSIsInVzZXJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImluZm9AdGhhdHNlbmQuY29tIiwicm9sZV9pZCI6MSwidHlwZSI6ImFjY2Vzc190b2tlbiIsImlhdCI6MTc3Nzg4NDc1NywiZXhwIjoxNzc3OTcxMTU3LCJhdWQiOiJBcHBsaWNhdGlvbiIsImlzcyI6IlRIQVRTRU5EIn0.AHbt-CGxCEmgkot9-DiRthx9qbtvs2q2hxSPeYLrgCw0EvLi4nSCgKTvnzeXz9Zc7zifGKNGUMXNOOwqVtXwHr-EGjwbDP4xFaU_cDlJIsS8yEVtvTRqmtdSs2b5QSYTFff7NHBi5OV_0UBvBCePgGsT1K5M4iiAjY0Sd5o3W6OigaGRUJYidSSlAXtd0EXhZco0LZl-SQbSI-vaIfO1JtVCMkoBdVA-TM0VS_Zzm3XMrGopx343BMBRpLCVM-fAfPU6_VfZwSazkeXpZJED7s92f9nsreQPrL2wW6NjUSFwKCNvMXWyEfNPSiwdKPH2raUL4m65PJLEscU0Lb-TdA',
  jwt_refresh_token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InJ2MSJ9.eyJzdWIiOiJNUSIsInVzZXJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImluZm9AdGhhdHNlbmQuY29tIiwicm9sZV9pZCI6MSwidHlwZSI6InJlZnJlc2hfdG9rZW4iLCJpYXQiOjE3Nzc4ODQ3NTcsImV4cCI6MTc3ODQ4OTU1NywiYXVkIjoiQXBwbGljYXRpb24iLCJpc3MiOiJUSEFUU0VORCJ9.ayZGJKbh31bnkD6ff__zimxRwzBVTso-Ys1i8of32_MY0fcyGmiWMZpkV01qtEmPb2YUrY4rdhchx9eDAihCW7mX8tZd8WVpttmIf-P_9EFMu-q9tkiNX6GWT2H6Y0CvZT1mSuMC58OjeKwRr6OhLesvXshCwTmXzse6CqIyc5XGS5gSXW6YHjHc5SQRpzehRsx_2gcQgHpS6dGT1CG59jZbLNm_mNBKz2FDd1-oGwzN1CfKcv_kYPdc0Y0cVCN8Onm0YCzrTV62VxIHrNWhFC4ypP9RGPklppG9NwiLZDc4AiKkcm3EsrV81nqflPn0QO1CY25diVVDlfqD7uKdBA',
  
};
// Tokens live in the AuthSession (per-domain) rather than the auth API client.
api.rest.authSession.setTokens(authTokens);
api.graphql.authSession.setTokens(authTokens);

// Optional: stateful user JWT (single token string) for `statefulauthorization` header
// statefulauthorization: Bearer <token>
// const statefulJwt = 'eyJ...';
api.rest.statefulAuthSession.setToken(authTokens.jwt_access_token);
api.graphql.statefulAuthSession.setToken(authTokens.jwt_access_token);


//////////////////////////////////////////////////////

//console.log('REST hello:', await sdk.rest.hello.hello());
//console.log('Graph hello:', await sdk.graphql.helloGraph.helloGraph());
//console.log('WhoAmI base:', await sdk.graphql.whoAmI.whoAmIBase());
//console.log('WhoAmI custom:', await sdk.graphql.whoAmI.whoAmISelect({ username: '', email: '' }, 'username email'));

// Now protected REST calls will work (and auto-refresh on 401)
//const restHello = await sdk.rest.hello.hello({ any: 'random', time: Date.now() });
//console.log(restHello);


// Now protected GraphQL calls will work (and auto-refresh on 401)
//const graphqlHello = await sdk.graphql.helloGraph.helloGraph();
//console.log(graphqlHello);


//await api.graphql.auth.signin({ identify: "opwq@AK56", username: "admin" });
//console.log("Graph tokens:", api.graphql.authSession.getTokens());

//const ok = await sdk.rest.webCrawler.submitOtp('a8090e87458a', {otp: '246290'});
//console.log('OTP verified:', ok);

/*
const refreshed = await sdk.graphql.graph.graphRefreshJWT({
  input: {
    jwtRefreshToken: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InYxIn0.eyJzdWIiOiJNUT09IiwidXNlcm5hbWUiOiJhZG1pbiIsImVtYWlsIjoiaW5mb0B0aGF0c2VuZC5jb20iLCJyb2xlX2lkIjoxLCJ0eXBlIjoicmVmcmVzaF90b2tlbiIsImlhdCI6MTc3MjE3MDQ1OCwiZXhwIjoxNzcyNzc1MjU4LCJhdWQiOiJBcHBsaWNhdGlvbiIsImlzcyI6IlRIQVRTRU5EIn0.OzSfThT5A_VX9q941nlKHTY9_Sqn-1Qas1EHqJ_3UzpSax6TtYpgulzaC5Rgar2y-FpfNXhfS3tZn9k9J_AWIsd-jooO6pzoUO_phdS5mItogVxKbMfV7gdnruAmoy14mOY8HAxGelLE3qXNXIsreTnGTJ5xdrIrvY2ouysCmx0kNj6Rx2wQAZJAfzcloMhIZMhver0x4lGBPiYCg26hvESLGMDIHBOPPEAIIfvsyTo4jmZsNIZDtJzDb_eEb5wMMSzgRGSN91zV3vBKP6snV49vNCH-xUnv-sZOsxD80v04e4S25D5UocpPGNJSc8nvFSSZSmO2mLO4mKKS71f_0g',
  },
  selection: {
    jwt_access_token: true,
    jwt_refresh_token: true,
    file_profile_photo_url: {
      direct: true,
      secure: true,
    },
  },
});

console.log(refreshed);
*/
class trialGraph {
  constructor(){}
  async signIn() {
    const signIn = await api.graphql.graph.signin({
      input: { 
        username: 'admin',
        identify: 'opwq@AK56',
      },
      selection: {
        id: true,
        username: true,
        created: true,
        deleted: true,
        email: true,
        jwt_access_token: true,
        jwt_refresh_token: true,
        role_id: true,
        url_slug: true,
        file_profile_photo: true,
        is_main: true,
        record_position: true,
        suspended: true,
        updated : true,
        file_profile_photo_url: {
          direct: true,
          secure: true,
        }
      }
    });
    return signIn;
  }
  async signUp() {
    const signUp = await api.graphql.graph.signup({
      input: { 
        username: 'testadm', 
        identify: 'Testadm@77',
        email: 'testadmin@gmail.com',
      },
      selection: {
        username: true,
        email: true,
        jwt_access_token: true,
        jwt_refresh_token: true,
        created: true,
      }
    });
    return signUp;
  }
  async signOut() {
    const signOut = await api.graphql.graph.signout();
    return signOut;
  }
  async whoAmI(){
    const whoAmI = await api.graphql.graph.whoAmI({
      selection: {
        username: true,
        email: true,
        jwt_access_token: true,
        jwt_refresh_token: true,
        created: true,
      }
    });
    return whoAmI;
  }
  async hello(){
    const hello = await api.graphql.graph.hello();
    return hello;
  }
  async refreshJwt(){
    const refreshJwt = await api.graphql.graph.refreshJWT({
      input: {
        jwtRefreshToken: '32113',//authTokens.jwt_refresh_token,
      },
      selection: {
        jwt_access_token: true,
        jwt_refresh_token: true,
        id: true,
        username: true,
        url_slug: true,
        role_id: true,
        email: true,
        created: true,
        file_profile_photo: true,
        file_profile_photo_url: {
          direct: true,
          secure: true,
        },
      }
    });
    return refreshJwt;
  }
}

class trialApiEndpointAuth {
  constructor(){
    // activate the module
    api.graphql.use(ApiEndpointAuth);
  }
  async findOneById(){
    const findOneById = await api.graphql.apiEndpointAuth.findOneById({
      input: {
        id: 1,
      },
      selection: {
        id: true,
        username: true,
        email: true,
        file_profile_photo: true,
        file_profile_photo_url: {
          direct: true,
          secure: true,
        },
        created: true,
        updated: true,
        deleted: true,
        fr_api_endpoint_auth_files: {
          id: true,
          aepu_id: true,
          file: true,
          file_url: {
            direct: true,
            secure: true,
          },
        }
      }
    });
    return findOneById;
  }

  async find(){
    const find = await api.graphql.apiEndpointAuth.find({
      filter: {
        take: 3,
        skip: 0,
        order: {
          id: RecordSortDirectionEnum.ASC,
        },
        where: [
          {
            username: {
              like: '%os%'
            } 
          },
          {
            id: {
              equal: "9",
              between: ["3", "5"]
            },
          },
          {
            email: {
              like: "test"
            }
          },
          {
            id: {
              into: ["3", "2", "1"]
            }
          }
        ]
      },
      selection: {
        pages: true,
        remain: true,
        take: true,
        total: true,
        pagination: {
           previous: {
            page: true,
            skip: true,
            count: true,
          },
          next: {
            page: true,
            skip: true,
            count: true,
          },
        },
        rows: {
          id: true,
          username: true,
          email: true,
          file_profile_photo: true,
          file_profile_photo_url: {
            direct: true,
            secure: true,
          },
          created: true,
          updated: true,
          deleted: true,
          fr_api_endpoint_auth_files: {
            id: true,
            aepu_id: true,
            file: true,
            file_url: {
              direct: true,
              secure: true,
            },
          }
        }
      } 
    });
    return find;
  }
  async upload(){
    const localPath = '/Users/core/Desktop/python-cli-application.png';
    const file = await fileFromPath(localPath);

    const upload = await api.graphql.apiEndpointAuth.upload({
      attachment: [file],
      input: {
        file_field: ApiEndpointAuthUploadFileFieldEnum.FILE_PROFILE_PHOTO,
        id: "3",
        ref_id: "3",
      },
      selection: {
        id: true,
        ref_id: true,
        file_name: true,
        file_field: true,
        access_url: {
          direct: true,
          secure: true,
        }  
      }
    });
    return upload;
    /*
    // sample output
    [
      {
        id: '3',
        ref_id: '3',
        file_name: '20260303T224155769Z.iah1yfhbfh.TUEuVG1GTy5kVzVrWldacGJtVms+python-cli-application.png',
        file_field: 'FILE_PROFILE_PHOTO',
        access_url: {
          direct: 'http://localhost:20152/rest/cdn/u/api-end-point-auth/3/20260303T224155769Z.iah1yfhbfh.TUEuVG1GTy5kVzVrWldacGJtVms%2Bpython-cli-application.png',
          secure: 'http://localhost:20152/rest/cdn/u/upcoming/feature/not/available/in/present'
        }
      }
    ]
    */
  }
}

class trialApiEndpointAuthFile {
  constructor(){
    // activate the module
    api.graphql.use(ApiEndpointAuthFile);
  }

  async multiUpload(){
    // ApiEndpointAuthFileUpload:  Uploaded file(s) count 8 exceeded maximum count limit 5.
    const localPath = [
    '/Users/core/Documents/open-source-ckw/case-study/Multi-Model-LLM-Setup-via-Open-WebUI-with-GGUF-Quantised-Models/app-workflow.png', // exclude due to file count limit 5
    //\'/Users/core/Downloads/Archive.zip',
    //x '/Users/core/Documents/open-source-ckw/upcoming/App_livestream_with_simple_voting.mp4', // File truncated as it exceeds the 20971520 byte size limit.'
    //\'/Users/core/Downloads/DBX Dashboard - Required info Before Interview.pdf',
    //x '/Users/core/Downloads/schema.graphql', // ApiEndpointAuthFileUpload:  File schema.graphql is not with the valid format. Valid formats are ...
    //x '/Users/core/Downloads/bfw_nestjs_microservice_api_v2_latest.sql', // File truncated as it exceeds the 20971520 byte size limit.
    //\'/Users/core/Downloads/CBA VAULT WHAT TO DO WHERE.docx',
    //\'/Users/core/Downloads/paapi5-nodejs-sdk-example.zip',
    '/Users/core/Downloads/swagger.json', // exclude due to file count limit 5
    //\'/Users/core/Downloads/te_api_endpoint_auth.csv'
  ];
    const files = await filesFromPaths(localPath);

    const upload = await api.graphql.apiEndpointAuthFile.upload({
      attachment: files,
      input: {
        file_field: ApiEndpointAuthFileUploadFileFieldEnum.FILE_API_ENDPOINT_AUTH_ATTACHMENT,
        ref_id: "3",
      },
      selection: {
        id: true,
        ref_id: true,
        file_name: true,
        file_field: true,
        access_url: {
          direct: true,
          secure: true,
        }  
      }
    });
    return upload;
  }
}

class trialRestApp {
  constructor(){
   api.rest.use(RestApp);
  }
  async getHello() {
    const hello = await api.rest.restApp.hello.get();
    return hello;
  }
  async postHello() {
    const hello = await api.rest.restApp.hello.post({
      input: {
        data: {
          ping: 'hello',
          count: 1+9,
          nested: {
            ok: true
          },
          at: Date.now(),
        }
      }
    });
    return hello;
  }
}

class trialWebCrawler {
  constructor(){
   api.rest.use(WebCrawler);
  }
  async submitOtpViaGet() {
    const hello = await api.rest.webCrawler.submitOtp.get({
      fingerprint: 'dGVzdEBnbWFpbC5jb218Q2hhdEdwdFNlcnZpY2U',
      id: 'a-183f982a-466c-4b14-998a-9f8d70e44b82', // UUID v4
      otp: 'MjQ2Mjkw', //'246290',
    });
    return hello;
  }
  async submitOtpViaPost() {
    const hello = await api.rest.webCrawler.submitOtp.post({
      fingerprint: 'ZGV2QGxvY2Fsc2VydmVyLmNvbXxXaGF0c2FwcFBtU2VydmljZQ',
      id: 'a-019cb834-90c0-7eb5-81f7-9454be56dbdc', // UUID v7
      input: {
        otp: 'MjQ2Mjkw', //'246290',
      }
    });
    return hello;
  }
}

class trialWebScrGoogleMyBusiness {
  constructor(){
   api.rest.use(WebScrGoogleMyBusiness);
  }
  async enqueueViaPost() {
    const eq = await api.rest.webScrGoogleMyBusiness.enqueue.post({
      input: {
        client_id: "cnt",
        batch: {
            id: `C-${new Date().getTime()}`,
            alert_email: "test.1.thatsend@gmail.com",
            at: new Date().toISOString()
        },
        auth: {
            u: "",
            p: "",
            keep_login: false,
            twofa: null
        },
        response: {
            type: WebCrawlerResponseTypeEnum.LOCAL_CSV,
            webhook: "http://localhost:20152/rest/webhook/trial",
            u: "test.thatsend@gmail.com",
        },
        queue: [
            {
                id: 22,
                browse_url: "https://www.google.com/",
                max_reviews: 4,
                b_name: "Jonathan Town Club",
                b_address: "545 S Figueroa St",
                b_country: "United States",
                b_state: "California",
                b_city: "Los Angeles",
                b_zipcode: "90071",
                b_website: "",
                u_fname: "",
                u_lname: ""
            }
        ]
      }
    });
    return eq;
  }
}

class trialWebScrFacebookDm {
  constructor(){
   api.rest.use(WebScrFacebookDm);
  }
  async initViaPost() {
    const init = await api.rest.webScrFacebookDm.init.post({
      input: {
          client_id: 'cnt',
          batch: {
              id: `sdk-${new Date().getTime()}`,
              alert_email: 'test.thatsend@gmail.com',
              at: new Date().toISOString()
          },
          auth: {
              u: 'thatsenddev@gmail.com',
              p: 'thats@end000',
              keep_login: true,
              twofa: null
          },
          response: {
              type: WebCrawlerResponseTypeEnum.WEBHOOK_API,
              webhook: "http://localhost:20152/rest/webhook/trial",
              u: "test.thatsend@gmail.com",
          },
          queue: [
              {
                  id: 1,
                  browse_url: 'https://www.facebook.com/thatsendofficial/',
                  message: `Hi Thats End, This request was to inform you that we have completed the SDK development of your project.`
              },
          ]
      }
    });
    return init;
  }
}
class trialNestedRelation {
  constructor(){
    api.graphql.use(ApiEndpointAuth);
  }
  async find() {
    const find = await api.graphql.apiEndpointAuth.find({
      filter: {
        take: 2,
        skip: 0,
        order: {
          id: RecordSortDirectionEnum.ASC,
        },
        where: [
          {
            fr_api_endpoint_auth_files:[
              {
                id: {
                  equal: "7"
                },
                
              }
            ]
          },
        ]
      },
      selection: {
        pages: true,
        total: true,
        rows: {
          id: true,
          email: true,
          fr_api_endpoint_auth_files: {
            id: true,
            aepu_id: true,
            file: true,
            fr_api_endpoint_auth: {
              username: true,
              email: true
            }
          }
        }
      }
    });
  }
}
class trialUnivarsal {

  constructor(){
    api.graphql.use(UserAuthentication);
  }


   async appStepSigninUser() {
    const result = await api.graphql.userAuthentication.stepSigninUser({
      input: {
        arole_id: 5,
        dtoken: "test3",
        duuid: "6",
        stamp: "2024-07-31T22:44:35.000Z",
        un_pe_pm: "7098675643",
      },
      selection: {
        snapshot: {
          message: true,
        },
        stamp: true,
        next_step: true,
        previous_step: true,
        ref_id: true,
        ref_value: true,
        available_mfao: true,
        selected_mfao: true,
        authenticated: {
          user: {
            id: true,
          },
        },
      },
      
    });
  
    return result;
  }

  async appStepSigninMultiFAOption() {
    const result = await api.graphql.userAuthentication.stepSigninMultiFAOption({
      input: {
        dtoken: "test3",
        duuid: "6",
        mfa_option: UserMultiFactorAuthenticationTypeEnum.MULTIFAT_EMAIL,
        stamp: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImF2MSJ9.eyJzIjoiVlE9PSIsImRpZCI6Ik9BPT0iLCJhciI6Ik5RPT0iLCJ1YXIiOiJOdz09IiwidWVtIjoiTnpBNU9EWTNOVFkwTXc9PSIsInNkIjoiT0E9PSIsInN1YiI6Ik1URTMiLCJleHAiOjE3NzgwNzAwNDgsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJpYXQiOjE3NzgwNjg4NDgsImF1ZCI6IkFwcGxpY2F0aW9uIiwiaXNzIjoiVEhBVFNFTkQifQ.bbEaT7mk8ogeUoFTZVM3-M1hsArWsx99jU422kef_7525drbXi0KUl7bzflz7uBSiCy52_t8M16AonqumGqW9i8a5mWYsRCmKSrmuU46uwD--lVYotUFofCgz5eKBzOmZZ5PTKmelJRpruVUB8ZO3tV6y5G1hbf7FJLhDjBg0cEDH6sbhJ1brKSm9KWz8SvwTFDMBh4ZbQWc8SMs_UP0-CYTqOdH5LbpXYyv_V0HHWIW0tVCnBEVHQh8XKW4gQrkzlqYnFAmETrK5JordPEEJJrwsMwThO7yBQ-0K7chLSLcK3h9ftk6fZ5_aG8RTJ-CXR6gtRDCJCijgBOpc2ZMqQ",
      },
      selection: {
        snapshot: {
          message: true,
        },
        stamp: true,
        next_step: true,
        previous_step: true,
        ref_id: true,
        ref_value: true,
        available_mfao: true,
        selected_mfao: true,
      },
    });
  
    return result;
  }

  async appStepSigninMultiFAVerify() {
  const result = await api.graphql.userAuthentication.stepSigninVerify({
    input: {
      dtoken: "test3",
      duuid: "6",
      stamp: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImF2MSJ9.eyJzIjoiVlE9PSIsImRpZCI6Ik9BPT0iLCJhciI6Ik5RPT0iLCJ1YXIiOiJOdz09IiwidWVtIjoiTnpBNU9EWTNOVFkwTXc9PSIsIm1mYW8iOiJNZz09Iiwic2QiOiJPQT09Iiwic3ViIjoiTVRFMyIsImV4cCI6MTc3ODA3MDA0OCwidHlwZSI6ImFjY2Vzc190b2tlbiIsImlhdCI6MTc3ODA2OTIwMSwiYXVkIjoiQXBwbGljYXRpb24iLCJpc3MiOiJUSEFUU0VORCJ9.Zb57KKhorDJWKns7sXXZ-HK9rDIUwuVEGBZnEHIhTyiOKS7sAQ_uAGDI4aICPVFDB3zrM6XzU8q7ZtY1zTxC1n5wf0CfGQrgNQSeqmRBsJJb1AR9dzq0wG9X4FafGDwqUED99KUfU4wHYFui2t7sYkXbrjya_Mu7oGIOaNljrCebwjoYhYmMV13eDmSVPsSaFzkwkhLpPFXT5S6Wfbyv0y64ThGb2KTU8FAYMsKn6pORt-1t2fDYw-opwrwi9S2TzpAJWVPwK5UcIH6fV4fNtWN7cbpSW2UMjBVKapiWuhIPSN_VcHabXVBu1EowLxVs0r7iYYt4rgCxk-uxz73Rkw",
      otp: "369448",
      //"answer": "Surat"
    },
    selection: {
      snapshot: {
        message: true,
      },
      stamp: true,
      next_step: true,
      previous_step: true,
      ref_id: true,
      ref_value: true,
      available_mfao: true,
      selected_mfao: true,
      authenticated: {
        user: {
          id: true,
        },
      },
    },
  });

  return result;
}

async appStepSigninPassword() {
  const result = await api.graphql.userAuthentication.stepSigninPassword({
    input: {
      dtoken: "test3",
      duuid: "6",
      identify: "Admin@123",
      keep_logged: YesNoEnum.YES,
      stamp: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImF2MSJ9.eyJzIjoiVlE9PSIsImRpZCI6Ik9BPT0iLCJhciI6Ik5RPT0iLCJ1YXIiOiJOdz09IiwidWVtIjoiTnpBNU9EWTNOVFkwTXc9PSIsIm1mYW8iOiJNZz09Iiwic2QiOiJPQT09IiwibyI6dHJ1ZSwic3ViIjoiTVRFMyIsImV4cCI6MTc3ODA3MDA0OCwidHlwZSI6ImFjY2Vzc190b2tlbiIsImlhdCI6MTc3ODA2OTI2MSwiYXVkIjoiQXBwbGljYXRpb24iLCJpc3MiOiJUSEFUU0VORCJ9.kr2w7sFK3PAgEO9cjd9zWBZwf6uhVOQvHUHogtIPR7z1pVCTk6IhA9vp-lyOvQxmq7mLzrAjRKd_q3Wp6vw750E0wFRjcws2xyLVtxm2Y1AJeMpeSpNEtfjgvoOxw7aSis3ZAYgMSfUlkmgWnjOEbmyweoGyWJ0yIDFJce_Q2_UHyLH6H6Zf354JVyTZ7KbBs-aiwLHubL2Me1pkOEHdDYNYy7MfLHPuoFdacaiOoeVlwj0RKPRg6390M-pNQbIw-q2qlEGnucGM688SPLvb1FwTiOCVOth55c4-dJ1sylHq7_6ENfAuFIDJaaYxc11wjj6yoJ_dS_qQ2SELnupdSA",
    },
    selection: {
      snapshot: {
        message: true,
        result: true,
        success: true,
      },
      stamp: true,
      next_step: true,
      previous_step: true,
      ref_id: true,
      ref_value: true,
      available_mfao: true,
      selected_mfao: true,
      authenticated: {
        user: {
          id: true,
        },
      },
    },
  });

  return result;
}

async appGenerateTwoFAQR() {
  const result = await api.graphql.userAuthentication.generateTwoFAQrCode({
    input: {
      arole_id: 5,
      un_pe_pm: "7098675643",
    },
    selection: {
      snapshot: {
        message: true,
      },
      recovery_code: true,
      qrcode_dataurl: true,
    },
  });

  return result;
}

async appVerifyTwoFAQR() {
  const result = await api.graphql.userAuthentication.verifyTwoFAQrCode({
    input: {
      arole_id: 5,
      otp_token: "708448",
      un_pe_pm: "7098675643",
    },
    selection: {
      snapshot: {
        message: true,
        result: true,
        info: true,
      },
    },
  });

  return result;
}

async appRegenerateTwoFARecoveryCode() {
  const result = await api.graphql.userAuthentication.regenrateTwoFARecoveryCode({
    input: {
      arole_id: 5,
      un_pe_pm: "7098675643",
    },
    selection: {
      snapshot: {
        message: true,
      },
      recovery_code: true,
    },
  });

  return result;
}

async appVerifyTwoFARecoveryCode() {
  const result = await api.graphql.userAuthentication.verifyTwoFARecoveryCode({
    input: {
      arole_id: 5,
      otp_token: "9919912d6d73468f0a4b",
      un_pe_pm: "7098675643",
    },
    selection: {
      snapshot: {
        message: true,
        result: true,
        imp: true,
        mismatch: true,
        notFound: true,
        conflict: true,
        success: true,
        error: true,
        alert: true,
        warning: true,
        notice: true,
        info: true,
      },
      recovery_code: true,
    },
    
  });

  return result;
}

  async useridentityfind() {
    const response = await api.graphql.userIdentityCard.find({
      filter: {
        take: 20,
        skip: 0,
        order: {
          id: RecordSortDirectionEnum.DESC,
        },
      },
      selection: {
        rows: {
          id: true,
          idctype_id: true,
          u_id: true,
          num: true,
          issue_date: true,
          issue_country_id: true,
          issue_state_id: true,
          issue_city_id: true,
          issue_place: true,
          created: true,
          updated: true,
          deleted: true,
          
          fr_identity_card_type: {
            id: true,
            name: true,
          },

          fr_user: {
            id: true,
            fname: true,
            lname: true,
            username: true,
            primary_email: true,
          },

          fr_country: {
            id: true,
            name: true,
          },

          fr_state: {
            id: true,
            name: true,
          },

          fr_city: {
            id: true,
            name: true,
          },
        },
      },
    });
    return response;
  }

  async useridentitycreate() {
    const response = await api.graphql.userIdentityCard.create({
      input: [
        {
          idctype_id: 1,
          u_id: 1,
          num: 'ABC123456',
          issue_date: '2026-05-08',
          issue_country_id: 1,
          issue_state_id: 1,
          issue_city_id: 1,
          issue_place: 'test',
        },
      ],

      selection: {
        id: true,
        idctype_id: true,
        u_id: true,
        num: true,
        issue_date: true,
        issue_country_id: true,
        issue_state_id: true,
        issue_city_id: true,
        issue_place: true,
        created: true,
        updated: true,
        deleted: true,
      },
    });

    return response;
  }

  async find() {
    const find = await api.graphql.userSecurityQuestion.find({
      filter: {
        take: 2,
        skip: 0,
        order: {
          id: RecordSortDirectionEnum.ASC,
        },
      },
      selection: {
        rows: {
          id: true,
          answer: true,
          seqst_id: true,
          u_id: true,
          fr_security_question:{
            id: true,
            question: true,
          },
          fr_user: {
            id: true,
            username: true,
            fname: true,
            lname: true
          }
        }
      }
    });
  }

    async create() {
      const response = await api.graphql.userSecurityQuestion.create({
        input: [
          {
            answer: "test",
            seqst_id: 3,
            u_id: 117
            
          },
        ],

        selection: {
          id: true,
                answer: true,
                seqst_id: true,
                u_id: true,
        },
      });

      return response;
    }

    async findUserProfessionalInfo() {
      const find = await api.graphql.userProfessionalInfo.find({
        filter: {
          order: {
            id: RecordSortDirectionEnum.DESC,
          },
        },
        selection: {
          rows: {
            id: true,
            u_id: true,
            busns_id: true,
            company_name: true,
            contact_person_name: true,
            email: true,
            mobile: true,
            mobile_cc: true,
            website: true,
            address: true,
            city_id: true,
            state_id: true,
            country_id: true,
            postal_zip_code: true,
            file_company_logo: true,
            file_company_logo_url: {
              direct: true,
            },
            registered: true,
            created: true,
            updated: true,
            deleted: true,
            fr_user: {
              id: true,
              fname: true,
              lname: true,
              username: true,
              primary_email: true,
            },
            fr_city: {
              id: true,
              name: true,
            },
            fr_state: {
              id: true,
              name: true,
            },
            fr_country: {
              id: true,
              name: true,
            },
            fr_business: {
              id: true,
              name: true,
            },
            fr_country_phone_code: {
              id: true,
              phone_code: true,
            },
          },
        },
      });
    }
    
    // UserProfessionalInfoCreate
    async createUserProfessionalInfo() {
      const response = await api.graphql.userProfessionalInfo.create({
        input: [
          {
            u_id: 1,
            busns_id: 1,
            company_name: "Test Company",
            contact_person_name: "John Doe",
            email: "john@test.com",
            mobile: "9999999999",
            mobile_cc: "+91",
            website: "https://test.com",
            address: "Test Address",
            city_id: 1,
            state_id: 1,
            country_id: 1,
            postal_zip_code: "380001",
            registered: true,
          },
        ],
    
        selection: {
          id: true,
          u_id: true,
          busns_id: true,
          company_name: true,
          contact_person_name: true,
          email: true,
          mobile: true,
          mobile_cc: true,
          website: true,
          address: true,
          city_id: true,
          state_id: true,
          country_id: true,
          postal_zip_code: true,
          file_company_logo: true,
          file_company_logo_url: {
            direct: true,
          },
          registered: true,
          created: true,
          updated: true,
          deleted: true,
        },
      });
    
      return response;
    }

    async findUserFile() {
  const find = await api.graphql.userFile.find({
    filter: {
      order: {
        id: RecordSortDirectionEnum.DESC,
      },
    },
    selection: {
      rows: {
        id: true,
        u_id: true,
        file: true,
        file_url: {
          direct: true,
        },
        record_position: true,
        created: true,
        updated: true,
        deleted: true,
        fr_user: {
          id: true,
          fname: true,
          lname: true,
          username: true,
          primary_email: true,
        },
      },
    },
  });
}


// UserHierarchyFind
async findUserHierarchy() {
  const find = await api.graphql.userHierarchy.find({
    filter: {
      order: {
        id: RecordSortDirectionEnum.DESC,
      },
    },
    selection: {
      rows: {
        id: true,
        parent_uar_id: true,
        child_uar_id: true,
        created: true,
        updated: true,
        deleted: true,
        fr_parent_user_authorisation: {
          id: true,
          u_id: true,
          arole_id: true,
        },
        fr_child_user_authorisation: {
          id: true,
          u_id: true,
          arole_id: true,
        },
      },
    },
  });
}

// UserHierarchyCreate
async createUserHierarchy() {
  const response = await api.graphql.userHierarchy.create({
    input: [
      {
        parent_uar_id: 1,
        child_uar_id: 2,
      },
    ],

    selection: {
      id: true,
      parent_uar_id: true,
      child_uar_id: true,
      created: true,
      updated: true,
      deleted: true,
    },
  });

  return response;
}

// UserTwofaRecoveryCodeFind
async findUserTwofaRecoveryCode() {
  const find = await api.graphql.userTwofaRecoveryCode.find({
    filter: {
      order: {
        id: RecordSortDirectionEnum.DESC,
      },
    },
    selection: {
      rows: {
        id: true,
        au_id: true,
        code: true,
        created: true,
        updated: true,
        deleted: true,
        fr_user: {
          id: true,
          fname: true,
          lname: true,
          username: true,
          primary_email: true,
        },
      },
    },
  });
}

// UserTwofaRecoveryCodeCreate
async createUserTwofaRecoveryCode() {
  const response = await api.graphql.userTwofaRecoveryCode.create({
    input: [
      {
        au_id: 1,
        code: "ABC123",
      },
    ],

    selection: {
      id: true,
      au_id: true,
      code: true,
      created: true,
      updated: true,
      deleted: true,
    },
  });

  return response;
}


// UserPersonalInfoFind
async findUserPersonalInfo() {
  const find = await api.graphql.userPersonalInfo.find({
    filter: {
      order: {
        id: RecordSortDirectionEnum.DESC,
      },
    },
    selection: {
      rows: {
        id: true,
        dob: true,
        gender: true,
        height: true,
        weight: true,
        blood_group: true,
        drivers_licence_num: true,
        about_me: true,
        email_sign: true,
        website_url: true,
        facebook_profile: true,
        instagram_profile: true,
        youtube_profile: true,
        x_profile: true,
        linkedin_profile: true,
        tiktok_profile: true,
        pinterest_profile: true,
        created: true,
        updated: true,
        deleted: true,
        fr_user: {
          id: true,
          fname: true,
          lname: true,
          username: true,
          primary_email: true,
        },
      },
    },
  });
}


// UserPersonalInfoCreate
async createUserPersonalInfo() {
  const response = await api.graphql.userPersonalInfo.create({
    input: [
      {
        id : 1,
        dob: "1995-01-01",
        gender: GenderEnum.MALE,
        height: "180",
        weight: 75,
        blood_group: "B+",
        drivers_licence_num: "DL123456",
        about_me: "Test About Me",
        email_sign: "Best Regards",
        website_url: "https://test.com",
        facebook_profile: "fb-link",
        instagram_profile: "insta-link",
        youtube_profile: "yt-link",
        x_profile: "x-link",
        linkedin_profile: "linkedin-link",
        tiktok_profile: "tiktok-link",
        pinterest_profile: "pinterest-link",
      },
    ],

    selection: {
      id: true,
      dob: true,
      gender: true,
      height: true,
      weight: true,
      blood_group: true,
      drivers_licence_num: true,
      about_me: true,
      email_sign: true,
      website_url: true,
      facebook_profile: true,
      instagram_profile: true,
      youtube_profile: true,
      x_profile: true,
      linkedin_profile: true,
      tiktok_profile: true,
      pinterest_profile: true,
      created: true,
      updated: true,
      deleted: true,
    },
  });

  return response;
}

// UserFavCategoryFind
async findUserFavCategory() {
  const find = await api.graphql.userFavCategory.find({
    filter: {
      order: {
        id: RecordSortDirectionEnum.DESC,
      },
    },
    selection: {
      rows: {
        id: true,
        title: true,
        desc: true,
        active: true,
        created: true,
        updated: true,
        deleted: true,
        fr_user_favourites: {
          id: true,
        },
      },
    },
  });
}

// UserFavCategoryCreate
async createUserFavCategory() {
  const response = await api.graphql.userFavCategory.create({
    input: [
      {
        title: "Test Category",
        desc: "Test Description",
        active: true,
      },
    ],

    selection: {
      id: true,
      title: true,
      desc: true,
      active: true,
      created: true,
      updated: true,
      deleted: true,
    },
  });

  return response;
}


// UserFavFind
async findUserFav() {
  const find = await api.graphql.userFav.find({
    filter: {
      order: {
        id: RecordSortDirectionEnum.DESC,
      },
    },
    selection: {
      rows: {
        id: true,
        favcat_id: true,
        ref_id: true,
        notes: true,
        created_uar_id: true,
        created: true,
        updated: true,
        deleted: true,
        fr_user_fav_categories: {
          id: true,
          title: true,
        },
        fr_created_user_authorisation: {
          arole_id: true,
          u_id: true,
          id: true,
        },
      },
    },
  });
}

// UserFavCreate
async createUserFav() {
  const response = await api.graphql.userFav.create({
    input: [
      {
        favcat_id: 1,
        ref_id: "10",
        notes: "Test favourite",
        created_uar_id: 1,
      },
    ],

    selection: {
      id: true,
      favcat_id: true,
      ref_id: true,
      notes: true,
      created_uar_id: true,
      created: true,
      updated: true,
      deleted: true,
    },
  });

  return response;
}

  async findBusinessBranch() {
    const find = await api.graphql.businessBranch.find({
      filter: {
        order: {
          id: RecordSortDirectionEnum.DESC,
        },
      },
      selection: {
        rows: {
          id: true,
          busns_id: true,
          owner_u_id: true,
          name: true,
          address: true,
          country_id: true,
          state_id: true,
          city_id: true,
          zipcode: true,
          location_latitude: true,
          location_longitude: true,
          toll_free_number: true,
          mobile: true,
          mobile_cc: true,
          whatsapp: true,
          whatsapp_cc: true,
          email: true,
          fax: true,
          created: true,
          updated: true,
          deleted: true,
          fr_business: {
            id: true,
            name: true,
          },
          fr_owner_user: {
            id: true,
            fname: true,
            lname: true,
            username: true,
            primary_email: true,
          },
          fr_country: {
            id: true,
            name: true,
          },
          fr_state: {
            id: true,
            name: true,
          },
          fr_city: {
            id: true,
            name: true,
          },
          fr_mobile_country_phone_code: {
            id: true,
            phone_code: true,
          },
          fr_whatsapp_country_phone_code: {
            id: true,
            phone_code: true,
          },
          fr_business_users: {
            id: true,
            about: true,
            active: true,
          },
          fr_business_departments: {
            id: true,
            name: true,
          },
          fr_business_infos: {
            id: true,
            about: true,
          },
        },
      },
    });
  }

  async createBusinessBranch() {
  const response = await api.graphql.businessBranch.create({
    input: [
      {
        busns_id: 1,
        owner_u_id: 1,
        name: "Main Branch",
        address: "123 Business Street",
        country_id: 1,
        state_id: 1,
        city_id: 1,
        zipcode: "380001",
        location_latitude: 23.0225,
        location_longitude: 72.5714,
        toll_free_number: "1800123456",
        mobile: "9876543210",
        mobile_cc: "91",
        whatsapp: "9876543210",
        whatsapp_cc: "91",
        email: "branch@example.com",
        fax: "123456",

        created: new Date().toISOString(),
        updated: new Date().toISOString(),
      },
    ],

    selection: {
      id: true,
      busns_id: true,
      owner_u_id: true,
      name: true,
      address: true,
      country_id: true,
      state_id: true,
      city_id: true,
      zipcode: true,
      location_latitude: true,
      location_longitude: true,
      toll_free_number: true,
      mobile: true,
      mobile_cc: true,
      whatsapp: true,
      whatsapp_cc: true,
      email: true,
      fax: true,
      created: true,
      updated: true,
      deleted: true,
    },
  });

  return response;
}


  async findBusiness() {
    const find = await api.graphql.business.find({
      filter: {
        order: {
          id: RecordSortDirectionEnum.DESC,
        },
      },
      selection: {
        rows: {
          id: true,
          connsrc_id: true,
          owner_u_id: true,
          file_brand_logo: true,
          buspricat_id: true,
          busseccat_id_1: true,
          busseccat_id_2: true,
          busseccat_id_3: true,
          busseccat_id_4: true,
          busseccat_id_5: true,
          busseccat_id_6: true,
          busseccat_id_7: true,
          busseccat_id_8: true,
          busseccat_id_9: true,
          name: true,
          address: true,
          country_id: true,
          state_id: true,
          city_id: true,
          zipcode: true,
          location_latitude: true,
          location_longitude: true,
          toll_free_number: true,
          mobile: true,
          mobile_cc: true,
          whatsapp: true,
          whatsapp_cc: true,
          email: true,
          fax: true,
          website_url: true,
          facebook_profile: true,
          instagram_profile: true,
          youtube_profile: true,
          x_profile: true,
          linkedin_profile: true,
          tiktok_profile: true,
          pinterest_profile: true,
          google_my_business_url: true,
          google_map_url: true,
          google_review_url: true,
          registered: true,
          initial_findings: true,
          competitor_findings: true,
          import_batch: true,
          import_unique_id: true,
          import_note: true,
          created: true,
          updated: true,
          deleted: true,
          fr_connection_source: {
            id: true,
            title: true,
          },
          fr_owner_user: {
            id: true,
            fname: true,
            lname: true,
            username: true,
            primary_email: true,
          },
          fr_business_primary_category: {
            id: true,
            title: true,
          },
          fr_business_secondary_category1: {
            id: true,
            title: true,
          },
          fr_business_secondary_category2: {
            id: true,
            title: true,
          },
          fr_business_secondary_category3: {
            id: true,
            title: true,
          },
          fr_business_secondary_category4: {
            id: true,
            title: true,
          },
          fr_business_secondary_category5: {
            id: true,
            title: true,
          },
          fr_business_secondary_category6: {
            id: true,
            title: true,
          },
          fr_business_secondary_category7: {
            id: true,
            title: true,
          },
          fr_business_secondary_category8: {
            id: true,
            title: true,
          },
          fr_business_secondary_category9: {
            id: true,
            title: true,
          },
          fr_country: {
            id: true,
            name: true,
          },
          fr_state: {
            id: true,
            name: true,
          },
          fr_city: {
            id: true,
            name: true,
          },
          fr_business_sales_regions: {
            id: true,
            name: true,
          },
          fr_business_sales_areas: {
            id: true,
            area_name: true,
          },
          fr_business_users: {
            id: true,
            about: true,
          },
          fr_business_departments: {
            id: true,
            name: true,
          },
          fr_user_professional_infos: {
            id: true,
            address: true,
          },
          fr_business_reviews: {
            id: true,
            busns_id: true,
          },
          fr_business_infos: {
            id: true,
            about: true,
          },
          fr_business_branches: {
            id: true,
            name: true,
          },
          fr_leads: {
            id: true,
            subject: true,
          },
          fr_mobile_country_phone_code: {
            id: true,
            phone_code: true,
          },
          fr_whatsapp_country_phone_code: {
            id: true,
            phone_code: true,
          },
        },
      },
    });
  }

  async createBusiness() {
  const response = await api.graphql.business.create({
    input: [
      {
        connsrc_id: 1,
        owner_u_id: 1,
        file_brand_logo: "logo.png",
        buspricat_id: 1,
        busseccat_id_1: 1,
        name: "Test Business",
        address: "Business Address",
        country_id: 1,
        state_id: 1,
        city_id: 1,
        zipcode: "380001",
        location_latitude: 23.0225,
        location_longitude: 72.5714,
        toll_free_number: "1800123456",
        mobile: "9876543210",
        mobile_cc: "91",
        whatsapp: "9876543210",
        whatsapp_cc: "91",
        email: "business@example.com",
        fax: "123456",
        website_url: "https://example.com",
        facebook_profile: "https://facebook.com/example",
        instagram_profile: "https://instagram.com/example",
        youtube_profile: "https://youtube.com/example",
        x_profile: "https://x.com/example",
        linkedin_profile: "https://linkedin.com/company/example",
        tiktok_profile: "https://tiktok.com/@example",
        pinterest_profile: "https://pinterest.com/example",
        google_my_business_url: "https://g.page/example",
        google_map_url: "https://maps.google.com/example",
        google_review_url: "https://google.com/reviews/example",
        registered: true,
        initial_findings: "Initial findings",
        competitor_findings: "Competitor findings",
        import_batch: "batch-1",
        import_unique_id: "unique-1",
        import_note: "Import note",
      },
    ],

    selection: {
      id: true,
      connsrc_id: true,
      owner_u_id: true,
      file_brand_logo: true,
      name: true,
      address: true,
      email: true,
      mobile: true,
      website_url: true,
      created: true,
      updated: true,
      deleted: true,
    },
  });

  return response;
}

  async findBusinessInfo() {
    const find = await api.graphql.businessInfo.find({
      filter: {
        order: {
          id: RecordSortDirectionEnum.DESC,
        },
      },
      selection: {
        rows: {
          id: true,
          busns_id: true,
          busbran_id: true,
          about: true,
          monday_hours: true,
          tuesday_hours: true,
          wednesday_hours: true,
          thursday_hours: true,
          friday_hours: true,
          saturday_hours: true,
          sunday_hours: true,
          created: true,
          updated: true,
          deleted: true,
          fr_business: {
            id: true,
            address: true,
          },
          fr_business_branch: {
            id: true,
            address: true,
            busns_id: true,
          },
        },
      },
    });
  }

  async createBusinessInfo() {
  const response = await api.graphql.businessInfo.create({
    input: [
      {
        busns_id: 3,
        busbran_id: 2,
        about: "Business information",
        monday_hours: "09:00-18:00",
        tuesday_hours: "09:00-18:00",
        wednesday_hours: "09:00-18:00",
        thursday_hours: "09:00-18:00",
        friday_hours: "09:00-18:00",
        saturday_hours: "10:00-16:00",
        sunday_hours: "Closed",
      },
    ],

    selection: {
      id: true,
      busns_id: true,
      busbran_id: true,
      about: true,
      monday_hours: true,
      tuesday_hours: true,
      wednesday_hours: true,
      thursday_hours: true,
      friday_hours: true,
      saturday_hours: true,
      sunday_hours: true,
      created: true,
      updated: true,
      deleted: true,
    },
  });

  return response;
}

async findBusinessDepartment() {
    const find = await api.graphql.businessDepartment.find({
      filter: {
        order: {
          id: RecordSortDirectionEnum.DESC,
        },
      },
      selection: {
        rows: {
          id: true,
          busns_id: true,
          busbran_id: true,
          name: true,
          abbreviation: true,
          created: true,
          updated: true,
          deleted: true,
          fr_business: {
            id: true,
            address: true,
          },
          fr_business_branch: {
            id: true,
            address: true,
          },
          fr_business_users: {
            id: true,
            about: true,
          },
        },
      },
    });
  }

  async createBusinessDepartment() {
  const response = await api.graphql.businessDepartment.create({
    input: [
      {
        busns_id: 1,
        busbran_id: 1,
        name: "Sales",
        abbreviation: "SAL",
      },
    ],

    selection: {
      id: true,
      busns_id: true,
      busbran_id: true,
      name: true,
      abbreviation: true,
      created: true,
      updated: true,
      deleted: true,
    },
  });

  return response;
}

async createBusinessPrimaryCategory() {
  const response = await api.graphql.businessPrimaryCategory.create({
    input: [
      {
        title: "Technology",
        desc: "Technology category",
        active: true,
      },
    ],

    selection: {
      id: true,
      title: true,
      desc: true,
      active: true,
      created: true,
      updated: true,
      deleted: true,
    },
  });

  return response;
}

  async findBusinessPrimaryCategory() {
    const find = await api.graphql.businessPrimaryCategory.find({
      filter: {
        order: {
          id: RecordSortDirectionEnum.DESC,
        },
      },
      selection: {
        rows: {
          id: true,
          title: true,
          desc: true,
          active: true,
          created: true,
          updated: true,
          deleted: true,
          fr_business_secondary_categories: {
            id: true,
            title: true,
          },
          fr_businesses: {
            id: true,
            address: true,
          },
        },
      },
    });
  }

  async createBusinessReview() {
    const response = await api.graphql.businessReview.create({
      input: [
        {
          busns_id: 1,
          uar_id: 1,
          tppltf_id: 1,
          profile_url: "https://google.com/review",
          rating: "5",
          feedback: "Excellent service",
          pltf_u_id: "platform-user-1",
        },
      ],
  
      selection: {
        id: true,
        busns_id: true,
        uar_id: true,
        tppltf_id: true,
        profile_url: true,
        rating: true,
        feedback: true,
        pltf_u_id: true,
        created: true,
        updated: true,
        deleted: true,
      },
    });
  
    return response;
  }
    async findBusinessReview() {
      const find = await api.graphql.businessReview.find({
        filter: {
          order: {
            id: RecordSortDirectionEnum.DESC,
          },
        },
        selection: {
          rows: {
            id: true,
            busns_id: true,
            uar_id: true,
            tppltf_id: true,
            profile_url: true,
            rating: true,
            feedback: true,
            pltf_u_id: true,
            created: true,
            updated: true,
            deleted: true,
            fr_business: {
              id: true,
              address: true,
            },
            fr_user_authorisation: {
              id: true,
              u_id: true,
              arole_id: true,
            },
            fr_third_party_platform: {
              id: true,
              name: true,
            },
          },
        },
      });
    }

      async findBusinessSalesArea() {
        const find = await api.graphql.businessSalesArea.find({
          filter: {
            order: {
              id: RecordSortDirectionEnum.DESC,
            },
          },
          selection: {
            rows: {
              id: true,
              busns_id: true,
              bsalreg_id: true,
              city_id: true,
              area_name: true,
              created: true,
              updated: true,
              deleted: true,
              fr_business: {
                id: true,
                address: true,
              },
              fr_business_sales_region: {
                id: true,
                name: true,
              },
              fr_city: {
                id: true,
                name: true,
              },
              fr_business_user_sales_locations: {
                id: true,
                bu_id: true,
                bsalar_id: true,
                bsalreg_id: true,
              },
            },
          },
        });
      }
    
      async createBusinessSalesArea() {
      const response = await api.graphql.businessSalesArea.create({
        input: [
          {
            busns_id: 1,
            bsalreg_id: 1,
            city_id: 1,
            area_name: "North Zone",
          },
        ],
    
        selection: {
          id: true,
          busns_id: true,
          bsalreg_id: true,
          city_id: true,
          area_name: true,
          created: true,
          updated: true,
          deleted: true,
        },
      });
    
      return response;
    }

      async findBusinessSalesRegion() {
        const find = await api.graphql.businessSalesRegion.find({
          filter: {
            order: {
              id: RecordSortDirectionEnum.DESC,
            },
          },
          selection: {
            rows: {
              id: true,
              busns_id: true,
              name: true,
              created: true,
              updated: true,
              deleted: true,
              fr_business: {
                id: true,
                address: true,
              },
              fr_business_sales_areas: {
                id: true,
                area_name: true,
              },
              fr_business_user_sales_locations: {
                id: true,
                bu_id: true,
                bsalar_id: true,
                bsalreg_id: true,
              },
            },
          },
        });
      }
    
      async createBusinessSalesRegion() {
        const response = await api.graphql.businessSalesRegion.create({
          input: [
            {
              busns_id: 1,
              name: "Gujarat Region",
            },
          ],
    
          selection: {
            id: true,
            busns_id: true,
            name: true,
            created: true,
            updated: true,
            deleted: true,
          },
        });
    
        return response;
      }
      async findBusinessSecondaryCategory() {
        const find = await api.graphql.businessSecondaryCategory.find({
          filter: {
            order: {
              id: RecordSortDirectionEnum.ASC,
            },
          },
          selection: {
            rows: {
              id: true,
              buspricat_id: true,
              title: true,
              desc: true,
              active: true,
              created: true,
              updated: true,
              deleted: true,
              fr_business_primary_category: {
                id: true,
                title: true,
              },
              fr_businesses1: {
                id: true,
                address: true,
              },
              fr_businesses2: {
                id: true,
                address: true,
              },
              fr_businesses3: {
                id: true,
                address: true,
              },
              fr_businesses4: {
                id: true,
                address: true,
              },
              fr_businesses5: {
                id: true,
                address: true,
              },
              fr_businesses6: {
                id: true,
                address: true,
              },
              fr_businesses7: {
                id: true,
                address: true,
              },
              fr_businesses8: {
                id: true,
                address: true,
              },
              fr_businesses9: {
                id: true,
                address: true,
              },
            },
          },
        });
      }
    
      async createBusinessSecondaryCategory() {
      const response = await api.graphql.businessSecondaryCategory.create({
        input: [
          {
            buspricat_id: 1,
            title: "Software",
            desc: "Software services",
            active: true,
          },
        ],
    
        selection: {
          id: true,
          buspricat_id: true,
          title: true,
          desc: true,
          active: true,
          created: true,
          updated: true,
          deleted: true,
        },
      });
    
      return response;
    }

      async findBusinessUser() {
        const find = await api.graphql.businessUser.find({
          filter: {
            order: {
              id: RecordSortDirectionEnum.DESC,
            },
          },
          selection: {
            rows: {
              id: true,
              busns_id: true,
              busbran_id: true,
              busdep_id: true,
              uar_id: true,
              jtitle_id: true,
              parent_uar_id: true,
              about: true,
              active: true,
              created: true,
              updated: true,
              deleted: true,
              fr_business_user_sales_locations: {
                id: true,
              },
              fr_business: {
                id: true,
                address: true,
              },
              fr_business_branch: {
                id: true,
              },
              fr_business_department: {
                id: true,
              },
              fr_user_authorisation: {
                id: true,
              },
              fr_job_title: {
                id: true,
                name: true,
              },
              fr_parent_user_authorisation: {
                id: true,
              },
            },
          },
        });
      }
    
      async createBusinessUser() {
        const response = await api.graphql.businessUser.create({
          input: [
            {
              busns_id: 1,
              busbran_id: 1,
              busdep_id: 1,
              uar_id: 1,
              jtitle_id: 1,
              parent_uar_id: 1,
              about: "Business user info",
              
            },
          ],
    
          selection: {
            id: true,
            busns_id: true,
            busbran_id: true,
            busdep_id: true,
            uar_id: true,
            jtitle_id: true,
            parent_uar_id: true,
            about: true,
            active: true,
            created: true,
            updated: true,
            deleted: true,
          },
        });
    
        return response;
      }

      async createConnectionSourceCategories() {
        const response = await api.graphql.connectionSourceCategories.create({
          input: [
            {
              title: "Digital Marketing",
              desc: "Category description",
              active: true,
            },
          ],
    
          selection: {
            id: true,
            title: true,
            desc: true,
            active: true,
            created: true,
            updated: true,
            deleted: true,
          },
        });
    
        return response;
      }
    
        async findConnectionSourceCategories() {
        const find = await api.graphql.connectionSourceCategories.find({
          filter: {
            order: {
              id: RecordSortDirectionEnum.DESC,
            },
          },
          selection: {
            rows: {
              id: true,
              title: true,
              desc: true,
              active: true,
              created: true,
              updated: true,
              deleted: true,
              fr_connection_sources: {
                id: true,
                title: true,
              },
            },
          },
        });
      }

      async createConnectionSource() {
        const response = await api.graphql.connectionSource.create({
          input: [
            {
              connsrccat_id: 18,
              title: "Website Reference",
              desc: "Connection source description",
            },
          ],
    
          selection: {
            id: true,
            connsrccat_id: true,
            title: true,
            desc: true,
            created: true,
            updated: true,
            deleted: true,
            fr_connection_source_category: {
              id: true,
              title: true,
            },
          },
        });
    
        return response;
      }

      async findConnectionSource() {
        const find = await api.graphql.connectionSource.find({
          filter: {
            order: {
              id: RecordSortDirectionEnum.DESC,
            },
            where: {
              id: {
                equal: "1"
              },
            },
          },
          selection: {
            rows: {
              id: true,
              connsrccat_id: true,
              title: true,
              desc: true,
              created: true,
              updated: true,
              deleted: true,
              fr_connection_source_category: {
                id: true,
                title: true,
              },
              fr_users: {
                id: true,
                fname: true,
                lname: true,
                primary_email: true,
              },
              fr_businesses: {
                id: true,
                address: true,
              },
            },
          },
        });
      }

      async createLeadFollowupStatus() {
          const response = await api.graphql.leadFollowupStatus.create({
            input: [
              {
                title: "Interested",
                desc: "Customer is interested",
              },
            ],
      
            selection: {
              id: true,
              title: true,
              desc: true,
              created: true,
              updated: true,
              deleted: true,
            },
          });
      
          return response;
      }


        
      
        async findLeadFollowupStatus() {
          const find = await api.graphql.leadFollowupStatus.find({
            filter: {
              order: {
                id: RecordSortDirectionEnum.DESC,
              },
            },
            selection: {
              rows: {
                id: true,
                title: true,
                desc: true,
                created: true,
                updated: true,
                deleted: true,
                fr_lead_followups: {
                  id: true,
                  lead_id: true,
                },
              },
            },
          });
        }
      
        async createLeadFollowup() {
        const response = await api.graphql.leadFollowup.create({
          input: [
            {
              lead_id: 1,
              uar_id: 1,
              leadpot_id: 1,
              leadfst_id: 13,
              leadfupvia_id: 1,
              note: "Followed up with customer",
              competitor_note: "Customer comparing competitors",
              next_followup: new Date().toISOString(),
            },
          ],
      
          selection: {
            id: true,
            lead_id: true,
            uar_id: true,
            leadpot_id: true,
            leadfst_id: true,
            leadfupvia_id: true,
            note: true,
            competitor_note: true,
            next_followup: true,
            created: true,
            updated: true,
            deleted: true,
            fr_leads: {
              id: true,
              comment: true,
            },
            fr_user_authorisation: {
              id: true,
              arole_id: true,
              u_id: true,
            },
            fr_lead_followup_status: {
              id: true,
              title: true,
            },
            fr_lead_followup_via: {
              id: true,
              title: true,
            },
            fr_lead_potential: {
              id: true,
              title: true,
            },
          },
        });
      
        return response;
      }
      
      
      async findLeadFollowup() {
        const find = await api.graphql.leadFollowup.find({
          filter: {
            order: {
              id: RecordSortDirectionEnum.DESC,
            },
          },
          selection: {
            rows: {
              id: true,
              lead_id: true,
              uar_id: true,
              leadpot_id: true,
              leadfst_id: true,
              leadfupvia_id: true,
              note: true,
              competitor_note: true,
              next_followup: true,
              created: true,
              updated: true,
              deleted: true,
              fr_leads: {
                id: true,
                comment: true,
              },
              fr_user_authorisation: {
                id: true,
                arole_id: true,
                u_id: true,
              },
              fr_lead_followup_status: {
                id: true,
                title: true,
              },
              fr_lead_followup_via: {
                id: true,
                title: true,
              },
              fr_lead_potential: {
                id: true,
                title: true,
              },
            },
          },
        });
      }

        async createLead() {
        const response = await api.graphql.lead.create({
          input: [
            {
              from_busns_id: 1,
              from_uar_id: 1,
              to_uar_id: 2,
              ref_id: "1001",
              ref_type: "business",
              concern_issue: "Need product demo",
              preferred_contact_method: "email",
              subject: "Product Inquiry",
              comment: "Lead generated from website",
              initial_findings: "Potential high-value customer",
              first_incoming_message_dt: new Date().toISOString(),
            },
          ],
      
          selection: {
            id: true,
            from_busns_id: true,
            from_uar_id: true,
            to_uar_id: true,
            ref_id: true,
            ref_type: true,
            concern_issue: true,
            preferred_contact_method: true,
            subject: true,
            comment: true,
            initial_findings: true,
            first_incoming_message_dt: true,
            created: true,
            updated: true,
            deleted: true,
            fr_business: {
              id: true,
              address: true,
            },
            fr_from_user_authorisation: {
              id: true,
              arole_id: true,
              u_id: true,
            },
            fr_to_user_authorisation: {
              id: true,
              arole_id: true,
              u_id: true,
            },
            fr_lead_followups: {
              id: true,
              lead_id: true,
            },
          },
        });
      
        return response;
      }
      
      async findLead() {
        const find = await api.graphql.lead.find({
          filter: {
            order: {
              id: RecordSortDirectionEnum.DESC,
            },
          },
          selection: {
            rows: {
              id: true,
              from_busns_id: true,
              from_uar_id: true,
              to_uar_id: true,
              ref_id: true,
              ref_type: true,
              concern_issue: true,
              preferred_contact_method: true,
              subject: true,
              comment: true,
              initial_findings: true,
              first_incoming_message_dt: true,
              created: true,
              updated: true,
              deleted: true,
              fr_business: {
                id: true,
                address: true,
              },
              fr_from_user_authorisation: {
                id: true,
                arole_id: true,
                u_id: true,
              },
              fr_to_user_authorisation: {
                id: true,
                arole_id: true,
                u_id: true,
              },
              fr_lead_followups: {
                id: true,
                lead_id: true,
              },
            },
          },
        });
      }

      async createLeadPotential() {
        const response = await api.graphql.leadPotential.create({
          input: [
            {
              title: "High Potential",
              desc: "Likely to convert",
            },
          ],
      
          selection: {
            id: true,
            title: true,
            desc: true,
            created: true,
            updated: true,
            deleted: true,
          },
        });
      
        return response;
      }
      
      async findLeadPotential() {
        const find = await api.graphql.leadPotential.find({
          filter: {
            order: {
              id: RecordSortDirectionEnum.DESC,
            },
          },
          selection: {
            rows: {
              id: true,
              title: true,
              desc: true,
              created: true,
              updated: true,
              deleted: true,
              fr_lead_followups: {
                id: true,
                lead_id: true,
              },
            },
          },
        });
      }

      async createLeadFollowupVia() {
  const response = await api.graphql.leadFollowupVia.create({
    input: [
      {
        title: "Phone Call",
        desc: "Follow-up through phone",
        active: true,
      },
    ],

    selection: {
      id: true,
      title: true,
      desc: true,
      active: true,
      created: true,
      updated: true,
      deleted: true,
    },
  });

  return response;
}

async findLeadFollowupVia() {
    const find = await api.graphql.leadFollowupVia.find({
      filter: {
        order: {
          id: RecordSortDirectionEnum.DESC,
        },
      },
      selection: {
        rows: {
          id: true,
          title: true,
          desc: true,
          active: true,
          created: true,
          updated: true,
          deleted: true,
          fr_lead_followups: {
            id: true,
            lead_id: true,
          },
        },
      },
    });
  }

  async createSettingType() {
  const response = await api.graphql.settingType.create({
    input: [
      {
        title: "User Setting",
        for_table: "users",
        for_table_field: "id",
      },
    ],

    selection: {
      id: true,
      title: true,
      for_table: true,
      for_table_field: true,
      created: true,
      updated: true,
      deleted: true,
    },
  });

  return response;
}

  async findSettingType() {
  const find = await api.graphql.settingType.find({
    filter: {
      order: {
        id: RecordSortDirectionEnum.DESC,
      },
    },
    selection: {
      rows: {
        id: true,
        title: true,
        for_table: true,
        for_table_field: true,
        created: true,
        updated: true,
        deleted: true,
        fr_setting_preferences: {
          id: true
        },
        fr_settings: {
          id: true
        },
      },
    },
  });

  return find;
}

async createNewsLetterCategory() {
  const response = await api.graphql.newsLetterCategory.create({
    input: [
      {
        title: "Marketing Updates",
        desc: "Newsletter category for marketing",
        active: true,
      },
    ],

    selection: {
      id: true,
      title: true,
      desc: true,
      active: true,
      created: true,
      updated: true,
      deleted: true,
    },
  });

  return response;
}

  async findNewsLetterCategory() {
  const find = await api.graphql.newsLetterCategory.find({
    filter: {
      order: {
        id: RecordSortDirectionEnum.DESC,
      },
    },

    selection: {
      rows: {
        id: true,
        title: true,
        desc: true,
        active: true,
        created: true,
        updated: true,
        deleted: true,

        fr_newsletters: {
          id: true,
          content: true,
          title: true,
          subject: true,
        },

        fr_user_newsletter_subscriptions: {
          id: true,
          nlcat_id: true,
          uar_id: true,
        },
      },
    },
  });

  return find;
}


async createNewsLetter() {
  const response = await api.graphql.newsLetter.create({
    input: [
      {
        etmpl_id: 1,
        nlcat_id: 1,
        tppltf_id: 1,
        title: "Weekly Newsletter",
        subject: "Weekly Updates",
        content: "Newsletter content",
        use_default: YesNoEnum.YES,
        created_uar_id: 1,
      },
    ],

    selection: {
      id: true,
      etmpl_id: true,
      nlcat_id: true,
      tppltf_id: true,
      title: true,
      subject: true,
      content: true,
      use_default: true,
      created_uar_id: true,
      active: true,
      created: true,
      updated: true,
      deleted: true,
    },
  });

  return response;
}

async findNewsLetter() {
  const find = await api.graphql.newsLetter.find({
    filter: {
      order: {
        id: RecordSortDirectionEnum.DESC,
      },
    },

    selection: {
      rows: {
        id: true,
        etmpl_id: true,
        nlcat_id: true,
        tppltf_id: true,
        title: true,
        subject: true,
        content: true,
        use_default: true,
        created_uar_id: true,
        active: true,
        created: true,
        updated: true,
        deleted: true,

        fr_email_template: {
          id: true,
          title: true,
        },

        fr_third_party_platform: {
          id: true,
        },

        fr_newsletter_category: {
          id: true,
          title: true,
        },

        fr_create_user_authorisation: {
          id: true,
          arole_id: true,
          u_id: true,
        },

        fr_newsletter_schedules: {
          id: true,
          nl_id: true,
        },

        fr_newsletter_track_logs: {
          id: true,
          bounces: true,
        },

        fr_newsletter_users: {
          id: true,
          nl_id: true,
        },
      },
    },
  });

  return find;
}

async createNewsLetterTrackLog() {
  const response = await api.graphql.newsLetterTrackLog.create({
    input: [
      {
        nl_id: 1,
        nlu_id: 1,
        opens: 1,
        clicks: 1,
        bounces: 1,
        bounce_type: BounceTypeEnum.SOFT,
        bounce_reason: "Mailbox full",
        unsubscribe: 1,
        spam: 1,
        device_id: 1,
        city_id: 1,
        ip: "127.0.0.1",
      },
    ],

    selection: {
      id: true,
      nl_id: true,
      nlu_id: true,
      opens: true,
      clicks: true,
      bounces: true,
      bounce_type: true,
      bounce_reason: true,
      unsubscribe: true,
      spam: true,
      device_id: true,
      city_id: true,
      ip: true,
      created: true,
      updated: true,
      deleted: true,
    },
  });

  return response;
}

async findNewsLetterTrackLog() {
  const find = await api.graphql.newsLetterTrackLog.find({
    filter: {
      order: {
        id: RecordSortDirectionEnum.DESC,
      },
    },

    selection: {
      rows: {
        id: true,
        nl_id: true,
        nlu_id: true,
        opens: true,
        clicks: true,
        bounces: true,
        bounce_type: true,
        bounce_reason: true,
        unsubscribe: true,
        spam: true,
        device_id: true,
        city_id: true,
        ip: true,
        created: true,
        updated: true,
        deleted: true,

        fr_newsletter: {
          id: true,
          title: true,
        },

        fr_newsletter_user: {
          id: true,
          nl_id: true,
        },

        fr_device: {
          id: true,
          name: true,
        },

        fr_city: {
          id: true,
          name: true,
        },
      },
    },
  });

  return find;
}


async findNewsLetterSchedule() {
  const find = await api.graphql.newsLetterSchedule.find({
    filter: {
      order: {
        id: RecordSortDirectionEnum.DESC,
      },
    },

    selection: {
      rows: {
        id: true,
        nl_id: true,
        scheduled: true,
        total_record: true,
        sent_last_rec_no: true,
        completed: true,
        wrkstatus_id: true,
        approval_wrkstatus_id: true,
        created_uar_id: true,
        active: true,
        created: true,
        updated: true,
        deleted: true,

        fr_newsletter: {
          id: true,
          title: true,
        },

        fr_work_status: {
          id: true,
          title: true,
        },

        fr_approval_work_status: {
          id: true,
          title: true,
        },

        fr_create_user_authorisation: {
          id: true,
          arole_id: true,
          u_id: true,
        },

        fr_newsletter_users: {
          id: true,
          nl_id: true,
        },
      },
    },
  });

  return find;
}

async createNewsLetterSchedule() {
  const response = await api.graphql.newsLetterSchedule.create({
    input: [
      {
        nl_id: 1,
        scheduled: new Date().toISOString(),
        total_record: 100,
        sent_last_rec_no: 0,
        completed: false,
        wrkstatus_id: 1,
        approval_wrkstatus_id: 1,
        created_uar_id: 1,
        active: true,
      },
    ],

    selection: {
      id: true,
      nl_id: true,
      scheduled: true,
      total_record: true,
      sent_last_rec_no: true,
      completed: true,
      wrkstatus_id: true,
      approval_wrkstatus_id: true,
      created_uar_id: true,
      active: true,
      created: true,
      updated: true,
      deleted: true,
    },
  });

  return response;
}



async findNewsLetterUser() {
  const find = await api.graphql.newsLetterUser.find({
    filter: {
      order: {
        id: RecordSortDirectionEnum.DESC,
      },
    },

    selection: {
      rows: {
        id: true,
        nl_id: true,
        nlsched_id: true,
        uar_id: true,
        wrkstatus_id: true,
        sent: true,
        sent_error: true,
        created: true,
        updated: true,
        deleted: true,

        fr_newsletter: {
          id: true,
          title: true,
        },

        fr_newsletter_schedule: {
          id: true,
          nl_id: true,
        },

        fr_user_authorisation: {
          id: true,
          arole_id: true,
          u_id: true,
        },

        fr_work_status: {
          id: true,
          title: true,
        },

        fr_newsletter_track_logs: {
          id: true,
          nl_id: true,
        },
      },
    },
  });

  return find;
}

async createNewsLetterUser() {
  const response = await api.graphql.newsLetterUser.create({
    input: [
      {
        nl_id: 1,
        nlsched_id: 1,
        uar_id: 1,
        wrkstatus_id: 1,
        sent: false,
        sent_error: "",
      },
    ],

    selection: {
      id: true,
      nl_id: true,
      nlsched_id: true,
      uar_id: true,
      wrkstatus_id: true,
      sent: true,
      sent_error: true,
      created: true,
      updated: true,
      deleted: true,
    },
  });

  return response;
}

async findUserNewsLetterSubscription() {
  const find = await api.graphql.userNewsLetterSubscription.find({
    filter: {
      order: {
        id: RecordSortDirectionEnum.DESC,
      },
    },

    selection: {
      rows: {
        id: true,
        uar_id: true,
        nlcat_id: true,
        subscribed: true,
        unsubscribed: true,
        created: true,
        updated: true,
        deleted: true,

        fr_user_authorisation: {
          id: true,
          arole_id: true,
          u_id: true,
        },

        fr_newsletter_category: {
          id: true,
          title: true,
        },
      },
    },
  });

  return find;
}

async createUserNewsLetterSubscription() {
  const response = await api.graphql.userNewsLetterSubscription.create({
    input: [
      {
        uar_id: 1,
        nlcat_id: 1,
        subscribed: true,
        unsubscribed: false,
      },
    ],

    selection: {
      id: true,
      uar_id: true,
      nlcat_id: true,
      subscribed: true,
      unsubscribed: true,
      created: true,
      updated: true,
      deleted: true,
    },
  });

  return response;
}





async findSettingCategory() {
  const find = await api.graphql.settingCategory.find({
    filter: {
      order: {
        id: RecordSortDirectionEnum.DESC,
      },
    },

    selection: {
      rows: {
        id: true,
        title: true,
        desc: true,
        created: true,
        updated: true,
        deleted: true,

        fr_settings: {
          id: true,
        },
      },
    },
  });

  return find;
}

async createSettingCategory() {
  const response = await api.graphql.settingCategory.create({
    input: [
      {
        title: "Application Settings",
        desc: "General application settings",
      },
    ],

    selection: {
      id: true,
      title: true,
      desc: true,
      created: true,
      updated: true,
      deleted: true,
    },
  });

  return response;
}

async findSetting() {
  const find = await api.graphql.setting.find({
    filter: {
      order: {
        id: RecordSortDirectionEnum.DESC,
      },
    },

    selection: {
      rows: {
        id: true,
        key: true,
        settty_id: true,
        settc_id: true,
        frmfield_id: true,
        device_id: true,
        sd_id: true,
        sd_name: true,
        default_sdv_id: true,
        default_sdv_key: true,
        default_sdt_key: true,
        default_plain_value: true,
        access_type: true,
        title: true,
        display_title: true,
        guideline: true,
        created: true,
        updated: true,
        deleted: true,

        fr_setting_category: {
          id: true,
          title: true,
        },

        fr_setting_type: {
          id: true,
          title: true,
        },

        fr_form_field: {
          id: true,
          title: true,
        },

        fr_device: {
          id: true,
          name: true,
        },

        fr_static_data: {
          id: true,
        },

        fr_static_data_value: {
          id: true,
        },

        fr_setting_preferences: {
          id: true,
        },
      },
    },
  });

  return find;
}

async createSetting() {
  const response = await api.graphql.setting.create({
    input: [
      {
        key: "app_theme",
        settty_id: 1,
        settc_id: 1,
        frmfield_id: 1,
        device_id: 1,
        sd_id: 1,
        sd_name: "theme_data",
        default_sdv_id: 1,
        default_sdv_key: "dark",
        default_sdt_key: "theme",
        default_plain_value: "dark",
        access_type: AccessTypeEnum.PUBLIC,
        title: "Application Theme",
        display_title: "App Theme",
        guideline: "Select application theme",
      },
    ],

    selection: {
      id: true,
      key: true,
      settty_id: true,
      settc_id: true,
      frmfield_id: true,
      device_id: true,
      sd_id: true,
      sd_name: true,
      default_sdv_id: true,
      default_sdv_key: true,
      default_sdt_key: true,
      default_plain_value: true,
      access_type: true,
      title: true,
      display_title: true,
      guideline: true,
      created: true,
      updated: true,
      deleted: true,
    },
  });

  return response;
}




async findSettingPreference() {
  const find = await api.graphql.settingPreference.find({
    filter: {
      order: {
        id: RecordSortDirectionEnum.DESC,
      },
    },

    selection: {
      rows: {
        id: true,
        settty_id: true,
        record_id: true,
        sett_id: true,
        sett_key: true,
        sd_id: true,
        sd_name: true,
        sdv_id: true,
        sdv_key: true,
        sdt_key: true,
        plain_value: true,
        created: true,
        updated: true,
        deleted: true,

        fr_setting_type: {
          id: true,
          title: true,
        },

        fr_static_data: {
          id: true,
        },

        fr_static_data_value: {
          id: true,
        },

        fr_setting: {
          id: true,
        },
      },
    },
  });

  return find;
}

async createSettingPreference() {
  const response = await api.graphql.settingPreference.create({
    input: [
      {
        settty_id: 1,
        record_id: "1",
        sett_id: 1,
        sett_key: "app_theme",
        sd_id: 1,
        sd_name: "theme_data",
        sdv_id: 1,
        sdv_key: "dark",
        sdt_key: "theme",
        plain_value: "dark",
      },
    ],

    selection: {
      id: true,
      settty_id: true,
      record_id: true,
      sett_id: true,
      sett_key: true,
      sd_id: true,
      sd_name: true,
      sdv_id: true,
      sdv_key: true,
      sdt_key: true,
      plain_value: true,
      created: true,
      updated: true,
      deleted: true,
    },
  });

  return response;
}

async findStaticData() {
  const find = await api.graphql.staticData.find({
    filter: {
      order: {
        id: RecordSortDirectionEnum.DESC,
      },
    },

    selection: {
      rows: {
        id: true,
        name: true,
        desc: true,
        table: true,
        table_field_for_key: true,
        table_field_for_value: true,
        table_field_for_deleted: true,
        created: true,
        updated: true,
        deleted: true,

        fr_static_data_values: {
          id: true,
        },

        fr_setting_preferences: {
          id: true,
        },

        fr_settings: {
          id: true,
        },
      },
    },
  });

  return find;
}


/* 

country foreign key not working
  webpage thirdparty foreign key not working

*/

/* testing pending
  async find() {
      const find = await api.graphql.business.find({
        filter: {
          take: 2,
          skip: 0,
          order: {
            id: RecordSortDirectionEnum.ASC,
          },
        },
        selection: {
          rows: {
            id: true,
            name: true,
            owner_u_id: true,
            registration_number: true,
            tax_number: true,
            fr_business_branches: {
              id: true,
              address: true,
              email: true
            },
            fr_business_departments:{ 
              id:true,
              name:true
            },
            fr_business_reviews:{
              id:true,
            },
            fr_business_sales_areas:{
              id:true,
            },
            fr_business_users: {
              id: true,
            },
            fr_owner_user: {
              id: true,
              fname: true,
              mname: true,
              lname: true,
              username: true,
              primary_email: true
            }
          }
        }
      });
  }



  async create() {
    const create = await api.graphql.business.create({
      input: [{
        name: "test",
        owner_u_id: 1,
        registration_number: "test",
        tax_number: "test",
      }],
      selection: {
        id: true,
        name: true,
        owner_u_id: true,
        registration_number: true,
        tax_number: true,
      }
    });

    return create;
  }
*/

  
  
  /*

      async find() {
      const find = await api.graphql.userAuthentication.find({
        filter: {
          take: 2,
          skip: 0,
          order: {
            id: RecordSortDirectionEnum.ASC,
          },
        },
        selection: {
          rows: {
            id: true,
            otp: true,
            otp_expiry: true,
            twofa_secret: true,
            fr_sessions: {
              id: true,
              auth_id: true
            },
            fr_user:{
              id: true,
              username: true,
              fname: true
            },
            fr_user_authorisations: {
              arole_id: true,
              id: true,
              u_id: true
            }
          }
        }
      });
  }



  async create() {
    const create = await api.graphql.userAuthentication.create({
      input: [{
        id: 101,
        otp: "123456",
        otp_expiry: new Date().toISOString(),
        identify: "Admin@123",
        identify_confirm: "Admin@123",
        twofa_secret: "123456",
      }],
      selection: {
        id: true,
        otp: true,
        otp_expiry: true,
        twofa_secret: true,
        fr_sessions: {
          id: true,
          auth_id: true
        },
        fr_user:{
          id: true,
          username: true,
          fname: true
        },
        fr_user_authorisations: {
          arole_id: true,
          id: true,
          u_id: true
        }
      }
    });

    return create;
  }

    async find() {
      const find = await api.graphql.countryLanguage.find({
        filter: {
          take: 2,
          skip: 0,
          order: {
            id: RecordSortDirectionEnum.ASC,
          },
        },
        selection: {
          rows: {
            country_id: true,
            lang_id: true,
            id: true,
            fr_country: {
              id: true,
              name: true
            },
            fr_language: {
              id: true,
              name: true
            }
          }
        }
      });
  }

  async create() {
    const create = await api.graphql.countryLanguage.create({
      input: [{
        country_id: 1,
        lang_id: 1
      }],
      selection: {
        country_id: true,
        lang_id: true,
        id: true
      }
    });

    return create;
  }


    async find() {
      const find = await api.graphql.countryPhoneCode.find({
        filter: {
          take: 10,
          skip: 0,
          order: {
            id: RecordSortDirectionEnum.ASC,
          },
          where:{
            id: {
              equal: "39"
            }
          }
        },
        selection: {
          rows: {
           country_id: true,
           phone_code: true,
           id: true,
           fr_country: {
             id: true,
             name: true
           },
           fr_from_queue_sms: {
             id: true,
           },
           fr_from_queue_whatsapp: {
             id: true,
           },
           fr_mobile_business_branches: {
             id: true,
             name: true
           },
           fr_mobile_businesses: {
             id: true,
             name: true
           },
           fr_to_queue_sms: {
             id: true,
           },
           fr_to_queue_whatsapp: {
             id: true,
           },
           fr_primary_users: {
             id: true,
             username: true
           },
           fr_recovery_users: {
             id: true,
             username: true
           },
           fr_user_addresses: {
             id: true,
             address: true
           },
           fr_user_professional_infos: {
             id: true,
             name: true
           },
           fr_whatsapp_business_branches: {
             id: true,
             name: true
           },
           fr_whatsapp_businesses: {
             id: true,
             name: true
           },
           fr_whatsapp_users: {
             id: true,
             username: true
          }
         }
        }
      });
  }

  async create() {
    const create = await api.graphql.countryPhoneCode.create({
      input: [{
        country_id: 1,
        phone_code: "91"
      }],
      selection: {
        country_id: true,
        phone_code: true,
        id: true
      }
    });

    return create;
  }


    async find() {
      const find = await api.graphql.countryTimezone.find({
        filter: {
          take: 20,
          skip: 0,
          order: {
            id: RecordSortDirectionEnum.ASC,
          },
        },
        selection: {
          rows: {
           country_id: true,
           id: true,
           tz_id: true,
           fr_country: {
             id: true,
             name: true
           },
           fr_timezone: {
             id: true,
             name: true
           }
          }
        }
      });
  }

  async create() {
    const create = await api.graphql.countryTimezone.create({
      input: [{
        country_id: 1,
        tz_id: 1
      }],
      selection: {
        country_id: true,
        tz_id: true,
        id: true
      }
    });

    return create;
  }


    async find() {
      const find = await api.graphql.language.find({
        filter: {
          take: 2,
          skip: 0,
          order: {
            id: RecordSortDirectionEnum.ASC,
          },
        },
        selection: {
          rows: {
           id: true,
           iso_code: true,
           name: true,
           latitude: true,
           longitude: true,
           macroarea: true,
           fr_country_languagies: {
             id: true,
             country_id: true,
             lang_id: true
           },

          }
        }
      });
  }

  async create() {
    const create = await api.graphql.language.create({
      input: [{
        iso_code: "test",
        name: "test",
        latitude: 1.05445,
        longitude: 4.25877,
        macroarea: "test",
      }],
      selection: {
        id: true,
        iso_code: true,
        name: true,
        latitude: true,
        longitude: true,
        macroarea: true,
      }
    });

    return create;
  }


    async create() {
    const create = await api.graphql.region.create({
      input: [{
        name: "test",
        translations:"test",
      }],
      selection: {
          id: true,
           name: true,
           translations: true,
      }
    });

    return create;
  }

  async create() {
    const create = await api.graphql.subregion.create({
      input: [{
        name: "test",
        translations:"test",
        region_id: 1
      }],
      selection: {
           id: true,
           name: true,
           translations: true,
           region_id: true,
      }
    });

    return create;
  }

  async find() {
      const find = await api.graphql.timezone.find({
        filter: {
          take: 2,
          skip: 0,
          order: {
            id: RecordSortDirectionEnum.ASC,
          },
        },
        selection: {
          rows: {
           id: true,
           name: true,
           abbreviation : true,
           gmt_offset: true,
           timestamp: true,
           dst: true, 
           fr_cities: {
             id: true,
             name: true
           },
           fr_country_timezones: {
             id: true,
             tz_id: true
           }
          }
        }
      });
  }

  async create() {
    const create = await api.graphql.timezone.create({
      input: [{
        name: "test",
        abbreviation: "test",
        gmt_offset: 1,
        timestamp: 1000,
        dst: 1
      }],
      selection: {
           id: true,
           name: true,
           abbreviation : true,
           gmt_offset: true,
           timestamp: true,
           dst: true, 
      }
    });

    return create;
  }

  
  async find() {
      const find = await api.graphql.marketingCampaign.find({
        filter: {
          take: 2,
          skip: 0,
          order: {
            id: RecordSortDirectionEnum.ASC,
          },
        },
        selection: {
          rows: {
           id: true,
           title: true,
           desc:true,
           created: true,
           deleted : true,
           mkcmptyp_id: true,
           start_at: true,
           subject: true,
           updated: true,
           wrkstatus_id: true,
           fr_marketing_campaign_type : {
             id: true,
             title: true
           },
           fr_queue_emails: {
             id: true,
             bcc: true,
           },
           fr_queue_facebook_dm: {
             id: true,
           },
           fr_queue_sms: {
             id: true,
           },
           fr_queue_whatsapp: {
             id: true,
           },
           fr_work_status: {
             id: true,
             title: true
           }
          }
        }
      });
  }

  async create() {
    const create = await api.graphql.marketingCampaign.create({
      input: [{
        title: "test",
        desc: "test",
        mkcmptyp_id: 2,
        start_at: new Date().toISOString(),
        subject: "test",
        wrkstatus_id: 2,
      }],
      selection: {
           id: true,
           title: true,
           desc:true,
           created: true,
           deleted : true,
           mkcmptyp_id: true,
           start_at: true,
           subject: true,
           updated: true,
           wrkstatus_id: true,
      }
    });

    return create;
  }


  async find() {
      const find = await api.graphql.marketingCampaignType.find({
        filter: {
          take: 2,
          skip: 0,
          order: {
            id: RecordSortDirectionEnum.ASC,
          },
        },
        selection: {
          rows: {
            id: true,
            title: true,
            desc: true,
            active: true,
            fr_marketing_campaign: {
              id: true,
              title: true
            }
          }
        }
      });
  }

  async create() {
    const create = await api.graphql.marketingCampaignType.create({
      input: [{
        title: "test developer",
        desc: "test developer",
      }],
      selection: {
          id: true,
          title: true,
          desc: true,
          active: true,
      }
    });

    return create;
  }


      async find() {
      const find = await api.graphql.session.find({
        filter: {
          take: 2,
          skip: 0,
          order: {
            id: RecordSortDirectionEnum.ASC,
          },
        },
        selection: {
          rows: {
            id: true,
            auth_id: true,
            data: true,
            device_id: true,
            jwt: true,
            keep_logged: true,
            logged_in: true,
            uar_id: true,
            fr_device: {
              id: true,
              name: true
            },
            fr_session_metas: {
              id: true,
              ip: true,
            },
            fr_user_auth: {
              id: true,
            },
            fr_user_authorisation: {
              id: true,
              arole_id: true
            }
          }
        }
      });
  }

  async create() {
    const create = await api.graphql.session.create({
      input: [{
        auth_id: 1,
        data: "test",
        device_id: 1,
        jwt: "test",
        keep_logged: YesNoEnum.YES,
        logged_in: YesNoEnum.NO,
        uar_id: 1,
      }],
      selection: {
          id: true,
          auth_id: true,
          data: true,
          device_id: true,
          jwt: true,
          keep_logged: true,
          logged_in: true,
          uar_id: true,
      }
    });

    return create;
  }

  async find() {
      const find = await api.graphql.sessionMeta.find({
        filter: {
          take: 2,
          skip: 0,
          order: {
            id: RecordSortDirectionEnum.ASC,
          },
        },
        selection: {
          rows: {
            id: true,
            fr_session: {
              id: true,
              auth_id: true
            },
           ip: true,
           latitude: true,
           longitude: true,
           sess_id: true,
           tracked: true,
           tracked_latitude: true,
           tracked_longitude: true 
          }
        }
      });
  }

  async create() {
    const create = await api.graphql.sessionMeta.create({
      input: [{
        ip: "1.1.1.1",
        latitude: 0,
        longitude: 0,
        sess_id: 1,
        tracked: "",
        tracked_latitude: 0,
        tracked_longitude: 0
      }],
      selection: {
          id: true,
           ip: true,
           latitude: true,
           longitude: true,
           sess_id: true,
           tracked: true,
           tracked_latitude: true,
           tracked_longitude: true 
      }
    });

    return create;
  }


  async find() {
      const find = await api.graphql.webhookResponse.find({
        filter: {
          take: 2,
          skip: 0,
          order: {
            id: RecordSortDirectionEnum.ASC,
          },
        },
        selection: {
          rows: {
            id: true,
            ref_id: true,
            ref_type: true,
            resp_id: true,
            tppltf_id: true,
            fr_queue_emails: {
              id: true
            },
            fr_queue_facebook_dm:
            {
              id: true
            },
            fr_queue_sms: {
              id: true  
            },
            fr_queue_whatsapp: {
              id: true
            },
            fr_webhook_response_datas: {
              id: true
            },

          },
        }
      });
  }

  async create() {
    const create = await api.graphql.webhookResponse.create({
      input: [{
        ref_id: "1",
        ref_type: "test",
        resp_id: "1",
        tppltf_id: 1,
      }],
      selection: {
          id: true,
          ref_id: true,
          ref_type: true,
          resp_id: true,
          tppltf_id: true,
      }
    });

    return create;
  }

    async find() {
      const find = await api.graphql.webhookResponseData.find({
        filter: {
          take: 5,
          skip: 0,
          order: {
            id: RecordSortDirectionEnum.ASC,
          },
        },
        selection: {
          rows: {
            id: true,
            raw: true,
            whresp_id: true,
            fr_webhook_response: {
              id: true
            }
          },
        }
      });
  }

  async create() {
    const create = await api.graphql.webhookResponseData.create({
      input: [{
        raw: '{"foo": "bar"}',
        whresp_id: 2
      }],
      selection: {
          id: true,
          raw: true,
          whresp_id: true,
      }
    });

    return create;
  }

  async find() {
      const find = await api.graphql.webPageHierarchy.find({
        filter: {
          take: 10,
          skip: 0,
          order: {
            id: RecordSortDirectionEnum.ASC,
          },
        },
        selection: {
          rows: {
            id: true,
            child_page_id: true,
            order: true,
            parent_page_id: true,
            fr_child_webpage_master: {
              id: true,
              title: true
            },
            fr_parent_webpage_master: {
              id: true,
              title: true
            }
          },
        }
      });
  }

  async create() {
    const create = await api.graphql.webPageHierarchy.create({
      input: [{
        child_page_id: 1,
        order: 1,
        parent_page_id: 1
      }],
      selection: {
          id: true,
          child_page_id: true,
          order: true,
          parent_page_id: true,
      }
    });

    return create;
  }

  async find() {
      const find = await api.graphql.webPageMaster.find({
        filter: {
          take: 2,
          skip: 0,
          order: {
            id: RecordSortDirectionEnum.ASC,
          },
        },
        selection: {
          rows: {
            id: true,
            active: true,
            browser_title : true,
            title: true,
            content: true,
            meta_desc: true,
            meta_keyword:true,
            position: true,
            type: true,
            url_slug: true,
            fr_child_webpage_hierarchies: {
              id: true,
              child_page_id: true,
              order: true,
              parent_page_id: true
            },
            fr_parent_webpage_hierarchies: {
              id: true,
              child_page_id: true,
              order: true,
              parent_page_id: true
            }
          },
        }
      });
  }

  async create() {
    const create = await api.graphql.webPageMaster.create({
      input: [{
        browser_title : "test",
        title: "test",
        content: "test",
        meta_desc: "test",
        meta_keyword:"test",
        position: positionEnum.TOP,
        type: pgTypeEnum.SIMPLE,
        url_slug: "test",
        active: ""
      }],
      selection: {
          id: true,
          active: true,
          browser_title : true,
          title: true,
          content: true,
          meta_desc: true,
          meta_keyword:true,
          position: true,
          type: true,
          url_slug: true,
      }
    });

    return create;
  }

  async find() {
      const find = await api.graphql.state.find({
        filter: {
          take: 2,
          skip: 0,
          order: {
            id: RecordSortDirectionEnum.ASC,
          },
        },
        selection: {
          rows: {
            id: true,
            country_id: true,
            name: true,
            type: true,
            fips: true,
            iso_ii: true,
            latitude: true,
            longitude: true,
            created: true,
            updated: true,
            deleted: true,
            fr_country: {
              id: true,
              name: true
            },
            fr_cities: {
              id: true,
              name: true
            },
            fr_user_addresses: {
              id: true
            },
            fr_user_identity_cards: {
              id: true
            },
            fr_user_professional_infos: {
              id: true
            },
            fr_businesses: {
              id: true
            },
            fr_business_branches: {
              id: true
            }
          }
        }
      });
  }

  async create() {
    const create = await api.graphql.state.create({
      input: [{
        country_id: 1,
        name: "test region",
        type: "test",
        fips: "TR01",
        iso_ii: "TR",
        latitude: 7.0589,
        longitude: 6.7234
      }],
      selection: {
        id: true,
        country_id: true,
        name: true,
        type: true,
        fips: true,
        iso_ii: true,
        latitude: true,
        longitude: true,
        created: true,
        updated: true,
        deleted: true,
      }
    });

    return create;
  }

  async find() {
      const find = await api.graphql.country.find({
        filter: {
          take: 2,
          skip: 0,
          order: {
            id: RecordSortDirectionEnum.ASC,
          },
        },
        selection: {
          rows: {
            id: true,
            region_id: true,
            subregion_id: true,
            name: true,
            numeric_code: true,
            iso_iii: true,
            iso_ii: true,
            fips: true,
            subdivision_title: true,
            capital: true,
            currency: true,
            currency_name: true,
            currency_symbol: true,
            tld: true,
            native: true,
            nationality: true,
            timezones: true,
            translations: true,
            latitude: true,
            longitude: true,
            emoji: true,
            emoji_u: true,
            created: true,
            updated: true,
            deleted: true,

            fr_states: {
              id: true
            },
            fr_region: {
              id: true
            },
            fr_subregion: {
              id: true
            },
            fr_user_addresses: {
              id: true
            },
            fr_user_identity_cards: {
              id: true
            },
            fr_user_professional_infos: {
              id: true
            },
            fr_country_languagies: {
              id: true
            },
            fr_country_timezones: {
              id: true
            },
            fr_businesses: {
              id: true
            },
            fr_business_branches: {
              id: true
            },
            fr_country_phone_codes: {
              id: true
            }
          }
        }
      });
  }

  async create() {
    const create = await api.graphql.country.create({
      input: [{
        region_id: 1,
        subregion_id: 1,
        name: "test",
        numeric_code: "001",
        iso_iii: "TST",
        iso_ii: "TS",
        fips: "TS",
        subdivision_title: "Test Subdivision",
        capital: "Test Capital",
        currency: "TST",
        currency_name: "Test Currency",
        currency_symbol: "$",
        tld: ".ts",
        native: "Test Native",
        nationality: "Test Nationality",
        timezones: "UTC+0",
        translations: "{}", // adjust if JSON
        latitude: 7.0589,
        longitude: 6.7234,
        emoji: "🏳️",
        emoji_u: "U+1F3F3"
      }],
      selection: {
        id: true,
        region_id: true,
        subregion_id: true,
        name: true,
        numeric_code: true,
        iso_iii: true,
        iso_ii: true,
        fips: true,
        subdivision_title: true,
        capital: true,
        currency: true,
        currency_name: true,
        currency_symbol: true,
        tld: true,
        native: true,
        nationality: true,
        timezones: true,
        translations: true,
        latitude: true,
        longitude: true,
        emoji: true,
        emoji_u: true,
        created: true,
        updated: true,
        deleted: true,
      }
    });

    return create;
  }

  async create() {
      const create = await api.graphql.city.create({
        input: [{
          state_id:1,
          tz_id:1,
          name:"test",
          latitude:7.0589,
          longitude:6.7234
        }],
        selection: {
          state_id: true, 
          tz_id: true,
          name: true,
          latitude: true,
          longitude: true,
          created: true,
          updated: true,
          deleted: true,
        }
      });
      return create;
    }

  async find() {
      const find = await api.graphql.city.find({
        filter: {
          take: 2,
          skip: 0,
          order: {
            id: RecordSortDirectionEnum.ASC,
          },
        },
        selection: {
          rows: {
            id: true, 
            state_id: true,
            tz_id: true,
            name: true,
            latitude: true,
            longitude: true,
            created: true,
            updated: true,
            deleted: true,
            fr_state: {
              id: true,
              name: true
            },
            fr_timezone: {
              id: true,
            },
            fr_user_addresses: {
              id: true
            },
            fr_user_identity_cards: {
              id: true
            },
            fr_user_professional_infos: {
              id: true
            },
            fr_newsletter_track_logs: {
              id: true
            },
            fr_businesses: {
              id: true
            },
            fr_business_branches: {
              id: true
            },
            fr_business_sales_areas: {
              id: true
            }
          }
        }
      });
  }

  async find() {
      const find = await api.graphql.crawlerJobResponseType.find({
        filter: {
          take: 2,
          skip: 0,
          order: {
            id: RecordSortDirectionEnum.ASC,
          },
        },
        selection: {
          rows: {
            id: true, 
            title: true,
            active: true,
            created: true,
            updated: true,
            deleted: true,
            fr_crawler_job_batch_responses: {
              cjbatch_id: true,
              cjrtype_id: true
            },
          }
        }
      });
    }

    async create() {
      const create = await api.graphql.crawlerJobResponseType.create({
        input: [{
          title: "test",
        }],
        selection: {
          id: true, 
          title: true,
          active: true,
          created: true,
          updated: true,
          deleted: true,
        }
      });
      return create;
    }

  async find() {
      const find = await api.graphql.crawlerJobBatchResponse.find({
        filter: {
          take: 2,
          skip: 0,
          order: {
            cjbatch_id: RecordSortDirectionEnum.ASC,
          },
        },
        selection: {
          rows: {
            cjbatch_id: true, 
            cjrtype_id: true,
            webhook: true,
            jwt: true,
            secret: true,
            token: true,
            u: true,
            p: true,
            expected_delivery: true,
            created: true,
            updated: true,
            deleted: true,
            fr_crawler_job_batch: {
              id: true,
              uar_id: true
            },
            fr_job_response_type: {
              id: true,
              title: true
            },

          }
        }
      });
    }

    async create() {
      const create = await api.graphql.crawlerJobBatchResponse.create({
        input: [{
          cjbatch_id: 1,
          cjrtype_id: 1,
          webhook: "http://localhost:20152/rest/webhook/trial",
          jwt: "",
          secret: "test",
          token: "test",
          u: "",
          p: "",
          expected_delivery: new Date().toISOString(),

        }],
        selection: {
          id: true,
          cjbatch_id: true, 
          cjrtype_id: true,
          webhook: true,
          jwt: true,
          secret: true,
          token: true,
          u: true,
          p: true,
          expected_delivery: true,
          created: true,
          updated: true,
          deleted: true,
        }
      });
      return create;
    }

  async find() {
      const find = await api.graphql.crawlerJobBatchQueue.find({
        filter: {
          take: 2,
          skip: 0,
          order: {
            id: RecordSortDirectionEnum.ASC,
          },
        },
        selection: {
          rows: {
            id: true,
            cjbatch_id: true, 
            ref_id: true,
            ref_type: true,
            wrkstatus_id: true,
            browse_url: true,
            note: true,
            raw_data: true,
            process_uid: true,
            created: true,
            completed: true,
            fr_crawler_job_batch: {
              id: true,
              uar_id: true
            },
            fr_work_status: {
              id: true,
              title: true
            },
            fr_crawler_job_batch_attempts: {
              id: true,
              cjbqueue_id: true
            }
            
          }
        }
      });
    }

    async create() {
      const create = await api.graphql.crawlerJobBatchQueue.create({
        input: [{
          cjbatch_id: 1,
          ref_id: "1",
          ref_type: "1",
          wrkstatus_id: 1,
          browse_url: "https://www.google.com/",  
          note: "test",
          raw_data: "test",
          process_uid: "test",

        }],
        selection: {
          id: true,
          cjbatch_id: true, 
          ref_id: true,
          ref_type: true,
          wrkstatus_id: true,
          browse_url: true,
          note: true,
          raw_data: true,
          process_uid: true,
          created: true,
          completed: true,
        }
      });
      return create;
    }
  async find() {
      const find = await api.graphql.crawlerJobBatchAuth.find({
        filter: {
          take: 2,
          skip: 0,
          order: {
            cjbatch_id: RecordSortDirectionEnum.ASC,
          },
        },
        selection: {
          rows: {
            id: true,
            cjbatch_id: true, 
            tfatyp_id: true,
            u: true,
            p: true,
            keep_login: true,
            sque_a: true,
            sans_a: true,
            sque_b: true,
            sans_b: true,
            sque_c: true,
            sans_c: true,
            sque_d: true,
            sans_d: true,
            sque_e: true,
            sans_e: true,
            created: true,
            updated: true,
            deleted: true,
            fr_crawler_job_batch: {
              id: true,
              uar_id: true
            },
            fr_twofa_authentication_type: {
              id: true,
              title: true
            },
            
          }
        }
      });
    }

    async create() {
      const create = await api.graphql.crawlerJobBatchAuth.create({
        input: [{
          cjbatch_id: 1,
          tfatyp_id: 1,
          u: "test.thatsend@gmail.com",
          p: "thatsend000",
          keep_login: 1,
          sque_a: "test.thatsend@gmail.com",
          sans_a: "thatsend000",
          sque_b: "test.thatsend@gmail.com",
          sans_b: "thatsend000",
          sque_c: "test.thatsend@gmail.com",
          sans_c: "thatsend000",
          sque_d: "test.thatsend@gmail.com",
          sans_d: "thatsend000",
          sque_e: "test.thatsend@gmail.com",
          sans_e: "thatsend000",
        }],
        selection: {
          id: true,
            cjbatch_id: true, 
            tfatyp_id: true,
            u: true,
            p: true,
            keep_login: true,
            sque_a: true,
            sans_a: true,
            sque_b: true,
            sans_b: true,
            sque_c: true,
            sans_c: true,
            sque_d: true,
            sans_d: true,
            sque_e: true,
            sans_e: true,
            created: true,
            updated: true,
            deleted: true,
        }
      });
      return create;
    }
  async find() {
      const find = await api.graphql.crawlerJobBatchAttempt.find({
        filter: {
          take: 2,
          skip: 0,
          order: {
            id: RecordSortDirectionEnum.ASC,
          },
        },
        selection: {
          rows: {
            id: true,
            cjbqueue_id: true, 
            wrkstatus_id: true,
            number: true,
            ref: true,
            note: true,
            raw_data: true,
            created: true,
            updated: true,
            deleted: true,
            fr_crawler_job_batch_queue: {
              id: true,
              ref_id: true
            },
            fr_work_status: {
              id: true,
              title: true
            },
            
          }
        }
      });
    }

    async create() {
      const create = await api.graphql.crawlerJobBatchAttempt.create({
        input: [{
          cjbqueue_id: 1,
          wrkstatus_id: 1,
          number: 1,
          ref: "ref",
          note: "note",
          raw_data: ""
        }],
        selection: {
          id: true,
          cjbqueue_id: true, 
          wrkstatus_id: true,
          number: true,
          ref: true,
          note: true,
          raw_data: true,
          created: true,
          updated: true,
          deleted: true,
        }
      });
      return create;
    }

  async find() {
      const find = await api.graphql.crawlerJobBatch.find({
        filter: {
          take: 2,
          skip: 0,
          order: {
            id: RecordSortDirectionEnum.ASC,
          },
        },
        selection: {
          rows: {
            id: true,
            uar_id: true, 
            wrkstatus_id: true,
            alert_email: true,
            created: true,
            updated: true,
            deleted: true,
            fr_user_authorisation: {
              id: true,
              u_id: true
            },
            fr_work_status: {
              id: true,
              title: true
            },
            fr_crawler_job_batch_auths: {
              cjbatch_id: true,
            },
            fr_crawler_job_batch_queues: {
              id: true,
              ref_id: true
            },
            fr_crawler_job_batch_responses: {
              cjbatch_id : true
            }
          }
        }
      });
    }

    async create() {
      const create = await api.graphql.crawlerJobBatch.create({
        input: [{
          uar_id: 1,
          wrkstatus_id: 1,
          alert_email: "test.1.thatsend@gmail.com",
        }],
        selection: {
          id: true,
          uar_id: true, 
          wrkstatus_id: true,
          alert_email: true,
          created: true,
          updated: true,
          deleted: true,
        }
      });
      return create;
    }

  async create() {
      const create = await api.graphql.authorisationRole.create({
        input: [{
          ararea_id: 1,
          role_title: "developer test",
        }],
        selection: {
          id: true,
          ararea_id: true, 
          role_title: true,
          active: true,
          created: true,
          updated: true,
          deleted: true,
          fr_authorisation_area: {
            id: true,
            name: true
          },
          fr_user_authorisations: {
            id: true,
            u_id: true
          },
          fr_user_authorisation_policies: {
            id: true,
            ip: true
          }
        }
      });
      return create;
    }

    async find() {
      const find = await api.graphql.authorisationRole.find({
        filter: {
          take: 2,
          skip: 0,
          order: {
            id: RecordSortDirectionEnum.ASC,
          },
        },
        selection: {
          rows: {
            id: true,
            ararea_id: true, 
            role_title: true,
            active: true,
            created: true,
            updated: true,
            deleted: true,
            fr_authorisation_area: {
              id: true,
              name: true
            },
            fr_user_authorisations: {
              id: true,
              u_id: true
            },
            fr_user_authorisation_policies: {
              id: true,
              ip: true
            }
          }
        }
      });
    }

  async create() {
      const create = await api.graphql.authorisationModuleAction.create({
        input: [{
          name: "test 2",
          url_slug: "test 2",
        }],
        selection: {
          id: true,
          name: true, 
          url_slug: true,
          created: true,
          updated: true,
          deleted: true,
          fr_user_authorisation_policies: {
            id: true,
            ip: true
          }
        }
      });
      return create;
    }

    async find() {
      const find = await api.graphql.authorisationModuleAction.find({
        filter: {
          take: 2,
          skip: 0,
          order: {
            id: RecordSortDirectionEnum.ASC,
          },
        },
        selection: {
          rows: {
            id: true,
            name: true, 
            url_slug: true,
            created: true,
            updated: true,
            deleted: true,
            fr_user_authorisation_policies: {
              id: true,
              ip: true
            }
          }
        }
      });
    }

  async create() {
      const create = await api.graphql.authorisationModule.create({
        input: [{
          name: "test 2",
          url_slug: "test 2",
        }],
        selection: {
          id: true,
          name: true, 
          url_slug: true,
          created: true,
          updated: true,
          deleted: true,
          fr_user_authorisation_policies: {
            id: true,
            ip: true
          }
        }
      });
      return create;
    }

    async find() {
      const find = await api.graphql.authorisationModule.find({
        filter: {
          take: 2,
          skip: 0,
          order: {
            id: RecordSortDirectionEnum.ASC,
          },
        },
        selection: {
          rows: {
            id: true,
            name: true, 
            url_slug: true,
            created: true,
            updated: true,
            deleted: true,
            fr_user_authorisation_policies: {
              id: true,
              ip: true
            }
          }
        }
      });
    }

  async create() {
    const create = await api.graphql.authorisationArea.create({
      input: [{
        name: "trial",
        url_slug: "trial",
      }],
      selection: {
        id: true,
        name: true, 
        url_slug: true,
        created: true,
        updated: true,
        deleted: true,
        fr_authorisation_roles: {
          id: true,
          role_title: true
        }
      }
    });
    return create;
  }

  async find() {
    const find = await api.graphql.authorisationArea.find({
      filter: {
        take: 2,
        skip: 0,
        order: {
          id: RecordSortDirectionEnum.ASC,
        },
        where:[{
          id: {
              equal: "1",
            },
        }]
      },
      selection: {
        rows: {
          id: true,
          name: true, 
          url_slug: true,
          created: true,
          updated: true,
          deleted: true,
          fr_authorisation_roles: {
            id: true,
            role_title: true
          }
        }
      }
    });
  }
  
  async find() {
    const find = await api.graphql.queueWhatsapp.find({
      filter: {
        take: 2,
        skip: 0,
        order: {
          id: RecordSortDirectionEnum.ASC,
        },
        where:[{
          id: {
              equal: "6",
            },
        }]
      },
      selection: {
        rows: {
          id: true,
          wrkstatus_id: true, 
          from_uar_id: true,
          to_uar_id: true,
          quetype_id: true,
          mktcmpin_id: true,
          whresp_id: true,
          ref_id: true,
          ref_type: true,
          from_mobile: true,
          from_mobile_cc: true,
          to_mobile: true,
          to_mobile_cc :true,
          subject :true,
          msg: true,
          raw_data: true,
          sent: true,
          created: true,
          updated: true,
          deleted: true,
          fr_work_status: {
            id: true,
          },
          fr_queue_type: {
            id: true,
          },
          fr_webhook_response: {
            id: true,
          },
          fr_from_user_authorisation: {
            id: true,
          },
          fr_to_user_authorisation: {
            id: true,
          },
          fr_marketing_campaign: {
            id: true,
          }
        }
      }
    });
  }

  async create() {
    const create = await api.graphql.queueWhatsapp.create({
      input: [{
        wrkstatus_id: WorkStatusEnum.PENDING,       // Required, replace with actual ID
        from_uar_id: 1,      // Required, replace with actual ID
        to_uar_id: 1,        // Optional, replace with actual or null
        quetype_id: 2,         // Required, queue type ID
        mktcmpin_id: 10,       // Optional marketing campaign ID
        whresp_id: 1,          // Optional webhook response ID
        ref_id: "abc123",      // Optional reference ID
        ref_type: "type_example", // Optional reference type
        from_mobile: "9724589631", // Optional from profile
        from_mobile_cc: "91", // Optional to profile
        to_mobile: "9724589631", // Optional from profile
        to_mobile_cc: "91", // Optional to profile
        subject: "subject", // Optional subject
        msg: "message", // Optional message
        raw_data: "raw_data", // Optional raw data
        sent: "", // Optional sent
      }],
      selection: {
        id: true,
            wrkstatus_id: true, 
            from_uar_id: true,
            to_uar_id: true,
            quetype_id: true,
            mktcmpin_id: true,
            whresp_id: true,
            ref_id: true,
            ref_type: true,
            from_mobile: true,
            from_mobile_cc: true,
            to_mobile: true,
            to_mobile_cc :true,
            subject :true,
            msg: true,
            raw_data: true,
            sent: true,
            created: true,
            updated: true,
            deleted: true,
            fr_work_status: {
              id: true,
            },
            fr_queue_type: {
              id: true,
            },
            fr_webhook_response: {
              id: true,
            },
            fr_from_user_authorisation: {
              id: true,
            },
            fr_to_user_authorisation: {
              id: true,
            },
            fr_marketing_campaign: {
              id: true,
            }
      }
    });
    return create;
  }

  async find() {
    const find = await api.graphql.queueFacebookdm.find({
      filter: {
        take: 2,
        skip: 0,
        order: {
          id: RecordSortDirectionEnum.ASC,
        },
        where:[{
          id: {
              equal: "8",
            },
        }]
      },
      selection: {
        rows: {
          id: true,
          wrkstatus_id: true, 
          from_uar_id: true,
          to_uar_id: true,
          quetype_id: true,
          mktcmpin_id: true,
          whresp_id: true,
          ref_id: true,
          ref_type: true,
          from_profile: true,
          to_profile: true,
          subject: true,
          msg: true,
          raw_data: true,
          sent: true,
          created: true,
          updated: true,
          deleted: true,
          fr_work_status: {
            id: true,
          },
          fr_queue_type: {
            id: true,
          },
          fr_webhook_response: {
            id: true,
          },
          fr_from_user_authorisation: {
            id: true,
          },
          fr_to_user_authorisation: {
            id: true,
          },
          fr_marketing_campaign: {
            id: true,
          }
        }
      }
    });
  }

  async create() {
  const create = await api.graphql.queueFacebookdm.create({
    input: [{
      wrkstatus_id: WorkStatusEnum.PENDING,       // Required, replace with actual ID
      from_uar_id: 1,      // Required, replace with actual ID
      to_uar_id: 1,        // Optional, replace with actual or null
      quetype_id: 2,         // Required, queue type ID
      mktcmpin_id: 10,       // Optional marketing campaign ID
      whresp_id: 1,          // Optional webhook response ID
      ref_id: "abc123",      // Optional reference ID
      ref_type: "type_example", // Optional reference type
      from_profile: "from_profile", // Optional from profile
      to_profile: "to_profile", // Optional to profile
      subject: "subject", // Optional subject
      msg: "message", // Optional message
      raw_data: "raw_data", // Optional raw data
      sent: "", // Optional sent
    }],
    selection: {
      id: true,
          wrkstatus_id: true, 
          from_uar_id: true,
          to_uar_id: true,
          quetype_id: true,
          mktcmpin_id: true,
          whresp_id: true,
          ref_id: true,
          ref_type: true,
          from_profile: true,
          to_profile: true,
          subject: true,
          msg: true,
          raw_data: true,
          sent: true,
          created: true,
          updated: true,
          deleted: true,
          fr_work_status: {
            id: true,
          },
          fr_queue_type: {
            id: true,
          },
          fr_webhook_response: {
            id: true,
          },
          fr_from_user_authorisation: {
            id: true,
          },
          fr_to_user_authorisation: {
            id: true,
          },
          fr_marketing_campaign: {
            id: true,
          }
    }
  });

  return create;
}

  async find() {
    const find = await api.graphql.queueEmail.find({
      filter: {
        take: 2,
        skip: 0,
        order: {
          id: RecordSortDirectionEnum.ASC,
        },
        where:[{
          id: {
              equal: "32",
            },
        }]
      },
      selection: {
        rows: {
          id: true,
          wrkstatus_id: true,
          from_uar_id: true,
          to_uar_id: true,
          quetype_id: true,
          mktcmpin_id: true,
          fr_from_user_authorisation: {
            id: true,
          },
          fr_to_user_authorisation: {
            id: true,
          },
          fr_from_country_phone_code: {
            id: true,
            phone_code: true,
          },
          fr_marketing_campaign: {
            id: true,
            title : true
          },
          fr_queue_type: {
            id: true,
            title : true
          },
          fr_to_country_phone_code: {
            id: true,
            phone_code: true,
          },
          fr_webhook_response: {
            id: true,
            ref_id : true
          },
          fr_work_status: {
            id: true,
            title : true
          },
          whresp_id: true,
          ref_id: true,
          ref_type: true,
          created_uar_id: true,
          from_email: true,
          to_email: true,
          cc: true,
          ccother: true,
          bcc: true,
          subject: true,
          body: true,
          raw_data: true,
          sent: true          
        }
      }
    });
  }

  async create() {
  const create = await api.graphql.queueEmail.create({
    input: [{
      wrkstatus_id: WorkStatusEnum.PENDING,       // Required, replace with actual ID
      from_uar_id: 1,      // Required, replace with actual ID
      to_uar_id: 1,        // Optional, replace with actual or null
      quetype_id: 2,         // Required, queue type ID
      mktcmpin_id: 10,       // Optional marketing campaign ID
      whresp_id: 1,          // Optional webhook response ID
      ref_id: "abc123",      // Optional reference ID
      ref_type: "type_example", // Optional reference type
      created_uar_id: 123,   // Optional, creator user ID
      from_email: "from@example.com", // Required
      to_email: "to@example.com",     // Optional
      cc: "cc@example.com",           // Optional
      ccother: "cc2@example.com",    // Optional
      bcc: "bcc@example.com",        // Optional
      subject: "Test Subject",       // Optional
      body: "This is a test email body", // Required
      raw_data: {},                  // Optional JSON object
      sent: null                      // Optional datetime
    }],
    selection: {
      id: true,
      wrkstatus_id: true,
      from_uar_id: true,
      to_uar_id: true,
      quetype_id: true,
      mktcmpin_id: true,
      whresp_id: true,
      ref_id: true,
      ref_type: true,
      created_uar_id: true,
      from_email: true,
      to_email: true,
      cc: true,
      ccother: true,
      bcc: true,
      subject: true,
      body: true,
      raw_data: true,
      sent: true,
      created: true,
      updated: true,
      deleted: true
    }
  });

  return create;
}
  async create() {
  const create = await api.graphql.queueSms.create({
    input: [{
      wrkstatus_id: WorkStatusEnum.SUCCESS,            // Example value, replace with actual
      from_uar_id: 1,           // Example value
      to_uar_id: 1,             // Example value
      quetype_id: 1,              // Example value
      mktcmpin_id: 10,            // Example value
      from_mobile: "7069854321",
      from_mobile_cc: "91",
      to_mobile: "7069854323",
      to_mobile_cc: "91",
      subject: "Test Subject",
      msg: "Developer sdk test message",
      ref_id: "abc123",           // Example reference
      ref_type: "type_example",
      whresp_id: 1,            // Optional
      raw_data: "{}"              // Optional, if you have JSON
    }],
    selection: {
      id: true,
      wrkstatus_id: true,
      from_uar_id: true,
      to_uar_id: true,
      quetype_id: true,
      mktcmpin_id: true,
      from_mobile: true,
      to_mobile: true,
      subject: true,
      msg: true,
      ref_id: true,
      ref_type: true,
      whresp_id: true,
      raw_data: true
    }
  });

  return create;
}


  async find() {
    const find = await api.graphql.queueSms.find({
      filter: {
        take: 2,
        skip: 0,
        order: {
          id: RecordSortDirectionEnum.ASC,
        },
        where:[{
          id: {
              equal: "32",
            },
        }]
      },
      selection: {
        rows: {
          id: true,
          wrkstatus_id: true,
          from_uar_id: true,
          to_uar_id: true,
          quetype_id: true,
          mktcmpin_id: true,
          fr_from_user_authorisation: {
            id: true,
          },
          fr_to_user_authorisation: {
            id: true,
          },
          fr_from_country_phone_code: {
            id: true,
            phone_code: true,
          },
          fr_marketing_campaign: {
            id: true,
            title : true
          },
          fr_queue_type: {
            id: true,
            title : true
          },
          fr_to_country_phone_code: {
            id: true,
            phone_code: true,
          },
          fr_webhook_response: {
            id: true,
            ref_id : true
          },
          fr_work_status: {
            id: true,
            title : true
          },
          whresp_id: true,
          ref_id: true,
          ref_type: true,
          from_mobile: true,
          from_mobile_cc: true,
          to_mobile: true,
          to_mobile_cc: true,
          subject: true,
          msg: true,
          raw_data: true,
          sent: true          
        }
      }
    });
  }

  async create() {
  const create = await api.graphql.queueSms.create({
    input: [{
      wrkstatus_id: WorkStatusEnum.SUCCESS,            // Example value, replace with actual
      from_uar_id: 1,           // Example value
      to_uar_id: 1,             // Example value
      quetype_id: 1,              // Example value
      mktcmpin_id: 10,            // Example value
      from_mobile: "7069854321",
      from_mobile_cc: "91",
      to_mobile: "7069854323",
      to_mobile_cc: "91",
      subject: "Test Subject",
      msg: "Developer sdk test message",
      ref_id: "abc123",           // Example reference
      ref_type: "type_example",
      whresp_id: 1,            // Optional
      raw_data: "{}"              // Optional, if you have JSON
    }],
    selection: {
      id: true,
      wrkstatus_id: true,
      from_uar_id: true,
      to_uar_id: true,
      quetype_id: true,
      mktcmpin_id: true,
      from_mobile: true,
      to_mobile: true,
      subject: true,
      msg: true,
      ref_id: true,
      ref_type: true,
      whresp_id: true,
      raw_data: true
    }
  });

  return create;
}

  

async remove() {
    const remove = await api.graphql.faq.remove({
      input:{
        where:[{
          id: {
            equal: "4"
          }
        }]
      },
      selection: {
        affected: true,
        snapshot:{
          success: true,
        },
      
        affectedRows: {
          id: true,
          question: true,
          answer: true,
        }
      }
    });
  }
  
  async recover() {
    const recover = await api.graphql.faq.recover({
      input:{
        where:[{
          id: {
            equal: "4"
          }
        }]
      },
      selection: {
        affected: true,
        snapshot:{
          success: true,
        }
      }
    });
  }

async softRemove() {
    const softRemove = await api.graphql.faq.softRemove({
      input:{
        where:[{
          id: {
            equal: "4"
          }
        }]
      },
      selection: {
        affected: true,
        snapshot:{
          success: true,
        },
        affectedRows: {
          id: true,
          question: true,
          answer: true,
        }
      }
    });
  }

  async delete() {
    const del = await api.graphql.faq.delete({
      input:{
        where:[{
          id: {
            equal: "6"
          }
        }]
      },
      selection: {
        affected: true,
        snapshot:{
          success: true,
        }
      }
    });
  }

  async upsert() {
    const upsert = await api.graphql.faq.upsert({
      input:[{
       question: "test2",
       answer: " test2",
       faqcat_id: 1,
       url_slug: "test2",
      }],
      selection: {
        id: true,
        question: true,
        answer: true,

      }
    });
  }

  async restore() {
    const restore = await api.graphql.faq.restore({
      input:{
        where:[{
          id: {
            equal: "4"
          }
        }]
      },
      selection: {
        affected: true,
        snapshot:{
          success: true,
        }
      }
    });
  }
  
  async softDelete() {
    const softDelete = await api.graphql.faq.softDelete({
      input:{
        where:[{
          id: {
            equal: "4"
          }
        }]
      },
      selection: {
        affected: true,
        snapshot:{
          success: true,
        }
      }
    });
  }


  async findOneById() {   
    const findOneById = await api.graphql.faq.findOneById({
      input: {
        id: 4,
      },
      selection: {
        id: true,
        question: true,
        active: true,
        answer: true
      }
    });
  }

  async update() {
    const update = await api.graphql.faq.update({
      input:{
        sets:{
          question: "test2",
          answer: "test2",
          faqcat_id:3
        },
        where:[{
          id: {
            equal: "4"
          }
        }]
      },
      selection: {
        affectedRows:{
          id: true,
          question: true,
          answer:true
        }
      }
    });
  }
  async create() {
    const create = await api.graphql.faq.create({
      input:[{
        question: "test",
        answer: " test",
        faqcat_id: 1,
        url_slug: "test",
      }],
      selection: {
        id: true,
        question: true,
        answer: true,
        active: true,
      }
    });
  }
  async find() {
    const find = await api.graphql.faq.find({
      filter: {
        take: 2,
        skip: 0,
        order: {
          id: RecordSortDirectionEnum.ASC,
        },
        where:[{
          id: {
              equal: "4",
            },
        }]
      },
      selection: {
        rows: {
          id: true,
          question: true,
          answer : true,
          active: true,
          fr_faq_category: {
            id: true,
            title: true,
            desc:true,
          }
        }
      }
    });
  }

async remove() {
    const remove = await api.graphql.faqCategory.remove({
      input:{
        where:[{
          id: {
            equal: "22"
          }
        }]
      },
      selection: {
        affected: true,
        snapshot:{
          success: true,
        },
      
        affectedRows: {
          id: true,
          title: true,
        }
      }
    });
  }
  
  async recover() {
    const recover = await api.graphql.faqCategory.recover({
      input:{
        where:[{
          id: {
            equal: "19"
          }
        }]
      },
      selection: {
        affected: true,
        snapshot:{
          success: true,
        }
      }
    });
  }

async softRemove() {
    const softRemove = await api.graphql.faqCategory.softRemove({
      input:{
        where:[{
          id: {
            equal: "19"
          }
        }]
      },
      selection: {
        affected: true,
        snapshot:{
          success: true,
        }
      }
    });
  }

  async delete() {
    const del = await api.graphql.faqCategory.delete({
      input:{
        where:[{
          id: {
            equal: "18"
          }
        }]
      },
      selection: {
        affected: true,
        snapshot:{
          success: true,
        }
      }
    });
  }

  async upsert() {
    const upsert = await api.graphql.faqCategory.upsert({
      input:[{
          title: "test3",
          desc: "test3"
      }],
      selection: {
        id: true,
        title: true,
        desc: true,

      }
    });
  }

  async restore() {
    const restore = await api.graphql.faqCategory.restore({
      input:{
        where:[{
          id: {
            equal: "18"
          }
        }]
      },
      selection: {
        affected: true,
        snapshot:{
          success: true,
        }
      }
    });
  }
  
  async softDelete() {
    const softDelete = await api.graphql.faqCategory.softDelete({
      input:{
        where:[{
          id: {
            equal: "18"
          }
        }]
      },
      selection: {
        affected: true,
        snapshot:{
          success: true,
        }
      }
    });
  }


  async findOneById() {   
    const findOneById = await api.graphql.faqCategory.findOneById({
      input: {
        id: 1,
      },
      selection: {
        id: true,
        title: true,
        desc: true,
      }
    });
  }

  async update() {
    const update = await api.graphql.faqCategory.update({
      input:{
        sets:{
          title: "test2",
          desc: "test2"
        },
        where:[{
          id: {
            equal: "18"
          }
        }]
      },
      selection: {
        affectedRows:{
          id: true,
          title: true,
        }
      }
    });
  }
  async create() {
    const create = await api.graphql.faqCategory.create({
      input:[{
        title: "test",
        desc: " test",
      }],
      selection: {
        id: true,
        desc: true,
        active: true,
      }
    });
  }
  async find() {
    const find = await api.graphql.faqCategory.find({
      filter: {
        take: 2,
        skip: 0,
        order: {
          id: RecordSortDirectionEnum.ASC,
        },
        where:[{
          id: {
              equal: "1",
            },
        }]
      },
      selection: {
        rows: {
          id: true,
          title: true,
          desc : true,
          active: true,
          fr_faq_categories: {
            id: true,
            faqcat_id: true,
            url_slug:true,
            question:true, 
            answer: true,
          }
        }
      }
    });
  }*/
}
try {
const trial = new trialUnivarsal();
const retval = await trial.appStepSigninUser();
//const retval = await trial.appStepSigninPassword();
//const retval = await trial.appStepSigninMultiFAOption();
//const retval = await trial.appStepSigninMultiFAVerify();
//const retval = await trial.appGenerateTwoFAQR();
//const retval = await trial.appVerifyTwoFAQR();
//const retval = await trial.appRegenerateTwoFARecoveryCode();
//const retval = await trial.appVerifyTwoFARecoveryCode();
//const retval = await trial.find();
//const retval = await trial.create();
//const retval = await trial.update();
//const retval = await trial.findOneById();
//const retval = await trial.softDelete();
//const retval = await trial.restore();
//const retval = await trial.upsert();
//const retval = await trial.delete();
//const retval = await trial.softRemove();
//const retval = await trial.recover();
//const retval = await trial.remove();





/*
api end auth
reject
idntify token expirt or not
renew token using referesh
update new token in memory and presetant storage
again call for main request
get response or error
*/
console.log("--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@--");
console.log("--@@@@@@@@@ trial.mjs  @@@@@@@@@--");
console.log("--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@--");
//console.dir(retval, { depth: null, colors: true })

} catch (error) {
  // ApiError now includes `status`, `url`, and `body` (server response)
  console.error(error);
  console.dir(error, { depth: null });
}

/**
 * ==========================================================================
 * ==========================================================================
 * ==========================================================================
 * Trial with all endpoint example, can be used for testing and reference for future test case development
 * ==========================================================================
 * ==========================================================================
 * ==========================================================================
 */

class trialApiEndpointAuthUnivarsal {
  constructor(){
    api.graphql.use(QueueType);
  }
  async find() {
    const find = await api.graphql.apiEndpointAuth.find({
      filter: {
        take: 2,
        skip: 0,
        order: {
          id: RecordSortDirectionEnum.ASC,
        },
        where:[{
        }]
      },
      selection: {
        rows: {
          id: true
          
        }
      }
    });
  }
  async findOneById() {   
    const findOneById = await api.graphql.apiEndpointAuth.findOneById({
      input: {
        id: 1,
      },
      selection: {
        id: true,
        title: true,
      }
    });
  }
  async create() {
    const create = await api.graphql.apiEndpointAuth.create({
      input:[{
        username: "test567",
        email: " test567",
        identify: "test567",
        role_id: ApiUserRoleEnum.APIUSER,
      }],
      selection: {
        id: true,
        username: true,
        email: true,
        role_id: true,
      }
    });
  }
  async update() {
    const update = await api.graphql.apiEndpointAuth.update({
      input:{
        sets:{
          username: "test5678"
        },
        where:[{
          id: {
            equal: "1"
          }
        }]
      },
      selection: {
        affectedRows:{
          id: true,
          username: true,
        }
      }
    });
  }
  async softDelete() {
    const softDelete = await api.graphql.apiEndpointAuth.softDelete({
      input:{
        where:[{
          id: {
            equal: "1"
          }
        }]
      },
      selection: {
        affected: true,
        snapshot:{
          success: true,
        }
      }
    });
  }
  async delete() {
    const del = await api.graphql.apiEndpointAuth.delete({
      input:{
        where:[{
          id: {
            equal: "1"
          }
        }]
      },
      selection: {
        affected: true,
        snapshot:{
          success: true,
        }
      }
    });
  }
  async restore() {
    const restore = await api.graphql.apiEndpointAuth.restore({
      input:{
        where:[{
          id: {
            equal: "2"
          }
        }]
      },
      selection: {
        affected: true,
        snapshot:{
          success: true,
        }
      }
    });
  }
  async upsert() {
    const upsert = await api.graphql.apiEndpointAuth.upsert({
      input:[{
       username: "test567",
       email: " test567",
       identify: "test567",
       role_id: ApiUserRoleEnum.APIUSER,
      }],
      selection: {
        id: true,
        username: true,

      }
    });
  }
  async softRemove() {
    const softRemove = await api.graphql.apiEndpointAuth.softRemove({
      input:{
        where:[{
          id: {
            equal: "2"
          }
        }]
      },
      selection: {
        affected: true,
        snapshot:{
          success: true,
        }
      }
    });
  }
  async remove() {
    const remove = await api.graphql.apiEndpointAuth.remove({
      input:{
        where:[{
          id: {
            equal: "2"
          }
        }]
      },
      selection: {
        affected: true,
        snapshot:{
          success: true,
        }
      }
    });
  }
  async recover() {
    const recover = await api.graphql.apiEndpointAuth.recover({
      input:{
        where:[{
          id: {
            equal: "2"
          }
        }]
      },
      selection: {
        affected: true,
        snapshot:{
          success: true,
        }
      }
    });
  }
  async recordPosition() {
    const recordPosition = await api.graphql.apiEndpointAuth.recordPosition({
      input:{
        from_record_id: "3",
        from_record_position_id: "1",
        to_record_id: "2",
        to_record_position_id: "1",
      },
      selection: {
        affected: true,
        snapshot:{
          success: true,
        }
      }
    });
  } 
  async markAsMain() {
    const markAsMain = await api.graphql.apiEndpointAuth.markAsMain({
      input:[{
        id: "2",
        mark_as_main_field: ApiEndpointAuthMarkAsMainFieldEnum.IS_MAIN,
        ref_group_relation_field_value: "1",
      }],
      selection: {
        affected: true,
        snapshot:{
          success: true,
        }
      }
    });
  }
}
class trialApiEndpointAuthFileUnivarsal {
  constructor(){
    api.graphql.use(ApiEndpointAuthFile);
  }
  async multiUpload(){
    const localPath = [
      '/Users/core/Desktop/python-cli-application.png',
      '/Users/core/Downloads/swagger.json',
    ];
    const files = await filesFromPaths(localPath);

    const upload = await api.graphql.apiEndpointAuthFile.upload({
      attachment: files,
      input: {
        file_field: ApiEndpointAuthFileUploadFileFieldEnum.FILE_API_ENDPOINT_AUTH_ATTACHMENT,
        ref_id: "3",
      },
      selection: {
        id: true,
        ref_id: true,
        file_name: true,
        file_field: true,
        access_url: {
          direct: true,
          secure: true,
        }  
      }
    });
    return upload;
  }
  async upload(){
    const localPath = '/Users/core/Desktop/python-cli-application.png';
    const file = await fileFromPath(localPath);

    const upload = await api.graphql.apiEndpointAuthFile.upload({
      attachment: [file],
      input: {
        file_field: ApiEndpointAuthFileUploadFileFieldEnum.FILE_API_ENDPOINT_AUTH_ATTACHMENT,
        id: "3",
        ref_id: "3",
      },
      selection: {
        id: true,
        ref_id: true,
        file_name: true,
        file_field: true,
        access_url: {
          direct: true,
          secure: true,
        }  
      }
    });
    return upload;
  } 
  async uploadDelete() {
    const uploadDelete = await api.graphql.apiEndpointAuthFile.uploadDelete({
      input:[{
        id: "7",
        "file_field": ApiEndpointAuthFileUploadFileFieldEnum.FILE_API_ENDPOINT_AUTH_ATTACHMENT,
        "ref_id": "3",
      }],
      selection: {
        affected: true,
        snapshot:{
          success: true,
        }
      }
    });
    return uploadDelete;
  }
}
