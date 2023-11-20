
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import MainLayout from '../components/layouts/MainLayout';



export default function Contacts() {
  return (
    <>
    <MainLayout>
    <h1>Contacts Page</h1>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>

        <h1>Go Home</h1>
          <Link href="/">Contacts</Link>
        </div>
    </MainLayout>
    </>
  )
}
