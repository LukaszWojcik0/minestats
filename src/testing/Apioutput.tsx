import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import ServerPing from "./ServerPing";
import ServerMotd from "./ServerMotd";
import WsOutput from "./WsOutput";

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

export default function ApiOutput({
  ip,
  password,
}: {
  ip: string;
  password: string;
}) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ServerInfo ip={ip} password={password} />
      </QueryClientProvider>
    </>
  );
}

function ServerInfo({ ip, password }: { ip: string; password: string }) {
  const { isPending, isError, data, error } = useQuery<ServerData>({
    queryKey: ["serverData", ip],
    queryFn: () =>
      fetch("http://localhost:5000/status", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ip }),
      }).then((res) => {
        if (!res.ok) throw new Error("Błąd serwera");
        return res.json();
      }),
    refetchInterval: 200,
    enabled: !!ip,
  });

  if (isPending) return <span>Loading...</span>;

  if (isError)
    return <span>An error with REST API has occurred: {error.message}</span>;
  // console.log(data);

  return (
    <>
      <div className="w-full  bg-[url(dark-mode/side-texture3.png)] bg-contain border-b-4  border-[#20150d] mb-10">
        <div className="flex w-full p-3 ">
          <img
            src={data.icon}
            alt="data.icon"
            className="w-[128px] h-[128px]"
          />
          <div className="flex w-full ">
            <div className="w-4/5">
              <div className="w-max mx-auto">
                <ServerMotd motd={data.motd} />
              </div>
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

      {data.online != 0 && (
        <>
          <WsOutput ip={ip} password={password} />
        </>
      )}
    </>
  );
}
