import dynamic from "next/dynamic";

const AScene = dynamic(() => import("@/components/AScene"), { ssr: false });

export default function Home() {
  return (
    <div>
      <AScene />
    </div>
  );
}
