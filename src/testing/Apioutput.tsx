import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { log } from "console";

type ServerData = {
  online: number;
  max: number;
  ping: number;
  version: string;
  motd: string;
  players: string[];
  icon: string;
  address: string;
};

const queryClient = new QueryClient();

export default function ApiOutput() {
  return (
    <QueryClientProvider client={queryClient}>
      <ServerInfo />
    </QueryClientProvider>
  );
}

function ServerInfo() {
  const { isPending, isError, data, error } = useQuery<ServerData>({
    queryKey: ["serverData"],
    queryFn: (): Promise<ServerData> =>
      fetch("http://localhost:5000/status").then((res) => res.json()),
    refetchInterval: 500,
  });

  if (isPending) return <span>Loading...</span>;

  if (isError) return <span>An error has occurred: + {error.message}</span>;

  return (
    <div>
      <h1>
        <span>{data.motd}</span>
      </h1>
      <h2>
        {data.address[0]}:{data.address[1]}
      </h2>
      <span>
        Currently playing: {data.online}/{data.max}
      </span>

      {/* <span>{data.version}</span> */}
    </div>
  );
}
