import Link from "next/link";


export default async function HomePage() {
  
  return (
    <main>
      <h1>Esta es una Lista de usuarios mas recurrentes en mi web</h1>
      <Link href={'/users'}>Quieres verlos?</Link>
    </main>
  );
}

