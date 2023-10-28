import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoNewsApiHeader={
    
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': '7d3fe17c69msh049c275c93b3332p1a3673jsn70feed33cb25',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
      
}

const baseUrl='https://coinranking1.p.rapidapi.com'

const createRequest = (url) =>({url, headers:cryptoNewsApiHeader})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
      getCryptoNews: builder.query({
        query: ({newsCategory,count})=>createRequest(`/news/search?q=${newsCategory}&safeSearch=off&textFormat=Raw&freshness=Day&count=${count}`)
      }),
    })
  })


  export const {useGetCryptoNewsQuery}=cryptoNewsApi