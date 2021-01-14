import Navbar from './navbar'
import Footer from './footer'
import Head from 'next/head'
import styles from './styles/layout.module.scss'
import {motion} from 'framer-motion'

export default function Layout({children, router}) {

  return (
    <>
      <Head>
        <title>Fashion Portfolio</title>
        <link rel="icon" type="image/png" href="/fashion-design.png"/>

        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&amp;display=swap" rel="stylesheet"/>

        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&amp;display=swap" rel="stylesheet"/>

        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Redressed&amp;display=swap" rel="stylesheet"/>
      </Head>
      <Navbar />
        <motion.div
        initial={{ scale:1, opacity: 0 }}
        animate={{ scale:1,opacity: 1 }}
        exit={{opacity:0}}
        transition={{duration: 0.5 }}
        className={styles.root_container}>
          {children}
        </motion.div>
      <Footer />
    </>
  )
}
