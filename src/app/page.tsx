import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-3 items-center justify-center h-screen">
      <Link href={"/basic-of-motion"}>Basic Of Motion</Link>
      <Link href={"/gestures"}>Gestures</Link>
      <Link href={"/animation-control"}>Animation Control</Link>
      <Link href={"/view-base-animation"}>View Base Animation</Link>
      <Link href={"/scroll-animation"}>Scroll Animation</Link>
    </div>
  );
}
