import { BfwApiSdk } from '@bfw/api-sdk/core';
import {
    UserAuthentication,
    UserMultiFactorAuthenticationTypeEnum,
    Region,
    Country,
    Subregion,
    ThirdPartyPlatform,
    WebhookResponse,
    UserAddress,
    UserDevice,
    UserIdentityCard,
    UserSecurityQuestion,

    UserProfessionalInfo,
    UserFile,
    UserHierarchy,
    UserPersonalInfo,
    UserTwofaRecoveryCode,
    UserFav,
    UserFavCategory,
    GenderEnum,

    BusinessBranch,
    Business,
    BusinessInfo,
    BusinessDepartment,
    BusinessPrimaryCategory,
    BusinessSecondaryCategory,
    BusinessReview,
    BusinessSalesArea,
    BusinessSalesRegion,
    BusinessUser,
    BusinessUserSalesLocation,

    ConnectionSource,
    ConnectionSourceCategories,
    LeadFollowupStatus,
    LeadFollowup,
    LeadFollowupVia,
    LeadPotential,
    Lead,

    SettingType,
    NewsLetterCategory,
    NewsLetter,
    NewsLetterTrackLog,
    BounceTypeEnum,
    NewsLetterSchedule,
    NewsLetterUser,
    UserNewsLetterSubscription,
    SettingCategory,
    Setting,
    AccessTypeEnum,
    SettingPreference,
    StaticData,
    StaticDataValue,
} from '@bfw/api-sdk/graphql/endpoints/shared';
import { BotLevel, BotLevelModeEnum, BotProfile } from '@bfw/api-sdk/graphql/endpoints/business';
import {RecordSortDirectionEnum, YesNoEnum} from '@bfw/api-sdk/graphql/libs';

const api = new BfwApiSdk({
  graphql: { 
    //baseUrl: 'http://localhost:20147/graphql',
    //baseUrl: 'https://api-mahjfit-com.thatsend.dev/graphql',
    baseUrl: 'http://localhost:20178/graphql',
    //headers: { Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InYxIn0.eyJzdWIiOiJNUT09IiwidXNlcm5hbWUiOiJhZG1pbiIsImVtYWlsIjoiaW5mb0B0aGF0c2VuZC5jb20iLCJyb2xlX2lkIjoxLCJ0eXBlIjoiYWNjZXNzX3Rva2VuIiwiaWF0IjoxNzcyNTE4NzMxLCJleHAiOjE3NzI2MDUxMzEsImF1ZCI6IkFwcGxpY2F0aW9uIiwiaXNzIjoiVEhBVFNFTkQifQ.Nz_oeOkEYVGHCbkLcORuwsPwB9hSzh4_xt4Jov0OMnTaDfBZlAvUxuS7CaV6FySEduxXZpeb6b14iwEe4LMRDsPtRIloIGiYn4kWqmEhzd4YpLd_JxMCxgGayS12KbhwGmiVnL5CViNttUFcwXzM0wOJPDxM6db9ng3N9cZWct1VXV_OQ7PjYzFSinRLOTPxhmTOonZwpElAI0S5ykDMBSWtZjyEMeEL89yFkCHMT82zVL4qFAPmpADFicNvZZzM0monjynmLls8KCeLbdEbpWlGSsFTssuO9f7w8OYBOMUAVvfsAqsvYf2IWYmJX0hTI6qAHaJjXKp_3ynsAJq9eg` },
    
    
  },
  rest: { 
    //baseUrl: 'http://localhost:20152/rest' 
    baseUrl: 'https://api-mahjfit-com.thatsend.dev/rest',
  },
  config: {
    tokenStore: {
      persistentStorageStrategy: 'file', // we need to perform test with mutiple storage type here
      //fileName: 'my-custom-jwt.json',
      // or jwtFilePath: '/absolute/or/relative/path/custom.jwt.json'
    },
    logRequest: true,
    logResponse: true,
     /*uploadHeaders: {
       // set any upoad specific heards, only attached during upload process
     }*/
    defaultHeaderNames: {
      "accept-language": "fyegfgwegf"
      
    },
    headers: {
      "ryueruereruetr": 3232323,
      "accept-language": "fhfdgdf"
    },
  }
});

const authTokens = {
  //jwt_access_token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImF2MSJ9.eyJzdWIiOiJNUSIsInVzZXJuYW1lIjoibWFoamZpdCIsImVtYWlsIjoibWFoamZpdGdhbWVAZ21haWwuY29tIiwicm9sZV9pZCI6MCwidHlwZSI6ImFjY2Vzc190b2tlbiIsImlhdCI6MTc4MTMyODA4NiwiZXhwIjoxNzgxNDE0NDg2LCJhdWQiOiJBcHBsaWNhdGlvbiIsImlzcyI6IlRIQVRTRU5EIn0.T7mrvLLDkdEgR8-qtyC_Hczx34VVIlkMIWDD8-4FRZv1682I4aO_Cmmn3I9QQ__Vw8fuQVUdmAZ2Jxz8J7MOFx4eqp3cshfE4dP72eRkiTQ8I01DkgfbuGIa9IIU4CGkRP4X15HcTQTbT1RPLVWptkDeUS1koffscf22LZe0_4q4g9YrQHYR1mGnXk6JobeP5kwKmdkYZXHwPSYrrVSpO5kQcDSO8UzFeIJ2zxNR5FmYJYkOGKDdw9CXFkjzfvxstPgjHoJihWegcI5ODKZ_oeUUhSkwjyQT0loQ1fmVe452NO3r_uOsWqpgwc4YbBplc-_LmXj9WkVuIC4rreABUQ',
  //jwt_refresh_token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InJ2MSJ9.eyJzdWIiOiJNUSIsInVzZXJuYW1lIjoibWFoamZpdCIsImVtYWlsIjoibWFoamZpdGdhbWVAZ21haWwuY29tIiwicm9sZV9pZCI6MCwidHlwZSI6InJlZnJlc2hfdG9rZW4iLCJpYXQiOjE3ODEzMjgwODYsImV4cCI6MTc4MTkzMjg4NiwiYXVkIjoiQXBwbGljYXRpb24iLCJpc3MiOiJUSEFUU0VORCJ9.EsQA75AU-gclTKZt-9Z0xfc_5K40XKfW-zG62uNslctJNcM8uKfp-GjVsIjaIsnUif_Sj58G6uT61ugbVQrVmV1T2GnUKa_GR22L-MbyPV-_3WiRWTfxSCNddeUj_ZC8UUKP5l5HwjxdphOJktipPTsWcEO_s-uqdDCxXhB0KcW2iyrmesdLvXY5jKQSszfxbIularVp9t0HXBRyj11a3kDQ7VvDAdH4vkNokaaZXmHRF_lWyjTsWgk9o7XtWwSant7FsosReJAFbjiPJEraPrB9PyVC8U9chsHeL6XJwv-Pn9W85YB1PZjeG5w3clhgFfU39E_jCd1hyUs5HjInxg',
  jwt_access_token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImF2MSJ9.eyJzdWIiOiJNUSIsInVzZXJuYW1lIjoibWFoamZpdCIsImVtYWlsIjoibWFoamZpdGdhbWVAZ21haWwuY29tIiwicm9sZV9pZCI6MCwidHlwZSI6ImFjY2Vzc190b2tlbiIsImlhdCI6MTc4MTMyODA4NiwiZXhwIjoxNzgxNDE0NDg2LCJhdWQiOiJBcHBsaWNhdGlvbiIsImlzcyI6IlRIQVRTRU5EIn0.T7mrvLLDkdEgR8-qtyC_Hczx34VVIlkMIWDD8-4FRZv1682I4aO_Cmmn3I9QQ__Vw8fuQVUdmAZ2Jxz8J7MOFx4eqp3cshfE4dP72eRkiTQ8I01DkgfbuGIa9IIU4CGkRP4X15HcTQTbT1RPLVWptkDeUS1koffscf22LZe0_4q4g9YrQHYR1mGnXk6JobeP5kwKmdkYZXHwPSYrrVSpO5kQcDSO8UzFeIJ2zxNR5FmYJYkOGKDdw9CXFkjzfvxstPgjHoJihWegcI5ODKZ_oeUUhSkwjyQT0loQ1fmVe452NO3r_uOsWqpgwc4YbBplc-_LmXj9WkVuIC4rreABUQ',
  jwt_refresh_token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InJ2MSJ9.eyJzdWIiOiJNUSIsInVzZXJuYW1lIjoibWFoamZpdCIsImVtYWlsIjoibWFoamZpdGdhbWVAZ21haWwuY29tIiwicm9sZV9pZCI6MCwidHlwZSI6InJlZnJlc2hfdG9rZW4iLCJpYXQiOjE3ODEzMjgwODYsImV4cCI6MTc4MTkzMjg4NiwiYXVkIjoiQXBwbGljYXRpb24iLCJpc3MiOiJUSEFUU0VORCJ9.EsQA75AU-gclTKZt-9Z0xfc_5K40XKfW-zG62uNslctJNcM8uKfp-GjVsIjaIsnUif_Sj58G6uT61ugbVQrVmV1T2GnUKa_GR22L-MbyPV-_3WiRWTfxSCNddeUj_ZC8UUKP5l5HwjxdphOJktipPTsWcEO_s-uqdDCxXhB0KcW2iyrmesdLvXY5jKQSszfxbIularVp9t0HXBRyj11a3kDQ7VvDAdH4vkNokaaZXmHRF_lWyjTsWgk9o7XtWwSant7FsosReJAFbjiPJEraPrB9PyVC8U9chsHeL6XJwv-Pn9W85YB1PZjeG5w3clhgFfU39E_jCd1hyUs5HjInxg',
  
};
// Tokens live in the AuthSession (per-domain) rather than the auth API client.
api.rest.authSession.initializeTokens(authTokens);
api.graphql.authSession.initializeTokens(authTokens);

// Optional: stateful user JWT (single token string) for `statefulauthorization` header
// statefulauthorization: Bearer <token>
// const statefulJwt = 'eyJ...';
api.rest.statefulAuthSession.setToken(authTokens.jwt_access_token);
api.graphql.statefulAuthSession.setToken(authTokens.jwt_access_token);

class trialUniversal{
  constructor(){
     //api.graphql.use(Country);
    // api.graphql.use(BusinessReview);
     api.graphql.use(BotLevel) ;
     //api.graphql.use(BotProfile);

     
  }
  async find(){
    /* const find = await api.graphql.botProfile.find({
      filter: {
        order: {
          id: RecordSortDirectionEnum.DESC,
        },
      },
      selection: {
        rows: {
          id: true,
          title: true,
          active: true,
          botlvl_id: true,
          fr_bot_level: {
            id: true,
            title: true
          },
          created: true,
          updated: true,
          deleted: true,
        },
      },
    }); */
    const find = await api.graphql.botLevel.find({
      filter:{
        order:{
          id: RecordSortDirectionEnum.DESC,
        }
      },
      selection: {
        rows: {
          id: true,
          title: true,
          created: true,
          fr_bot_profiles: {
            id: true,
            title: true
          },
          updated: true,
          deleted: true,
        },
      },
    })
  }
  
  async create(){
    const response = await api.graphql.botLevel.create({
      input: [
        {
          title: "Level 1",
          mode: BotLevelModeEnum.EASY,
        },
      ],
  
      selection: {
        id: true,
        title: true,
        active: true,
        created: true,
        updated: true,
        deleted: true,
      },
    });
  
    return response;
  }

  async update(){
    const response = await api.graphql.botLevel.update({
      input: {
        sets: {
          
          title: "Level 121",
          mode: BotLevelModeEnum.EASY,
        },
        where: {
          id: {
            equal: "11"
          }
        }
        
      },
  
      selection: {
        affectedRows: {
          id: true,
          title: true,
          mode: true,
          created: true,
          updated: true,
          deleted: true,
        }
      },
    });
  
    return response;
  }

  async delete() {
    const response = await api.graphql.botLevel.delete({
      input: {
        where: {
          id: {
            equal: "4"
          }
        }
      },
  
      selection: {
        affected: true
      },
    });
  
    return response;
    
  }
}

try{
  const trial = new trialUniversal();

  //const result = trial.subregionfind();
  //const result = await trial.find();
  //const result = await trial.create();
  //const result = await trial.update();
  const result = await trial.delete();
  //const result = await trial.find2();
  console.log("--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@--");
  console.log("--@@@@@@@@@ trial.mjs  @@@@@@@@@--");
  console.log("--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@--");
  console.log(result)
}
catch(e){
  console.log("ERROR++++++++++++++++++++")
  console.log(e.message);
  console.log(e.errors());
}