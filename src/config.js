export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_ia7siLMbc9oCQmOyGI9YxLbJ",
    s3: {
      REGION: "ap-southeast-2",
      BUCKET: "serverless-notes-app-uploads-moss"
    },
    apiGateway: {
      REGION: "ap-southeast-2",
      URL: "https://jts417vbpb.execute-api.ap-southeast-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "ap-southeast-2",
      USER_POOL_ID: "ap-southeast-2_eLKi0GgOv",
      APP_CLIENT_ID: "6t72itbvv0v6ikucvbn17d23g4",
      IDENTITY_POOL_ID: "ap-southeast-2:b49aa4e1-3676-4133-9d7b-31e6d67de427"
    }
  };