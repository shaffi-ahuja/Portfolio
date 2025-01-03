import React from 'react'
import Image from 'next/image'
import ContactForm from './ui/ContactForm'

const ContactMe = () => {
  return (
    <section className='section-container pt-10 xs:px-5' id='ContactMe'>
      <div className='mail-header-image'>
        <Image src="/contactMeHeader.png"
          alt='mailHeaderImage'
          height={10}
          width={2480}
          className='w-full'
        />
        <ContactForm />
      </div>
    </section>
  )
}

export default ContactMe