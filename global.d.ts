declare namespace NodeJS {
  interface ProcessEnv {
    readonly SECRET_VARIABLE: string;
    readonly SLACK_OAUTH_TOKEN: string;
  }
}
