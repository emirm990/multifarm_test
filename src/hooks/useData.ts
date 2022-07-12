import useSWR from "swr"
import { DailyAPRHistorical, Data, ResponseData } from "../types/types"

export const useData = (url: string, filter: string) => {
  const fetcher = (url: string) => fetch(url).then((data) => data.json())
  const {data, error}= useSWR<ResponseData>(url, fetcher)
  const filteredData = data?.data.filter((item) => item.assetId === filter)
  const mockData: DailyAPRHistorical[] = require('../mockData.json')
  mockData.forEach((element: DailyAPRHistorical, index: number) => {
    let value = index + index * 5/100
    element.value = value
  });

  return {
    data: data,
    filteredData: filteredData,
    isLoading: !error && !data,
    isError: error,
    mockData,
  }
}