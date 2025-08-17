export const api = `${process.env.NEXT_PUBLIC_API_URL}/`;

export const EndPoints = {
  login: `${api}auth/login`,
  register: `${api}auth/register`,
  logout: `${api}auth/logout`,
  report: {
    getReport: (
      storage: string,
      money_type: string,
      date: string,
      date_picker: string
    ) => {
      const queryParams = [];

      if (money_type) {
        queryParams.push(`money_type=${money_type}`);
      }
      if (date) {
        queryParams.push(`date=${date}`);
      }
      if (date_picker) {
        const [startDate, endDate] = date_picker.split("to");
        queryParams.push(`from=${startDate}&to=${endDate}`);
      }
      const queryString =
        queryParams.length > 0 ? `&${queryParams.join("&")}` : "";
      return `${api}report?storage=${storage}${queryString}`;
    },
  },
};
