  
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavLink({ children, href }) {
  const router = useRouter();

  const activeClasses =
    router.pathname === href
      ? 'border-red-500 focus:border-red-100'
      : 'border-transparent hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300';

  return (
    <Link href={href}>
      <a
        className={`inline-flex items-center justify-center w-32 border-b-2 text-black focus:outline-none ${activeClasses} transition duration-150 ease-in-out`}
      >
        {children}
      </a>
    </Link>
  );
}