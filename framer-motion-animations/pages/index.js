import HomeComponent from "@/components/home-component";
import MouseTrackingEffect from "@/components/mouse-tracking-effect";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-black overflow-hidden">
      <HomeComponent />
      {/* <MouseTrackingEffect /> */}
    </div>
  );
}
