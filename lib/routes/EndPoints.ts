import { get } from "http";

export const api = `${process.env.NEXT_PUBLIC_API_URL}/`;

export const EndPoints = {
  login: `${api}auth/login`,
  register: `${api}auth/register`,
  logout: `${api}auth/logout`,
  user: {
    get: (page: string, search: string) => {
      const queryParams = [];

      if (page) {
        queryParams.push(`page=${page}`);
      }
      if (search) {
        queryParams.push(`search=${search}`);
      }

      const queryString =
        queryParams.length > 0 ? `&${queryParams.join("&")}` : "";
      return `${api}users?page=${page}&per_page=10${queryString}`;
    },
    getById: (id: string) => `${api}users/${id}`,
    add: `${api}users`,
    update: (id: string) => `${api}users/${id}`,
    delete: (id: string) => `${api}users/${id}`,
  },
  role: {
    get: `${api}roles`,
    getById: (id: string) => `${api}roles/${id}`,
    add: `${api}roles`,
    update: (id: string) => `${api}roles/${id}`,
    delete: (id: number) => `${api}roles/${id}`,
  },
};
