import Link from "next/link";

export default function NavbarLink({href, name}) {
  return (
    <Link href={href}>
      <button className="btn btn-ghost text-xl">
        {name}
      </button>
    </Link>
  )
}
