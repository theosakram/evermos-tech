import nextGetConfig from "next/config";

interface Config {
  serverRuntimeConfig: {
    defaultURL: string;
  };
  publicRuntimeConfig: {
    defaultSource: string;
  };
}

export const getEnv = () => nextGetConfig() as Config;
