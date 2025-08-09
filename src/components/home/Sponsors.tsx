import React from 'react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import Image from "next/image";

const sponsors = [
  {
    name: ".xyz",
    tier: "silver",
    logo: `xyz.png`,
    url: "https://www.gen.xyz",
    notes: "12 .xyz domains — code: RCH25"
  },
  {
    name: "Vue School",
    tier: "bronze",
    logo: `vueschool.png`,
    url: "https://vueschool.io",
    notes: "1 yearly Vue School license + 1 monthly Vue School license (email after event for the prize)"
  },
  {
    name: "Sublime Text",
    tier: "bronze",
    logo: `sublime-text.png`,
    url: "https://www.sublimetext.com",
    notes: "Up to 5 Sublime Text or Merge licenses"
  },
  {
    name: "Sticker Giant",
    tier: "silver",
    logo: `sticker-giant.png`,
    url: "https://www.stickergiant.com",
    notes: "Coupon code: EVENTSTICKERS30 (30% off next purchase)"
  },
  {
    name: "CleanShot",
    tier: "bronze",
    logo: `cleanshot.png`,
    url: "https://getcleanshot.com",
    notes: "CleanShot X licenses — 12 total"
  },
  {
    name: "Interview Cake",
    tier: "bronze",
    logo: `interview-cake.png`,
    url: "https://interviewcake.com",
    notes: "12 × 1-month Interview Cake licenses"
  },
  {
    name: "Code Crafters",
    tier: "platinum",
    logo: `codecrafters.png`,
    url: "https://codecrafters.example/",
    notes: "Prizes: 1st — 2-year VIP; 2nd — 1-year VIP; 3rd — 6-month VIP"
  },
  {
    name: "NordVPN",
    tier: "gold",
    logo: `nordvpn.png`,
    url: "https://nordvpn.com",
    notes: "1-year subscriptions + 1GB of free data for 6 winners"
  },
  {
    name: "AoPS",
    tier: "silver",
    logo: `Aops.png`,
    url: "https://artofproblemsolving.com",
    notes: "4 × $25 coupons"
  },
  {
    name: "Lead Aces Academy",
    tier: "bronze",
    logo: `lead-aces.png`,
    url: "https://leadaces.example/",
    notes: "150 × $50 voucher coupons for courses"
  },
  {
    name: "Nodalli",
    tier: "platinum",
    logo: `nodalli.png`,
    url: "https://nodalli.example/",
    notes: "Premium subscription to their AI platform"
  }
];
 
 const Sponsors = () => {

  let delayCounter = 0;

  const getDelay = () => {
    const delay = delayCounter;
    delayCounter += 150;
    return delay;
  };

   return (
     <section className="py-16 bg-transparent" id='sponsors'>
       <div className="container mx-auto px-4">
         <h2 className="text-4xl font-bold text-center mb-12">Our Sponsors</h2>

         <ScrollReveal delay={0}>
          <h3 className="text-lg text-center mb-8 text-black max-w-4xl mx-auto">Become a part of Canada's premier high school hackathon. Your support helps inspire the next generation of innovators and leaders in technology. Looking to make an impact? Email us at <span className='text-blue-600'>sponsorships@recesshacks.ca</span>.</h3>
         </ScrollReveal>
         
         <div className="space-y-16">
           {/* Platinum Sponsors */}
           <div>
             <h3 className="text-2xl font-semibold text-center mb-8 text-purple-600">Platinum</h3>
             <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
               {sponsors
                 .filter(sponsor => sponsor.tier === "platinum")
                 .map(sponsor => (
                  <ScrollReveal key={sponsor.name} delay={getDelay()}>
                    <a
                      key={sponsor.name}
                      href={sponsor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-8 bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <img
                        src={`/sponsors/${sponsor.logo}`}
                        alt={`${sponsor.name} logo`}
                        className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                        width={80} 
                        height={80}
                      />
                    </a>
                  </ScrollReveal>
                 ))}
             </div>
           </div>
 
           {/* Gold Sponsors */}
           <div>
             <h3 className="text-2xl font-semibold text-center mb-8 text-yellow-600">Gold</h3>
             <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
               {sponsors
                 .filter(sponsor => sponsor.tier === "gold")
                 .map(sponsor => (
                  <ScrollReveal key={sponsor.name} delay={getDelay()}>
                    <a
                      key={sponsor.name}
                      href={sponsor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <img
                        src={`/sponsors/${sponsor.logo}`}
                        alt={`${sponsor.name} logo`}
                        className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                        width={80} 
                        height={80}
                      />
                    </a>
                  </ScrollReveal>
                 ))}
             </div>
           </div>
 
           {/* Silver Sponsors */}
           <div>
             <h3 className="text-2xl font-semibold text-center mb-8 text-gray-600">Silver</h3>
             <div className="grid grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
               {sponsors
                 .filter(sponsor => sponsor.tier === "silver")
                 .map(sponsor => (
                  <ScrollReveal key={sponsor.name} delay={getDelay()}>
                   <a
                     key={sponsor.name}
                     href={sponsor.url}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                   >
                     <img
                        src={`/sponsors/${sponsor.logo}`}
                        alt={`${sponsor.name} logo`}
                        className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                        width={80} 
                        height={80}
                     />
                   </a>
                  </ScrollReveal>
                 ))}
             </div>
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export default Sponsors;
