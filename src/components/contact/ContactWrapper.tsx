import dynamic from 'next/dynamic';
import ContactBanner from './ContactBanner'
const ContactForm = dynamic(() => import('./ContactForm'));
const ContactCard = dynamic(() => import('./ContactCard'));

const ContactWrapper = () => {
  return (
    <>
      <ContactBanner />
      <ContactCard />
      <ContactForm />
    </>
  )
}

export default ContactWrapper
