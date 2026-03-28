import dynamic from 'next/dynamic';
import ContactBanner from './ContactBanner'
const ContactForm = dynamic(() => import('../project-details/ContactForm'));
const ContactCard = dynamic(() => import('./ContactCard'));

const ContactWrapper = () => {
  return (
    <>
      <ContactBanner />
      <ContactCard />
      <ContactForm title="Contact Us" subtitle="We're here to help!" />
    </>
  )
}

export default ContactWrapper
