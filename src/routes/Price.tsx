import { useQuery } from "react-query";

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface ChartProps {
  coinId: string;
}
function Price({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
  );
    return (
      <div>
        {isLoading ? (
          "Loading price..."
        ) : (
              data?.map((price) => <tr>{price.close}</tr>)
        )}
      </div>
    );
  }
  
  export default Price;