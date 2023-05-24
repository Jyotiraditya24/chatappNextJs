import { redis } from "@/lib/db";

export default async function Home() {
  redis.set("key", 10);
  redis.set("key2",20);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      HELLO
    </main>
  );
}
