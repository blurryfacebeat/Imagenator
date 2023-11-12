import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function HomePage() {
  const [message, setMessage] = useState('No message found');

  useEffect(() => {
    window.ipc.on('message', (message: string) => {
      setMessage(message);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Imagenator</title>
      </Head>
      <div>
        <p>
          ⚡ Electron + Next.js ⚡ -
          <Link href="/next">
            <a>Go to next page</a>
          </Link>
        </p>
        <Image
          src="/images/logo.png"
          alt="Logo image"
          width="256px"
          height="256px"
        />
      </div>
      <div>
        <button
          onClick={() => {
            window.ipc.send('message', 'Hello');
          }}
        >
          Test IPC
        </button>
        <p>{message}</p>
      </div>
    </>
  );
}
