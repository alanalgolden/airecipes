import axios from "axios";

export const getGpt35TurboChatCompletion = async (data, instructions) => {
  const apiKey = import.meta.env.VITE_OPEN_AI_API_KEY;

  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-3.5-turbo",
      messages: [
        { role: "user", content: data },
        { role: "system", content: instructions },
      ],
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );

  return response.data.choices[0].message.content;
};

export const getGpt4ChatCompletion = async (data) => {
  const apiKey = import.meta.env.VITE_OPEN_AI_API_KEY;

  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-4",
      messages: [{ role: "user", content: props }],
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );

  return response.data.choices[0].text;
};

export const getGpt432kChatCompletion = async (data) => {
  const apiKey = import.meta.env.VITE_OPEN_AI_API_KEY;

  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-4-32k",
      messages: [{ role: "user", content: props }],
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );

  return response;
};
