import Link from "next/link";

export default function Navbar(){

    return(
    <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">NextJS Techincal Training</h1>
        <ul className="lg:flex lg:space-x-4">
          <li>
            <Link href="/" className="text-white hover:text-gray-300">
              About Me
            </Link>
          </li>
          <li>
            <Link href="/api" className={"text-white hover:text-gray-300"}>
              API
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    )
}