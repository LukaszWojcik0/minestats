import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import ServerPing from "./ServerPing";

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
    // fetch("/mock/status.json").then((res) => res.json()),

    refetchInterval: 500,
  });

  if (isPending) return <span>Loading...</span>;

  if (isError)
    return <span>An error with REST API has occurred: {error.message}</span>;

  return (
    <>
      <div className="w-full  bg-[url(dark-mode/side-texture3.png)] bg-contain border-b-4  border-[#20150d] mb-10">
        <div className="flex w-full p-3 ">
          <img
            src="{data.icon}"
            alt="data.icon"
            className="w-[128px] h-[128px]"
          />
          <div className="flex w-full ">
            <div className="w-4/5">
              <p className="w-max mx-auto">{data.motd}</p>
            </div>
            <div className="ml-auto">
              <div className="w-max flex">
                <p className="mt-auto mx-3">
                  {data.online}/{data.max}
                </p>
                <ServerPing ping={data.ping} />
                <p className="w-16 mt-auto text-center">{data.ping} ms</p>
              </div>
              <p className="text-center my-1">Version: {data.version}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
