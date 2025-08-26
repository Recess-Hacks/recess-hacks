"use client"

import React from "react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

type Sponsor = {
  name: string
  tier: "platinum" | "gold" | "silver" | "bronze"
  logo: string
  url: string
}

const sponsors: Sponsor[] = [
  {
    name: ".xyz",
    tier: "bronze",
    logo: `xyz.png`,
    url: "https://www.gen.xyz"
  },
  {
    name: "Vue School",
    tier: "bronze",
    logo: `Vue.png`,
    url: "https://vueschool.io"
  },
  {
    name: "Sublime Text",
    tier: "silver",
    logo: `Sublime-Text.png`,
    url: "https://www.sublimetext.com"
  },
  {
    name: "Sticker Giant",
    tier: "bronze",
    logo: `Sticker-Giant.png`,
    url: "https://www.stickergiant.com"
  },
  {
    name: "CleanShot",
    tier: "bronze",
    logo: `Cleanshot.png`,
    url: "https://getcleanshot.com"
  },
  {
    name: "Interview Cake",
    tier: "platinum",
    logo: `interview-cake.png`,
    url: "https://interviewcake.com"
  },
  {
    name: "Code Crafters",
    tier: "gold",
    logo: `Code-Crafters.png`,
    url: "https://codecrafters.io"
  },
  {
    name: "NordVPN",
    tier: "silver",
    logo: `NordVPN.png`,
    url: "https://nordvpn.com/hackathons"
  },
  {
    name: "NordProtect",
    tier: "bronze",
    logo: `NordProtect.png`,
    url: "https://nordprotect.com/"
  },
  {
    name: "NordPass",
    tier: "bronze",
    logo: `NordPass.png`,
    url: "https://nordpass.com/"
  },
  {
    name: "Incogni",
    tier: "bronze",
    logo: `Incogni.png`,
    url: "https://incogni.com/"
  },
  {
    name: "Saily",
    tier: "bronze",
    logo: `Saily.png`,
    url: "https://saily.com/"
  },
  {
    name: "AoPS",
    tier: "bronze",
    logo: `Aops.png`,
    url: "https://artofproblemsolving.com"
  },
  {
    name: "Leading Aces Academy",
    tier: "platinum",
    logo: `Leading-Aces.png`,
    url: "https://www.leadingaces.com/"
  },
  {
    name: "Nodalli",
    tier: "gold",
    logo: `Nodalli.png`,
    url: "https://www.nodalli.com/"
  },
  {
    name: "Nexos",
    tier: "gold",
    logo: `Nexos.png`,
    url: "https://nexos.ai/"
  }
];

function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  const logoSrc = `/sponsors/${sponsor.logo}`
  const [src, setSrc] = React.useState(logoSrc)

  return (
    <a
      key={sponsor.name}
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${sponsor.name} – ${sponsor.tier} sponsor`}
      className="flex items-center justify-center p-6 sm:p-8 bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <img
        src={src || "/placeholder.svg"}
        alt={`${sponsor.name} logo`}
        className="h-12 sm:h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
        width={160}
        height={64}
        onError={() => setSrc("/placeholder.svg?height=64&width=160")}
      />
    </a>
  )
}

export default function Sponsors() {
  let delayCounter = 0
  const getDelay = () => {
    const delay = delayCounter
    delayCounter += 150
    return delay
  }

  const byTier = (tier: Sponsor["tier"]) => sponsors.filter((s) => s.tier === tier)

  return (
    <section className="py-16 bg-transparent" id="sponsors">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Sponsors</h2>

        <ScrollReveal delay={0}>
          <h3 className="text-lg text-center mb-8 text-black max-w-4xl mx-auto">
            Become a part of Canada{"'"}s premier high school hackathon. Your support helps inspire the next generation
            of innovators and leaders in technology. Looking to make an impact? Email us at{" "}
            <span className="text-blue-600">sponsorships@recesshacks.ca</span>.
          </h3>
        </ScrollReveal>

        <div className="space-y-16">
          {/* Platinum */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-8 text-purple-600">Platinum</h3>
            <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
              {byTier("platinum").map((sponsor) => (
                <ScrollReveal key={sponsor.name} delay={getDelay()}>
                  <SponsorCard sponsor={sponsor} />
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Gold */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-8 text-yellow-600">Gold</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {byTier("gold").map((sponsor) => (
                <ScrollReveal key={sponsor.name} delay={getDelay()}>
                  <SponsorCard sponsor={sponsor} />
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Silver */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-8 text-gray-600">Silver</h3>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {byTier("silver").map((sponsor) => (
                <ScrollReveal key={sponsor.name} delay={getDelay()}>
                  <SponsorCard sponsor={sponsor} />
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Bronze (added) */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-8 text-amber-700">Bronze</h3>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
              {byTier("bronze").map((sponsor) => (
                <ScrollReveal key={sponsor.name} delay={getDelay()}>
                  <SponsorCard sponsor={sponsor} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
