import styles from './styles/footer.module.scss'

export default function Footer() {
  return (
    <div className={styles.footer}>

        <div className={styles.main_footer}>
          <div className={styles.footer_copyright}>
            <p>&copy; 2020 by MAGI, All rights reserved.</p>
          </div>
        </div>
    </div>
  )
}
