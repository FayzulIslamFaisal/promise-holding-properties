import dynamic from 'next/dynamic';
import PageBanner from '@/components/common/PageBanner';
const ContactForm = dynamic(() => import('../project-details/ContactForm'));
const ContactCard = dynamic(() => import('./ContactCard'));

const ContactWrapper = () => {
  return (
    <>
      <PageBanner 
        title="Contact Us"
        subtitle="contact our team of professionals for support"
        imageSrc="/assets/images/contact/banner.jpg"
      />
      <ContactCard />
      <ContactForm title="Contact Us" subtitle="We're here to help!" />
    </>
  )
}


export default ContactWrapper
