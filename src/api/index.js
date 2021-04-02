import axios from "axios";
import awsmobile from "@/aws-exports";

const AWS_USER_POOLS_WEB_CLIENT_ID = awsmobile.aws_user_pools_web_client_id;
const userId = localStorage.getItem(
  `CognitoIdentityServiceProvider.${AWS_USER_POOLS_WEB_CLIENT_ID}.LastAuthUser`
);
const idToken = localStorage.getItem(
  `CognitoIdentityServiceProvider.${AWS_USER_POOLS_WEB_CLIENT_ID}.${userId}.idToken`
);

export default axios.create({
  baseURL: "https://zy8hyxvb7h.execute-api.us-east-1.amazonaws.com/api/",
  headers: {
    Authorization: `Bearer ${idToken}`
  }
});
