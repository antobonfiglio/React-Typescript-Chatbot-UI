//Fake api , we could connect with DialogFlow here for example
import { ApiAiClient } from "api-ai-javascript";
const accessToken = "9119dea946d345a1b345d562ef1ab26c";
const client = new ApiAiClient({ accessToken });

const API = {
  GetBotResponse: async (message: string): Promise<string> => {
    // let response = await client.textRequest(message);
    // return response.result.fulfillment.speech;
      return new Promise<string>(function (resolve, reject) {
    setTimeout(function () {
      if (message === "hi") resolve("Welcome to chatbot!");
      else resolve("echo : " + message);
    }, 2000);
  });
  }
};

export default API;
