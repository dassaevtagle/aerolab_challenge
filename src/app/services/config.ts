import { environment } from "src/environments/environment";

export const requestOptions = {
  headers: {
    authorization: `Bearer ${environment.apiKey}`,
    "content-type": "application/json",
    accept: "application/json",
  },
};
export const baseUrl = environment.aerolabApiUrl;
