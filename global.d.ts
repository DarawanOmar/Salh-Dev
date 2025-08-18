type searchParamsType = Promise<{
  [key: string]: string | string[] | undefined;
}>;

type SearchParamsTypeUse = {
  searchParams: searchParamsType;
};
type ParamsTypeUse = {
  params: paramsType;
};

type ResponseData<T> = {
  data: T;
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    per_page: number;
    to: number;
    total: number;
  };
};
