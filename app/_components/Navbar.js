import NavbarLink from "./NavbarLink";
import Image from "next/image";
import Link from "next/link";

export default function Navbar () {
  return (
    <div className="navbar bg-base-100 shadow-sm h-16 px-4">
      <div className="navbar-start" />

      <div className="navbar-center space-x-4">
        <NavbarLink href="/" name="Home" />
        <NavbarLink href="/media" name="Media" />
        <NavbarLink href="/links" name="Links" />
        <NavbarLink href="/documents" name="Documents" />
        <NavbarLink href="/contact" name="Contact" />
      </div>

      <div className="navbar-end">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="CAW Logo"
            width={100}
            height={100}
            className="object-contain ml-2"
          />
        </Link>
      </div>
    </div>
 )
}
