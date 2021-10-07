/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
type CommonEnvsType = {
  ENVIRONMENT: string | undefined;
  BASE_URL: string | undefined;
};

const commonEnvs: CommonEnvsType = {
  ENVIRONMENT: process.env.ENVIRONMENT,
  BASE_URL: process.env.BASE_URL,
};

const config: Record<string, any> = Object.freeze({
  local: {
    ...commonEnvs,
  },
  development: {
    ...commonEnvs,
  },
  staging: {
    ...commonEnvs,
  },
  production: {
    ...commonEnvs,
  },
});

export default config[commonEnvs.ENVIRONMENT!];
