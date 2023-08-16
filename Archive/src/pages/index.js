import Link from "next/link";

export default function Page() {
    return <div>
      <h1>Home page JDH</h1>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/about">about</Link>
    </div>
  }