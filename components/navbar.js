import Link from 'next/link'
import Image from 'next/image'
import styles from './styles/nav.module.scss'
import {useState} from 'react'
import { motion, AnimatePresence} from 'framer-motion'

export default function Navbar() {
  const [isToggle, setIsToggle] = useState(false)

  const mobileNav = {
    on: {
      opacity: 1,
      display: "flex",
    },
    off: {
      opacity: 0,
      transition: {
        duration: 1
      }
    },
  }
  const item = {
    on: {
      display: 'flex',
      opacity: 1
    },
    off: {
      display: 'none',
      opacity: 0
    }
  }


  return (
      <nav className={styles.nav_bar}>
      <div className={styles.logo_container}>
        <Link href="/">
          <a className={styles.logo}>
            Elizabeth Spades
          </a>
        </Link>
      </div>

      <div className={styles.route_container}>
        <Link href="/about"><a className={styles.route_btn}>About</a></Link>
        <Link href="/lookbook"><a className={styles.route_btn}>Lookbook</a></Link>
        <Link href="/contact"><a className={styles.route_btn}>Contact</a></Link>
        <a className={styles.route_btn} href="https://www.instagram.com/"><img src="/icons/instagram.svg"/></a>
        <a className={styles.route_btn} href="https://twitter.com/"><img src="/icons/twitter.svg"/></a>
      </div>

      <div className={styles.route_container_mobile}>
        <motion.div className={styles.nav_modal} onClick={()=>setIsToggle(!isToggle)}>
          <Image src={`/icons/${isToggle ? 'close' : 'menu'}.svg`} alt="Nav Icon" width={30} height={30}/>
        </motion.div>
      </div>
      <AnimatePresence exitBeforeEnter>
        {isToggle && (
          <motion.div
          initial='off'
          animate='on'
          exit='off'
          variants={mobileNav}
          className={styles.nav_bar_mobile}>
          <Link href="/"><motion.a variants={item} className={styles.route_btn}>Home</motion.a></Link>
          <Link href="/about"><motion.a variants={item} className={styles.route_btn}>About</motion.a></Link>
          <Link href="/lookbook"><motion.a variants={item} className={styles.route_btn}>Lookbook</motion.a></Link>
          <Link href="/contact"><motion.a variants={item} className={styles.route_btn}>Contact</motion.a></Link>
          <motion.a variants={item} href="https://www.instagram.com/" className={styles.route_btn}>Instagram</motion.a>
          <motion.a variants={item} href="https://twitter.com/" className={styles.route_btn}>Twitter</motion.a>
        </motion.div>

        )}
      </AnimatePresence>
    </nav>


  )
}
