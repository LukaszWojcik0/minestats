import { autoToHTML } from "@sfirew/minecraft-motd-parser";

type ServerMotdData = {
  motd: string;
};

export default function ServerMotd({ motd }: ServerMotdData) {
  return <div dangerouslySetInnerHTML={{ __html: autoToHTML(motd) }} />;
}
