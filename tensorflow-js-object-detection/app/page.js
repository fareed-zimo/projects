import ObjectDetection from "@/components/ObjectDetection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="gradient-title font-extrabold text-6xl text-center">
        Bad Person Detection
      </h1>
      <ObjectDetection />
    </main>
  );
}
