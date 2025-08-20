export const api = `${process.env.NEXT_PUBLIC_API_URL}/`;

export const EndPoints = {
  login: `${api}auth/login`,
  register: `${api}auth/register`,
  logout: `${api}auth/logout`,
  dashboard: `${api}dashboard`,
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
    getWithoutPagination: `${api}head-members`,
    getById: (id: string) => `${api}head-members/${id}`,
    add: `${api}head-members`,
    update: (id: string) => `${api}head-members/${id}`,
    delete: (id: string) => `${api}head-members/${id}`,
  },
  cash_safe: {
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
      return `${api}safe?page=${page}&per_page=10${queryString}`;
    },
    getWithoutPagination: `${api}safe`,
    getById: (id: string) => `${api}safe/${id}`,
    add: `${api}safe`,
    update: (id: string) => `${api}safe/${id}`,
    delete: (id: string) => `${api}safe/${id}`,
  },
  documents: {
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
      return `${api}documents?page=${page}&per_page=10${queryString}`;
    },
    getWithoutPagination: `${api}documents`,
    getById: (id: string) => `${api}documents/${id}`,
    add: `${api}documents`,
    update: (id: string) => `${api}documents/${id}`,
    delete: (id: string) => `${api}documents/${id}`,
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
  head_members: {
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
    getWithoutPagination: `${api}head-members`,
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
    getWithoutPagination: `${api}committee-members`,

    getById: (id: string) => `${api}committee-members/${id}`,
    add: `${api}committee-members`,
    update: (id: string) => `${api}committee-members/${id}`,
    delete: (id: string) => `${api}committee-members/${id}`,
  },
  recived_money: {
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
      return `${api}money-receives?page=${page}&per_page=10${queryString}`;
    },
    getWithoutPagination: `${api}money-receives`,
    getById: (id: string) => `${api}money-receives/${id}`,
    add: `${api}money-receives`,
    update: (id: string) => `${api}money-receives/${id}`,
    delete: (id: string) => `${api}money-receives/${id}`,
  },
  money_given: {
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
      return `${api}money-given?page=${page}&per_page=10${queryString}`;
    },
    getWithoutPagination: `${api}money-given`,
    getById: (id: string) => `${api}money-given/${id}`,
    add: `${api}money-given`,
    update: (id: string) => `${api}money-given/${id}`,
    delete: (id: string) => `${api}money-given/${id}`,
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
      return `${api}roles?page=${page}&per_page=10${queryString}`;
    },
    getWithoutPagination: `${api}roles`,
    getById: (id: string) => `${api}roles/${id}`,
    add: `${api}roles`,
    update: (id: string) => `${api}roles/${id}`,
    delete: (id: number) => `${api}roles/${id}`,
  },
};
