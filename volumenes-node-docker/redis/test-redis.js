import { createClient } from "redis";

const testDataRedis = async () => {
  const client = createClient({
    url: "redis://:@172.18.0.3:6379",
  });

  client.on("error", (err) => console.log("Redis Client Error", err));

  await client.connect();

  await client.set("name", "Manuel Baella");
  const value = await client.get("name");
  console.log("value", value);
};

testDataRedis();
