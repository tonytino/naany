import Link from 'next/link'

function Nav () {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Static Example Page</a>
        </Link>
      </li>
      <li>
        <Link href="/ssr">
          <a>SSR Example Page</a>
        </Link>
      </li>
      <li>
        <Link href="/dynamicallyLoaded">
          <a>Dynamically-loaded Example Page</a>
        </Link>
      </li>
    </ul>
  )
}

export default Nav
