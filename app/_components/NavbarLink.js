import Link from "next/link";

export default function NavbarLink({href, name}) {
  return (
    <Link href={href}>
      <button className="btn btn-accent">{name}</button>
    </Link>
  )
}
