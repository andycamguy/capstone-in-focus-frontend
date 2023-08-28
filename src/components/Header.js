import React from "react";
import Link from "next/link";
import { useGlobalState } from "../context/GlobalState";
import { useRouter } from "next/navigation";


function Header() {
  return (
      <div style={{ backgroundColor: '#333', padding: '10px', color: 'cyan' }}>
          <div>
              <h1>Header</h1>
          </div>
      </div>
  );
}

export default Header;