import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import MainLayout from '../../components/layouts/MainLayout';
import DarkLayouts from '../../components/layouts/DarkLayouts';

import { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app';

const Pricing: NextPageWithLayout = () => {
    return (
        <>
      
              <h1>Pricing Page</h1>
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

Pricing.getLayout = function getLayout(children: React.ReactNode) {
  return (
   
      <MainLayout>
        <DarkLayouts>{children}</DarkLayouts>
      </MainLayout>
    
  )
}

export default Pricing;