import NavbarLink from "./NavbarLink"

export default function Navbar () {
  return (
    <nav className="space-x-1 m-2 flex justify-center">
      <NavbarLink href="/" name="Home"/>
      <NavbarLink href="/about" name="About"/>
      <NavbarLink href="/contact" name="Contact"/>
    </nav>
  )
}
