import axios from "axios";

export const fetchApi = async (params) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/${params?.route}/${params?.id}`,
    {
      params: {
        _page: params?.page,
        _limit: params?.limit,
        _sort: params?.sortType,
        _order: params?.order,
      },
    },
  );
  return response.data;
};
