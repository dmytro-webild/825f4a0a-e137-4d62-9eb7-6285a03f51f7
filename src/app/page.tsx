"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Award, CheckCircle, Smartphone, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="compact"
        sizing="large"
        background="aurora"
        cardStyle="glass-elevated"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "home",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Portfolio",
          id: "portfolio",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Webber"
    />
  </div>

  <div id="home" data-section="home">
      <HeroBillboardTestimonial
      background={{
        variant: "plain",
      }}
      title="Build Your Business Online with Webber"
      description="Premium websites designed to grow local businesses."
      testimonials={[
        {
          name: "Sarah Miller",
          handle: "@client",
          testimonial: "Webber transformed our online presence. Professional, sleek, and high-converting.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-posing-shadow_23-2149551249.jpg",
        },
        {
          name: "James Chen",
          handle: "@client",
          testimonial: "The best investment for our brand growth. Minimalist design done right.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-middle-aged-man-with-beard-hairstyle-dressed-elegant-blue-suit-textured-dark-background-studio_613910-19853.jpg",
        },
        {
          name: "Elena Ross",
          handle: "@client",
          testimonial: "Stellar work. Our engagement increased by 200% since launch.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-successful-businessman-thinking-posing-beige-wall_176420-144.jpg",
        },
        {
          name: "Mark D.",
          handle: "@client",
          testimonial: "Luxury look with fast delivery. Highly recommended.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-bald-senior-dressed-stylish-suit-posing-against-dark-background_613910-17578.jpg",
        },
        {
          name: "Lisa G.",
          handle: "@client",
          testimonial: "Efficient, modern, and perfectly aligned with our business goals.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-beautiful-woman-shooting-with-projector_23-2149424925.jpg",
        },
      ]}
      buttons={[
        {
          text: "Get Started",
          href: "https://www.instagram.com/armanthnx",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/3d-rendering-holographic-layering_23-2150491098.jpg"
      imageAlt="luxury dark minimal abstract background"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-handsome-man-orange-background_23-2149020024.jpg",
          alt: "Portrait of handsome man over orange background",
        },
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-portrait-teenager-woman_23-2149453354.jpg",
          alt: "Beautiful portrait of teenager woman",
        },
        {
          src: "http://img.b2bpic.net/free-photo/bearded-black-man-wearing-suit-felt-hat_613910-1878.jpg",
          alt: "Bearded black man wearing a suit and a felt hat.",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-handsome-confident-businessman-black-wall_176420-3460.jpg",
          alt: "Portrait of handsome confident businessman over black wall",
        },
        {
          src: "http://img.b2bpic.net/free-photo/redhead-female-supervisor-dressed-elegant-suit-grey-background_613910-10394.jpg",
          alt: "Redhead female supervisor dressed in an elegant suit over grey background.",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "Premium Design",
        },
        {
          type: "text",
          text: "High Performance",
        },
        {
          type: "text",
          text: "Responsive Layouts",
        },
        {
          type: "text",
          text: "Luxury Branding",
        },
        {
          type: "text",
          text: "SEO Optimized",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Our Mission"
      description={[
        "Webber empowers local businesses to establish a powerful, high-converting digital presence through modern design. We craft luxury experiences that turn visitors into loyal customers.",
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentySeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          id: "s1",
          title: "Custom Website Design",
          descriptions: [
            "High-end, unique designs that reflect your brand identity.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-gradient-background-shades-gray-red-orange_272375-26309.jpg",
        },
        {
          id: "s2",
          title: "Business Landing Pages",
          descriptions: [
            "Conversion-focused pages built to drive sales and leads.",
          ],
          imageSrc: "http://img.b2bpic.net/free-vector/abstract-lineal-shapes-landing-page_23-2148211334.jpg",
        },
        {
          id: "s3",
          title: "Portfolio Websites",
          descriptions: [
            "Elegant showcases built to highlight your work and expertise.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/young-pregnant-woman-work_23-2149292810.jpg",
        },
      ]}
      title="Our Professional Services"
      description="Tailored web solutions designed to elevate your brand and drive results."
    />
  </div>

  <div id="portfolio" data-section="portfolio">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Luxury Boutique Site",
          price: "View Project",
          variant: "Web Design",
          imageSrc: "http://img.b2bpic.net/free-psd/fashion-design-landing-page-template_23-2149545211.jpg",
        },
        {
          id: "p2",
          name: "Professional Law Firm",
          price: "View Project",
          variant: "Web Design",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-laptop-with-blank-white-screen-isolated-black-background-close-up_169016-62684.jpg",
        },
        {
          id: "p3",
          name: "Creative Studio Hub",
          price: "View Project",
          variant: "Web Design",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-stacks-papers-documents_23-2151118326.jpg",
        },
        {
          id: "p4",
          name: "Tech Startup Platform",
          price: "View Project",
          variant: "Web Design",
          imageSrc: "http://img.b2bpic.net/free-photo/web-page-design-user-interface-template-copy-space_53876-120721.jpg",
        },
        {
          id: "p5",
          name: "Local Bistro Web",
          price: "View Project",
          variant: "Web Design",
          imageSrc: "http://img.b2bpic.net/free-photo/business-director-working-her-own-office-with-green-screen_482257-122590.jpg",
        },
        {
          id: "p6",
          name: "Fashion Brand Store",
          price: "View Project",
          variant: "Web Design",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-graphic-design-office_23-2151345421.jpg",
        },
      ]}
      title="Featured Projects"
      description="A glimpse into our recent luxury website transformations."
    />
  </div>

  <div id="why-us" data-section="why-us">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          icon: Award,
          title: "Luxury Design",
          value: "100%",
        },
        {
          id: "m2",
          icon: Zap,
          title: "Fast Delivery",
          value: "3d",
        },
        {
          id: "m3",
          icon: Smartphone,
          title: "Mobile Optimized",
          value: "100%",
        },
        {
          id: "m4",
          icon: CheckCircle,
          title: "Conversion Focused",
          value: "Yes",
        },
      ]}
      title="Why Webber?"
      description="The difference between an average business and an exceptional digital brand."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Sarah Miller",
          handle: "@client",
          testimonial: "Webber is top-tier. Exceptional talent and vision.",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-business-woman-posing_23-2149457762.jpg",
        },
        {
          id: "t2",
          name: "James Chen",
          handle: "@client",
          testimonial: "The best web developer in the local scene. Incredible work.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-posing-studio-front-view_23-2149424942.jpg",
        },
        {
          id: "t3",
          name: "Elena Ross",
          handle: "@client",
          testimonial: "My business revenue jumped thanks to their design.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-young-man-posing-spotlight_23-2151915999.jpg",
        },
        {
          id: "t4",
          name: "Mark D.",
          handle: "@client",
          testimonial: "Sophisticated, fast, and very professional process.",
          imageSrc: "http://img.b2bpic.net/free-photo/thinking-looking-up-middle-aged-man-wearing-white-t-shirt-with-tie-isolated-pink-wall_141793-83634.jpg",
        },
        {
          id: "t5",
          name: "Lisa G.",
          handle: "@client",
          testimonial: "Professionalism at its best. Loved the site.",
          imageSrc: "http://img.b2bpic.net/free-photo/black-white-woman-with-hood_1122-502.jpg",
        },
      ]}
      title="Client Feedback"
      description="What our clients are saying about our design process."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Get in touch"
      title="Ready to grow your business online?"
      description="Let's build something exceptional together."
      buttonText="Contact Now"
      onSubmit={(email) => window.location.href = 'https://www.instagram.com/armanthnx'}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Webber"
      leftLink={{
        text: "© 2024 Webber",
        href: "#",
      }}
      rightLink={{
        text: "@armanthnx",
        href: "https://www.instagram.com/armanthnx",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
