import fetcher from "./fetcher";
import useSWR from "swr";

function useVehicles({ url }) {
  const { data: vehicles, error: vehiclesError } = useSWR(url, fetcher);
  return { vehicles, vehiclesError };
}
export default useVehicles;
