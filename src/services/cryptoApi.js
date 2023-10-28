// // import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// // const cryptoApiHeaders={
// //     'X-RapidAPI-Key': 'ed4bbd2984mshc42ebadcf8331a4p11cf50jsn76c2d4abd12d',
// //     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
// // }
// // const baseUrl='https://coinranking1.p.rapidapi.com/coins';
// // const createRequest=(url)=>({url,headers:cryptoApiHeaders});
// // export const cryptoApi=createApi({
// //     reducerPath:'cryptoApi',
// //     baseQuery:fetchBaseQuery({baseUrl}),
// //     endpoints:(builder)=>({
// //         getCryptos:builder.query({
// //             query:()=>createRequest('/coins')
// //         })
// //     })
// // });
// // export const{
// //     useGetCryptosQuery,
// // }=cryptoApi;
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// // Crypto API Headers
// const cryptoApiHeaders = {
//   "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
//   "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
// };

// // Base URL
// const baseUrl = "https://coinranking1.p.rapidapi.com";

// // Make API Request
// const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

// // Crypto API Redux Logic
// export const cryptoApi = createApi({
//   reducerPath: "cryptoApi",
//   baseQuery: fetchBaseQuery({ baseUrl }),
//   endpoints: (builder) => ({
//     // get cryptocurrencies
//     getCryptos: builder.query({
//       query: (count) => createRequest(`/coins?limit=${count}`),
//     }),
//     // get crypto details
//     getCryptoDetails: builder.query({
//       query: (coinId) => createRequest(`/coin/${coinId}`),
//     }),
//     // get crypto history
//     getCryptoHistory: builder.query({
//       query: ({ coinId, timePeriod }) =>
//         createRequest(`coin/${coinId}/history?timePeriod=${timePeriod}`),
//     }),
//   }),
// });

// // Export Crypto API
// export const {
//   useGetCryptosQuery,
//   useGetCryptoDetailsQuery,
//   useGetCryptoHistoryQuery,
// } = cryptoApi;
import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeader={
  'X-RapidAPI-Key': '7d3fe17c69msh049c275c93b3332p1a3673jsn70feed33cb25',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'

}

const baseUrl='https://coinranking1.p.rapidapi.com'

const createRequest = (url) =>({url, headers:cryptoApiHeader})

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder) => ({
    getCryptoList: builder.query({
      query: (count)=>createRequest(`/coins?limit=${count}`)
    }),
    getCryptoDetails: builder.query({
      query: (coinId)=>createRequest(`/coin/${coinId}`)
    }),
    getCryptoHistory: builder.query({
      query: ({coinId,timePeriod})=>createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`),
      
    }),
    getExchanges: builder.query({
      query: ()=>createRequest(`/exchanges`),
      
    }),

  })
})


export const {useGetCryptoListQuery,useGetCryptoDetailsQuery,useGetCryptoHistoryQuery,useGetExchangesQuery} = cryptoApi