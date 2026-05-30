import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Bright Horizon House Cleaning",
    tagline: "Sparkling Clean Homes, Every Time.",
    phone: "(209) 644-9328",
    phoneHref: "tel:+12096449328",
    email: "info@brighthorizoncleaning.com",
    address: "209 Eagle Ct, Modesto, CA 95350, USA",
    city: "Modesto",
    serviceAreas: ["Modesto"],
    license: undefined,
    since: "2020", // Estimated based on review dates
    google_rating: "5",
    review_count: "2",
    emergency: false,
    theme: "slate",
    niche: "cleaning",
  },

  services: [
    { icon: "home", title: "Deep Cleaning", desc: "Thorough, detailed cleaning for a truly refreshed home.", urgent: false },
    { icon: "clock", title: "Weekly / Bi-Weekly Cleaning", desc: "Regular cleaning schedules to maintain a consistently tidy space.", urgent: false },
    { icon: "truck", title: "Move In / Move Out Cleaning", desc: "Comprehensive cleaning services for seamless transitions.", urgent: false },
    { icon: "briefcase", title: "Commercial Cleaning", desc: "Professional cleaning solutions for businesses and offices.", urgent: false },
    { icon: "hammer", title: "Post-Construction Cleaning", desc: "Removing dust and debris after renovations for a pristine finish.", urgent: false },
    { icon: "star", title: "Airbnb Turnover Cleaning", desc: "Efficient and reliable cleaning to prepare your rental for new guests.", urgent: false }
  ],

  testimonials: [
    { name: "Aleah Andamon Manalundong", location: "Modesto, CA", stars: 5, text: "Vacation rental cleaning services were so convenient, and I’m grateful for their fast response! I submitted a quote on Friday afternoon and responded to my inquiry first thing Saturday morning. By Sunday noon, the team was at our door! Everyone was kind and easy to work with, and a freshly cleaned home is peace of mind for two working parents of an eight-month-old!" },
    { name: "Basit Ali", location: "Modesto, CA", stars: 5, text: "They are always consistent whenever I have my house cleaned. Easily the best local residential cleaning company I've hired. They come early, get things done, and does a thorough job with it." }
  ],

  trustBadges: [
    "Licensed & Insured", "5-Star Rated", "Flexible Scheduling", "Eco-Friendly Products"
  ],

  stats: [
    { value: 5.0, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 2, label: "Reviews", suffix: "+", decimals: 0 },
    { value: 4, label: "Years Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "sparkles", title: "Eco-Friendly Products", desc: "We use safe, effective, and environmentally conscious cleaning solutions." },
    { icon: "shield-check", title: "Background-Checked Cleaners", desc: "Our team is thoroughly vetted for your peace of mind and security." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "We stand by our work; your happiness is our top priority." },
    { icon: "clock", title: "Flexible Scheduling", desc: "We work around your busy life, offering convenient appointment times." },
    { icon: "award", title: "Bonded & Insured", desc: "Fully protected for your property and our team's safety." },
    { icon: "phone", title: "Easy Online Booking", desc: "Schedule your cleaning service quickly and effortlessly online." }
  ],

  formServiceOptions: ["Deep Cleaning", "Weekly / Bi-Weekly Cleaning", "Move In / Move Out Cleaning", "Commercial Cleaning", "Post-Construction Cleaning", "Airbnb Turnover Cleaning"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!