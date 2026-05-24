import Testimonials from "../common/Testimonials";

interface ProjectTestimonialProps {
  autoplay?: boolean;
}

const ProjectTestimonial = ({ autoplay = false }: ProjectTestimonialProps) => {
  return <Testimonials autoplay={autoplay} titleAlign="center" />;
};

export default ProjectTestimonial;
