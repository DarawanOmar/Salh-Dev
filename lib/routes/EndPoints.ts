export const api = `${process.env.NEXT_PUBLIC_API_URL}/`;

export const EndPoints = {
  login: `${api}auth/login`,
  register: `${api}auth/register`,
  logout: `${api}auth/logout`,
  family_member: {
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
  owning: {
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
      return `${api}owning?page=${page}&per_page=10${queryString}`;
    },
    getById: (id: string) => `${api}owning/${id}`,
    add: `${api}owning`,
    update: (id: string) => `${api}owning/${id}`,
    delete: (id: string) => `${api}owning/${id}`,
  },
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
    getWithoutPagination: `${api}users`,

    getById: (id: string) => `${api}users/${id}`,
    add: `${api}users`,
    update: (id: string) => `${api}users/${id}`,
    delete: (id: string) => `${api}users/${id}`,
  },
  assisted_committee: {
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
      return `${api}head-members?page=${page}&per_page=10${queryString}`;
    },
    getById: (id: string) => `${api}head-members/${id}`,
    add: `${api}head-members`,
    update: (id: string) => `${api}head-members/${id}`,
    delete: (id: string) => `${api}head-members/${id}`,
  },
  assisted_image: {
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
      return `${api}houseImages?page=${page}&per_page=10${queryString}`;
    },
    getById: (id: string) => `${api}houseImages/${id}`,
    add: `${api}houseImages`,
    update: (id: string) => `${api}houseImages/${id}`,
    delete: (id: string) => `${api}houseImages/${id}`,
  },
  assisted: {
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
      return `${api}head-members?page=${page}&per_page=10${queryString}`;
    },
    getById: (id: string) => `${api}head-members/${id}`,
    add: `${api}head-members`,
    update: (id: string) => `${api}head-members/${id}`,
    delete: (id: string) => `${api}head-members/${id}`,
  },
  commitee: {
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
      return `${api}committee-members?page=${page}&per_page=10${queryString}`;
    },
    getWithoutPagination: `${api}head-members`,

    getById: (id: string) => `${api}committee-members/${id}`,
    add: `${api}committee-members`,
    update: (id: string) => `${api}committee-members/${id}`,
    delete: (id: string) => `${api}committee-members/${id}`,
  },
  income_revenue: {
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
      return `${api}moneyReceived?page=${page}&per_page=10${queryString}`;
    },
    getWithoutPagination: `${api}moneyReceived`,
    getById: (id: string) => `${api}moneyReceived/${id}`,
    add: `${api}moneyReceived`,
    update: (id: string) => `${api}moneyReceived/${id}`,
    delete: (id: string) => `${api}moneyReceived/${id}`,
  },
  charitable: {
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
      return `${api}charitables?page=${page}&per_page=10${queryString}`;
    },
    getWithoutPagination: `${api}charitables`,

    getById: (id: string) => `${api}charitables/${id}`,
    add: `${api}charitables`,
    update: (id: string) => `${api}charitables/${id}`,
    delete: (id: string) => `${api}charitables/${id}`,
  },
  role: {
    get: `${api}roles`,
    getById: (id: string) => `${api}roles/${id}`,
    add: `${api}roles`,
    update: (id: string) => `${api}roles/${id}`,
    delete: (id: number) => `${api}roles/${id}`,
  },
};
