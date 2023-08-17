import Link from "next/link";
import CameraBody from "../../components/CameraBody";



export default function Page() {
  return (
    <div>
      <h1 className="mb-4">Project In-Focus</h1>
      <div className="mb-3">
        <Link href="/">Home</Link>
      </div>
      <div className="mb-3">
        <Link href="/about">Teach me more</Link>
      </div>
      <CameraBody />
    </div>
  );
}
