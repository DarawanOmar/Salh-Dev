import { getSession } from "./cookies";

export async function apiRequest<T>(
  config: RequestInit & {
    url: string;
    data?: any;
    locale: string;
  }
): Promise<{ success: boolean; data?: T; message: string }> {
  try {
    console.log("Locale config in apiRequest:", config.locale);
    const session = await getSession();
    const datas = session.token.split(",between,");
    const token = datas[0];
    const headers: HeadersInit = {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      "x-lang": config.locale === "kr" ? "ckb" : config.locale,
    };

    const requestOptions: RequestInit = {
      ...config,

      headers: {
        ...headers,
        ...(config.headers || {}),
      },
    };

    // Attach body if data is provided and the method is not GET
    if (config.data && config.method !== "GET") {
      requestOptions.body = JSON.stringify(config.data);
    }

    const response = await fetch(`${config.url}`, requestOptions);

    const responseData = await response.json();

    let message: string;

    if (responseData && typeof responseData === "object") {
      message = !!Object.keys(responseData).length
        ? String(responseData[Object.keys(responseData)[0]])
        : "Success but no data";
    } else {
      message = String(responseData);
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
