export type ResponseData = {
  data: Data[],
  max_pages: number,
}

export type Data = {
  dailyAPRHistorical: DailyAPRHistorical[],
  assetId: string,
}

export type DailyAPRHistorical = {
  date: string,
  value: number,
}

export type ChartProps = {
  data: DailyAPRHistorical[];
  title: string,
}
