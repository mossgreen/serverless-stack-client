const dev = {
    STRIPE_KEY: "pk_test_ia7siLMbc9oCQmOyGI9YxLbJ",
    s3: {
      REGION: "ap-southeast-2",
      BUCKET: "notes-app-2-api-prod-attachmentsbucket-q50uyqil7rpu"
    },
    apiGateway: {
      REGION: "ap-southeast-2",
      URL: "https://3whvflhm0m.execute-api.ap-southeast-2.amazonaws.com/dev"
    },
    cognito: {
      REGION: "ap-southeast-2",
      USER_POOL_ID: "ap-southeast-2_a7LLckX5X",
      APP_CLIENT_ID: "389gbsvh82qc6o87n6o1316r8o",
      IDENTITY_POOL_ID: "ap-southeast-2:4bbd60c4-8506-44f0-a575-f999a0218eee"
    }
  };
  
  const prod = {
    STRIPE_KEY: "pk_test_ia7siLMbc9oCQmOyGI9YxLbJ",
    s3: {
      REGION: "ap-southeast-2",
      BUCKET: "notes-app-2-api-prod-attachmentsbucket-q50uyqil7rpu"
    },
    apiGateway: {
      REGION: "ap-southeast-2",
      URL: "https://3wnuoh1eqk.execute-api.ap-southeast-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "ap-southeast-2",
      USER_POOL_ID: "ap-southeast-2_drM0NMwu4",
      APP_CLIENT_ID: "5mdnjcm2ja3nkq504nk2gv7tlg",
      IDENTITY_POOL_ID: "ap-southeast-2:ca7199e6-7ac8-49b0-884d-a1c807d1b3bd"
    }
  };
  
  // Default to dev if not set
  const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;
  
  export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
  };