
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import MainLayout from '../components/layouts/MainLayout';
import DarkLayouts from '../components/layouts/DarkLayouts';

import { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'

// const  About: NextPageWithLayout = () => {
  const About: NextPageWithLayout = () => {
  return (
  <>

        <h1>About Page</h1>
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
          <Link href="/">Home</Link>
        </div>
  </>
  )
}

About.getLayout = function getLayout(children: React.ReactNode) {
  return (
   
      <MainLayout>
        <DarkLayouts>{children}</DarkLayouts>
      </MainLayout>
    
  )
}

export default About;
