export const api = `${process.env.NEXT_PUBLIC_API_URL}/`;

export const EndPoints = {
  login: `${api}auth/login`,
  register: `${api}auth/register`,
  logout: `${api}auth/logout`,
  dashboard: `${api}dashboard`,
  backup: {
    get: `${api}backup`,
    restore: `${api}backup/restore`,
  },
  notification: {
    get: `${api}notifications`,
    seen: (id: string) => `${api}notifications/${id}/seen`,
  },
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
      return `${api}family-members?page=${page}&per_page=10${queryString}`;
    },
    getById: (id: string) => `${api}family-members/${id}`,
    add: `${api}family-members`,
    update: (id: string) => `${api}family-members/${id}`,
    delete: (id: string) => `${api}family-members/${id}`,
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
      return `${api}ownings?page=${page}&per_page=10${queryString}`;
    },
    getById: (id: string) => `${api}ownings/${id}`,
    add: `${api}ownings`,
    update: (id: string) => `${api}ownings/${id}`,
    delete: (id: string) => `${api}ownings/${id}`,
  },
  user: {
    profile: `${api}profile`,
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
  videos: {
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
      return `${api}videos?page=${page}&per_page=10${queryString}`;
    },
    getWithoutPagination: `${api}videos`,
    getById: (id: string) => `${api}videos/${id}`,
    add: `${api}videos`,
    update: (id: string) => `${api}videos/${id}`,
    delete: (id: number) => `${api}videos/${id}`,
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
    delete: (id: string) => `${api}roles/${id}`,
  },
};
