const getEnvironment = () => {
  switch (process.env.REACT_APP_PROJECT_ENV) {
    case "production":
      return "production";
    case "development":
      return "development";
    default:
      return "";
  }
};

const getBaseUrl = () => {
  switch (process.env.REACT_APP_PROJECT_ENV) {
    case "production":
      return "pokemon/ditto";
    case "development":
      return "pokemon/ditto";
    default:
      return "https://fakestoreapi.com";
  }
};

const getSiteBaseUrl = () => {
  switch (process.env.REACT_APP_PROJECT_ENV) {
    case "production":
      return "";
    case "development":
      return "";
    default:
      return "http://localhost:3000";
  }
};

const Url = {
  baseUrl: getBaseUrl(),
  baseSiteUrl: getSiteBaseUrl(),
};

const config = {
  BASE_URL: `${Url.baseUrl}`,
  environment: getEnvironment(),
  getBaseUrl: getBaseUrl(),
  getSiteBaseUrl: Url.baseSiteUrl,
  backendUrl: Url.backendUrl,
};

export default config;
