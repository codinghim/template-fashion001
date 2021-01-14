import Layout from '../components/layout'
import Image from 'next/image'
import styles from '../styles/pages/lookbook.module.scss'
import {motion, AnimateSharedLayout, AnimatePresence} from 'framer-motion'
import {useState} from 'react'

const imgArr = [
  {
    source: "/images/lookbook/lookbook1.jpg",
    style: styles.section_image_1
  },
  {
    source: "/images/lookbook/lookbook2.jpg",
    style: styles.section_image_2
  },
  {
    source: "/images/lookbook/lookbook3.jpg",
    style: styles.section_image_3
  },
  {
    source: "/images/lookbook/lookbook4.jpg",
    style: styles.section_image_4
  },
  {
    source: "/images/lookbook/lookbook5.jpg",
    style: styles.section_image_5
  },
  {
    source: "/images/lookbook/lookbook6.jpg",
    style: styles.section_image_6
  },
  {
    source: "/images/lookbook/lookbook7.jpg",
    style: styles.section_image_7
  },
  {
    source: "/images/lookbook/lookbook8.jpg",
    style: styles.section_image_8
  }
]

export default function Lookbook() {
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = (e) => {
    setShowModal(!showModal)
    let modalContainer = document.getElementById("modalContainer")
    let currentModal = document.getElementById(e.target.alt)
    currentModal.className = styles.modal_container_active
    modalContainer.className=styles.modal_section_active

  }

  const handleCloseModal = (e) => {
    setShowModal(!showModal)
    let modalContainer = document.getElementById("modalContainer")
    let currentModal = document.getElementsByClassName(styles.modal_container_active)
    currentModal[0].className = styles.modal_container
    modalContainer.className=styles.modal_section
  }

  const modalVariant = {
    initial: {
      opacity: 0
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5
      }
    },
    idle: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1
      }
    },
  }

  const imageVariant = {
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5
      }
    },
    idle: {
      scale: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.5
      }
    },
  }
  const imageTitleVariant = {
    idle: {
      opacity: 0,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }
  return (
    <Layout>
      <AnimatePresence>
      <motion.section variants={modalVariant}
        initial="initial"
        animate="idle"
        exit="exit"
        id="modalContainer"
        key="modal" className={styles.modal_section}>
          {imgArr.map((image, i)=>{
            return (
              <div key={i} id={`image${i}`} className={styles.modal_container}>
                <div className={styles.modal_img_container}>
                  <div className={styles.img_container}>
                  <Image
                    src={image.source}
                    objectFit="contain"
                    objectPosition="center"
                    layout="fill"/>
                  </div>

                </div>
                <div className={styles.modal_text_container}>
                  <div className={styles.text_container}>
                    <h1 className={styles.modal_image_title}>Image Title</h1>
                    <p>Place your desired image description here. It is also possible to place links to other pages or even other websites.Lorem Ipsum.</p>
                    <motion.div className={styles.modal_close_btn} onClick={()=>handleCloseModal()}>
                    <Image src={'/icons/close.svg'} width={30} height={30}/>
                  </motion.div>
                  </div>
                </div>
              </div>
            )
          })}
          {/* <button className={styles.modal_next_btn}>
            Next
          </button>
          <button className={styles.modal_prev_btn}>
            Previous
          </button> */}
        </motion.section>


      {
        !showModal && (
          <motion.section className={styles.lookbook_section}>
            {imgArr.map((image, i)=> {
              return (
              <motion.div

                onClick={(e)=>{handleShowModal(e)}}
                variants={imageVariant}

                key={i}
                initial="idle"
                animate="idle"
                exit="exit"
                whileHover="hover"
                className={image.style}>
                <Image
                  priority="true"

                  alt={`image${i}`}
                  src={image.source}
                  objectFit="cover"
                  objectPosition="center"
                  layout="fill"/>

                <motion.div
                  variants={imageTitleVariant}
                  className={styles.image_title_container}>
                  <p className={styles.image_title}>Image Title</p>
                </motion.div>

            </motion.div>
          )
        })}
          </motion.section>
        )
      }
      </AnimatePresence>


    </Layout>
  )
}
