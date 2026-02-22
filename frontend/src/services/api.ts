import axios from "axios";

const API_BASE_URL =  "http://localhost:10000";

export interface ChatRequest {
  message: string;
}

export interface ChatResponse {
  reply: string;
}

export const sendChatMessage = async (
  message: string
): Promise<ChatResponse> => {
  const response = await axios.post<ChatResponse>(
    `${API_BASE_URL}/api/chat`,
    { message } satisfies ChatRequest,
    {
      headers: { "Content-Type": "application/json" },
      timeout: 30000,
    }
  );
  return response.data;
};
