import dynamic from 'next/dynamic';
import SecondaryBanner from '@/components/common/SecondaryBanner';
const ContactForm = dynamic(() => import('../project-details/ContactForm'));
const ContactCard = dynamic(() => import('./ContactCard'));

const ContactWrapper = () => {
  return (
    <>
      <SecondaryBanner 
        title="Get In Touch"
        subtitle="We are here to assist you"
        badge="24/7 CUSTOMER ASSISTANCE"
        imageSrc="/assets/images/banners/contact-banner.jpg"
      />
      <ContactCard />
      <ContactForm title="Contact Us" subtitle="We're here to help!" />
    </>
  )
}


export default ContactWrapper
