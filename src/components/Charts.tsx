import { useData } from '../hooks/useData';
import { Data } from '../types/types';
import { Chart } from './Chart';
import styles from './styles.module.css';

export const Charts = () => {
  const {
    chartsContainer,
    chartContainer,
    chartsWrapper,
  } = styles

  const { filteredData, isLoading, isError, mockData } = useData('https://api.multifarm.fi/jay_flamingo_random_6ix_vegas/get_assets?pg=1&tvl_min=50000&sort=tvlStaked&sort_order=desc&farms_tvl_staked_gte=10000000', 'ETH_Sushiswap_USDC-WETH_exchange')
  
  return (
    <div className={chartsContainer}>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error!</p>}
      {filteredData && filteredData.map((item: Data , index: number) => {
        return (
          <div className={chartsWrapper} key={index}>
            <div className={chartContainer}>
              <Chart data={item.dailyAPRHistorical} title='Asset APR (d)'/>
            </div>
            <div className={chartContainer}>
              <Chart data={mockData} title='Asset TVL' />
            </div>
          </div>
        )}
      )}
    </div>
  )
}
