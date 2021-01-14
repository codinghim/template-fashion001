import Layout from '../components/layout'
import styles from '../styles/pages/contact.module.scss'

export default function Contact() {
  return (
    <Layout>
      <section className={styles.contact_section}>
        <h1 data-aos="zoom-in" className={styles.contact_header}>Contact</h1>

        <p className={styles.contact_intro_text}>Open to business inquiries and collaborations!</p>
        <div className={styles.contact_form_container}>
          <div className={styles.contact_form} data-aos="zoom-out">

              <input className={styles.input_text} type="text"  placeholder="Name"/>
              <input className={styles.input_text} type="email" placeholder="E-mail"/>

            <input className={styles.input_text_subject} type="text" placeholder="Subject"/>
            <textarea className={styles.input_textarea} placeholder="Message"/>
            <button className={styles.input_btn}>Send</button>
          </div>
        </div>
        <h2 className={styles.bold}>Based in New York City</h2>
        <sub>1004-1004 Madison Ave</sub>
        <sub>New York, NY 10040</sub>
        <h1 className={styles.bold}>123-456-7890 | elizabethspades@email.com</h1>
      </section>
    </Layout>
  )
}
