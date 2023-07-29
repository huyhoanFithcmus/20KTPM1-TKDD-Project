import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const spotify = createApi({
  reducerPath: 'spotify',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://spotify81.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        '1149133f22mshd9a7715f5f7667ap16812ajsn18d89a6cef70'
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => '/top_200_tracks?date=2023-07-27',
    }),
  }),
});

export const { useGetTopChartsQuery } = spotify;
