"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { ScrollReveal } from '@/components/ui/scroll-reveal';

const judges = [
  {
    name: "Raj Bhowmik",
    title: "Senior Machine Learning Engineer at Cognizant",
    image: "Raj.png",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Pratik Nalage",
    title: "Senior Software Engineer at NVDIA",
    image: "Pratik.png",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Teo D",
    title: "Management Consultant at Boston Consulting Group",
    image: "Teo.png",
    color: "from-green-500 to-emerald-500",
  },
]

export default function JudgesSection() {
  let delayCounter = 0;

  const getDelay = () => {
    const delay = delayCounter;
    delayCounter += 150;
    return delay;
  };

  return (
    <section className="px-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto rounded-3xl p-8">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl">
          <div className="absolute top-4 left-4 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-4 right-4 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          <div className="mb-8 animate-fade-in">
            <ScrollReveal delay={0}>
              <h2 className="text-3xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text">
                Our Judges
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <p className="text-muted-foreground text-lg">Industry experts evaluating your submissions</p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {judges.map((judge, index) => (
              <ScrollReveal key={judge.name} delay={getDelay()}>
                <Card
                  key={index}
                  className="bg-white bg-opacity-40 group border-0 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 animate-slide-up rounded-2xl overflow-hidden h-full"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-4 text-center relative overflow-hidden h-full flex flex-col justify-center">
                    {/* Animated background gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${judge.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    ></div>

                    {/* Profile image with multiple hover effects */}
                    <div className="relative w-20 h-20 mx-auto mb-3">
                      {/* Animated ring */}
                      <div
                        className={`absolute inset-0 rounded-full bg-gradient-to-r ${judge.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin-slow`}
                      ></div>
                      <div className="absolute inset-1 rounded-full overflow-hidden bg-background group-hover:scale-110 transition-transform duration-300">
                        <Image
                          src={`/judges/${judge.image}`}
                          alt={judge.name}
                          width={120}
                          height={120}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      {/* Floating particles effect */}
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-300 delay-100"></div>
                      <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-300 delay-200"></div>
                    </div>

                    <div className="relative z-10">
                      <h3 className="font-semibold text-sm mb-1 group-hover:text-foreground transition-colors duration-300 transform group-hover:scale-105">
                        {judge.name}
                      </h3>
                      <p className="text-xs text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300 leading-tight">
                        {judge.title}
                      </p>
                    </div>

                    {/* Shimmer effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out both;
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </section>
  )
}
