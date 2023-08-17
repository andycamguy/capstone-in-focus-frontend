import Link from "next/link";
import CameraBody from "../../components/CameraBody";

export default function Page() {
    return <div>
    <h1>Project In-Focus </h1>
    <Link href="/">Home</Link>
    <Link href="/about">Teach me more</Link>
    <CameraBody />
  </div>
  }