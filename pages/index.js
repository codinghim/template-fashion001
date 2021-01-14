import Image from 'next/image'
import styles from '../styles/pages/home.module.scss'


import Layout from '../components/layout'
// import { readDir } from '../lib/fileServices'

const homeArr = [
  {
    source: "/images/home/home1.jpg",
    title: "Image Title",
    desc: "Place your desired image description here. Lorem Ipsum."
  },
  {
    source: "/images/home/home2.jpg",
    title: "Image Title",
    desc: "Place your desired image description here. Lorem Ipsum."
  }
]

export default function Home() {
  return (
    <Layout>
      <section>
      <div className={styles.background}>
        <p data-aos="zoom-in" className={styles.intro_subtext}>&quot;Fashion is the armor to survive the reality of everyday life.&quot;</p>
        <p>- Bill Cunningham</p>
      </div>
      <section className={styles.text_section}>
        <article data-aos="zoom-out" className={styles.text}>
          <p>Detailed description of the work you provide along with other details. Sed auctor tortor sollicitudin ut. Duis orci metus, interdum sit amet nulla sed.</p>
          <q className={styles.quote}>Optional Quote or Phrase. Lorem Ipsum.</q>
        </article>
      </section>

      <section className={styles.images_section}>
        <article className={styles.images_subsection}>
          <div data-aos="zoom-in" className={styles.image_text_container}>
            <h1 className={styles.extra_title}>Contemporary Design</h1>
            <h2 className={styles.image_title}>Desired Image Title</h2>
            <div className={styles.divider}></div>
            <p className={styles.image_subtext}>
              Place your desired image description here. Lorem Ipsum
              sed auctor tortor sollicitudin ut. Duis orci metus, interdum sit amet nulla sed.
            </p>
          </div>
          <div className={styles.section_image}>
            <Image
            data-aos="slide-left"

            src="/images/home/home1.jpg"
            objectFit="cover"
            objectPosition="center"
            layout="fill"/>
          </div>

        </article>
      </section>

      <section className={styles.text_section}>
        <article data-aos="zoom-out" className={styles.text}>
          <p style={{fontWeight: "bold", fontSize: "1.1rem"}}>
            Place some extra content you wish to display on your home page! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec pulvinar leo. Nam vestibulum feugiat finibus.
          </p>
          <ul>
            <li>Graduated Fashion Institute of Technology with a degree in Fashion Design, 2020.</li>
            <li>Recieved an award for NYC Fashion Design Contest, 2019.</li>
            <li>Collaborations with well-known brands such as Exquizit, Lucid, Suburban, and Magi.</li>
          </ul>
        </article>
      </section>

      <section className={styles.images_section}>
      <article className={styles.images_subsection}>
          <div className={styles.section_image}>
            <Image
            data-aos="slide-right"

            src="/images/home/home2.jpg"
            objectFit="cover"
            objectPosition="center"
            layout="fill"/>
          </div>
          <div data-aos="zoom-in" className={styles.image_text_container}>
          <h1 className={styles.extra_title}>Artistic Fashion</h1>
            <h2 className={styles.image_title}>Desired Image Title</h2>
            <div className={styles.divider}></div>
            <p className={styles.image_subtext}>
              Place your desired image description here. Lorem Ipsum
              sed auctor tortor sollicitudin ut. Duis orci metus, interdum sit amet nulla sed.
            </p>
          </div>
        </article>
      </section>

      <section className={styles.text_section}>
        <article data-aos="zoom-out" className={styles.text}>
          <p>
            Optional conclusion text of your home page, if desired. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec pulvinar leo. Nam vestibulum feugiat finibus. Pellentesque sed vestibulum massa. Nulla facilisi. Nunc luctus, libero ut fringilla commodo.
          </p>
        </article>
      </section>
      </section>
    </Layout>
  )
}
