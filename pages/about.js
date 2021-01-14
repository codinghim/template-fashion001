import Image from 'next/image'
import styles from '../styles/pages/about.module.scss'
import Layout from '../components/layout'

export default function About() {
  return (
    <Layout>
      <section className={styles.about_section}>
        <div className={styles.intro_container}>
          <div className={styles.image_container}>
            <Image
              src="/images/about/about.jpg"
              objectFit="contain"
              objectPosition="center"
              layout="fill"/>
          </div>
          <div className={styles.text_container}>
          <p>This is your about page. Place any content that describes yourself as a fashion designer here. Lorem Ipsum
              sed auctor tortor sollicitudin ut. Duis orci metus, interdum sit amet nulla sed.</p>
          </div>
        </div>
        <div className={styles.divider}></div>
        <section className={styles.details_container}>
          <article>
            <h2 className={styles.detail_title}>Clients / Collaborations (Minor Details)</h2>
            <p>Add some details for your minor details section here! You can include links to external site or include more page navigation. Lorem Ipsum.</p>
            <ul>
              <li>Lucid</li>
              <li>Exquizit</li>
              <li>Suburban</li>
              <li>Magi</li>
            </ul>
          </article>
          <article>
          <h2 className={styles.detail_title}>Awards (Minor Details)</h2>
          <p>Add some details for your minor details section here! You can include links to external site or include more page navigation. Lorem Ipsum.</p>
          <ul>
            <li>NYC Fashion Design Contest, 2019.</li>
          </ul>
          </article>
          <article>
          <h2 className={styles.detail_title}>Publications (Minor Details)</h2>
          <p>Add some details for your minor details section here! You can include links to external site or include more page navigation. Lorem Ipsum.</p>
          <ul>
            <li>NYC Times Fashion Design Contest First Place Article</li>
            <li>Medium Blog Posts</li>
          </ul>
          </article>
        </section>
      </section>
    </Layout>
  )
}
