import Dashboard from "@/components/dashboard";
import { Session } from "next-auth";
import { auth } from "@/auth";

export default async function Home() {
  const session: Session | null = await auth();

  const user = session?.user;

  return <div>{user && <Dashboard session={session || null} />}</div>;
}
