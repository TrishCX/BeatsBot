declare global {
  namespace NodeJS {
    interface ProcessEnv {
      botToken: string;
      guildId: string;
      mongoDBConnectionURI: string;
      environment: "dev" | "prod" | "debug";
    }
  }
}

export {};
