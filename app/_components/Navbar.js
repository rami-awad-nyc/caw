import NavbarLink from "./NavbarLink"

export default function Navbar () {
  return (
    <div className="navbar justify-center bg-base-100 shadow-sm space-x-1">
      <NavbarLink href="/" name="Home"/>
      <NavbarLink href="/about" name="About"/>
      <NavbarLink href="/contact" name="Contact"/>
    </div>
  )
}
