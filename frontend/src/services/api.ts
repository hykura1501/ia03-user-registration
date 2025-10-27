import { API_BASE_URL } from "@/config/api";

export interface RegisterUserData {
  email: string;
  password: string;
}

export interface RegisterResponse {
  statusCode: number;
  message: string;
  data: {
    _id: string;
    email: string;
    createdAt: string;
  };
}

export const api = {
  register: async (userData: RegisterUserData): Promise<RegisterResponse> => {
    const response = await fetch(`${API_BASE_URL}/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Registration failed");
    }

    return response.json();
  },
};
