// src/services/Api.tsx
import { BASE_URL } from "./Config";

const defaultHeaders: Record<string, string> = {
  "Content-Type": "application/json",
};

export const apiRequest = async (endpoint: string, method: string = "GET", body: any = null, timeout: number = 30000): Promise<any> => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
 
  try {
    const options: RequestInit = {
      method,
      headers: defaultHeaders,
      signal: controller.signal,
    };

    if (body) options.body = JSON.stringify(body);
 
    const response = await fetch(`${BASE_URL}${endpoint}`, options);
    clearTimeout(timeoutId);
 
    let data;
    try {
      data = await response.json();
    } catch (jsonError) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
 
    if (!response.ok) {
      throw new Error(data.message || "API Error");
    }
 
    return data;
  } catch (error) {
    clearTimeout(timeoutId);
    if ((error as Error).name === 'AbortError') {
      console.error(`❌ API ${method} ${endpoint} failed: Request timeout`);
      throw new Error('Request timeout');
    }
    console.error(`❌ API ${method} ${endpoint} failed:`, (error as Error).message);
    throw error;
  }
};

export const directapiRequest = async (endpoint: string, method: string = "GET", body: any = null, timeout: number = 30000): Promise<any> => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
 
  try {
    const options: RequestInit = {
      method,
      headers: defaultHeaders,
      signal: controller.signal,
    };

    if (body) options.body = JSON.stringify(body);
 
    const response = await fetch(`${endpoint}`, options);
    clearTimeout(timeoutId);
 
    let data;
    try {
      data = await response.json();
    } catch (jsonError) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
 
 
    return data;
  } catch (error) {
    clearTimeout(timeoutId);
    if ((error as Error).name === 'AbortError') {
      console.error(`❌ API ${method} ${endpoint} failed: Request timeout`);
      throw new Error('Request timeout');
    }
    console.error(`❌ API ${method} ${endpoint} failed:`, (error as Error).message);
    throw error;
  }
};

export const sendToFieldAssist = async (
  endpoint: string,
  payload: any,
  timeout: number = 30000
): Promise<string> => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...defaultHeaders,
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    // Always return raw text response
    return await response.text();

  } catch (error) {
    clearTimeout(timeoutId);

    if ((error as Error).name === "AbortError") {
      return "Request timeout";
    }

    return (error as Error).message;
  }
};


 
// helper methods for cleaner code
export const get = (endpoint: string) => apiRequest(endpoint, "GET");
export const post = (endpoint: string, body: any) => apiRequest(endpoint, "POST", body);
export const directpost = (endpoint: string, body: any) => directapiRequest(endpoint, "POST", body);
export const put = (endpoint: string, body: any) => apiRequest(endpoint, "PUT", body);
export const del = (endpoint: string) => apiRequest(endpoint, "DELETE");

export const sendToFA = (endpoint: string, payload: any) => sendToFieldAssist(endpoint, payload);
