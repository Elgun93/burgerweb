'use client';

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";


const NotFoundPage = () => {

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);

  return (
    <div className='not-found'>
        <h1>Oh..</h1>
        <h2>Not found page</h2>
        <p>Go to the <Link href='/'>Main page</Link> after 3 seconds.</p>
    </div>
  )
}

export default NotFoundPage;
