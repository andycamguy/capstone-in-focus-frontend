import React from "react";
import Link from "next/link";
import { useGlobalState } from "../context/GlobalState";
import { useRouter } from "next/navigation";

function Header() {
  const [state, dispatch] = useGlobalState();

  return (
    <div>
        <div>
        <h1>Header</h1>
        </div>
    </div>
  );
}

export default Header;