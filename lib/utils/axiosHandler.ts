import { getSession } from "./cookies";

export async function apiRequest<T>(
  config: RequestInit & {
    url: string;
    data?: any;
  }
): Promise<{ success: boolean; data?: T; message: string }> {
  try {
    const session = await getSession();
    const datas = session.token.split(",between,");
    const token = datas[0];
    const headers: HeadersInit = {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };

    const requestOptions: RequestInit = {
      ...config,
      headers: {
        ...headers,
        ...(config.headers || {}),
      },
    };

    if (config.data && config.method !== "GET") {
      requestOptions.body = JSON.stringify(config.data);
    }

    const response = await fetch(`${config.url}`, requestOptions);

    const responseData = await response.json();

    let message: string = "An unexpected error occurred.";

    if (responseData && typeof responseData === "object") {
      const { message: msg } = responseData;

      if (typeof msg === "string") {
        message = msg;
      } else if (Array.isArray(msg)) {
        message = msg
          .map((err: any) => {
            if (
              typeof err === "object" &&
              err.field &&
              Array.isArray(err.messages)
            ) {
              return `${err.field}: ${err.messages.join(", ")}`;
            }
            return JSON.stringify(err);
          })
          .join(" | ");
      } else {
        message = "An error occurred: " + JSON.stringify(responseData);
      }
    }

    return {
      success: response.ok,
      data: response.ok ? responseData : undefined,
      message,
    };
  } catch (error: any) {
    const message = error?.response?.data
      ? Object.keys(error.response.data)[0] +
        " : " +
        Object.values(error.response.data)[0]
      : error.message || "An unexpected error occurred";

    return {
      success: false,
      message,
    };
  }
}

export default { apiRequest };
