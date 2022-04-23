import Link from 'next/link';

export default function Home() {
  return (
      <div>
        <h1>Next Js pre-rendered page</h1>
        <Link href="/users">
          <a>Users</a>
        </Link>
        <br />
      <Link href="/posts">
        <a>Posts</a>
      </Link>
     </div>
  );
}
