import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-1 flex items-center">
            <Link href="/" className="absolute left-5 p-2">
              <Image src="/img/logo.png" alt="Olivia's Kitchen Logo"  width={90} height={40} />
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="/" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            {/* <Link href="/" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
}