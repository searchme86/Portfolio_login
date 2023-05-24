declare namespace NodeJS {
  interface ProcessEnv {
    MONGO_URL: string;
    ACCESS_TOKEN_SECRET: string;
    REFRESH_TOKEN_SECRET: string;
    PORT: string;
  }
}
