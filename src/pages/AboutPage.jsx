import Header from "../components/header";
import Footer from "../components/footer"
import React from 'react';
import { Crown, Shield, Star, Home, Award, Users } from 'lucide-react';

const AboutPage = () => {
  const highlights = [
    {
      icon: Crown,
      title: "Luxury Living",
      description: "Curated collection of Morocco's most prestigious properties, where every detail speaks of sophistication and refined taste."
    },
    {
      icon: Shield,
      title: "Expert Guidance", 
      description: "Our seasoned professionals provide personalized counsel, ensuring every transaction reflects your vision and exceeds expectations."
    },
    {
      icon: Star,
      title: "Tailored Experiences",
      description: "Bespoke services crafted around your unique lifestyle, transforming property dreams into extraordinary living experiences."
    }
  ];

  return (
    <>
    <Header />
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pt-28">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-yellow-400 mb-8 tracking-wide">
            About Immobati
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12">
              Where Moroccan elegance meets modern luxury. We are the premier destination for discerning clients 
              seeking exceptional properties that embody the perfect harmony between contemporary comfort and 
              timeless architectural heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-500">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-8">
                Our Story
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Born from a passion for Morocco's architectural splendor, <span className="text-yellow-400 font-semibold">Immobati</span> 
                  emerged as a beacon of excellence in luxury real estate. We understand that a home is more than walls and windows—it's 
                  a canvas for life's most precious moments.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Our commitment transcends mere transactions. We craft relationships built on trust, expertise, and an unwavering 
                  dedication to turning your vision into reality. Each property in our portfolio is selected with meticulous care, 
                  ensuring it meets our exacting standards for luxury, location, and lifestyle.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  From the bustling souks of Marrakech to the coastal elegance of Casablanca, we unlock doors to Morocco's most 
                  coveted addresses, where tradition dances with innovation in perfect harmony.
                </p>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-2xl p-8 border border-yellow-400/30">
                  <div className="text-center">
                    <Home className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
                    <blockquote className="text-xl text-gray-200 italic leading-relaxed">
                      "Excellence is not a destination, but a journey we embark upon with every client, 
                      every property, every dream we help bring to life."
                    </blockquote>
                    <div className="mt-6 text-yellow-400 font-semibold">
                      — Immobati Philosophy
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
              The Immobati Difference
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Three pillars that define our commitment to excellence and set us apart in the luxury real estate landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-500 group hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/10"
                >
                  <div className="text-center">
                    <div className="bg-yellow-400/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-400/30 transition-colors duration-300">
                      <IconComponent className="w-10 h-10 text-yellow-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-yellow-400 mb-4 group-hover:text-yellow-300 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
              Crafted Excellence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Every property tells a story of architectural mastery and refined living, 
              where Moroccan heritage meets contemporary sophistication.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Image Placeholders */}
            <div className="group relative overflow-hidden rounded-2xl bg-gray-800 aspect-[4/5] border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-yellow-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Award className="w-12 h-12 text-yellow-400/60 mx-auto mb-4" />
                  <p className="text-yellow-400/80 font-medium">Luxury Interior</p>
                  <p className="text-gray-400 text-sm">Moroccan Elegance</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gray-800 aspect-[4/5] border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-yellow-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Home className="w-12 h-12 text-yellow-400/60 mx-auto mb-4" />
                  <p className="text-yellow-400/80 font-medium">Premium Villa</p>
                  <p className="text-gray-400 text-sm">Modern Architecture</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gray-800 aspect-[4/5] border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-500 md:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-yellow-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Users className="w-12 h-12 text-yellow-400/60 mx-auto mb-4" />
                  <p className="text-yellow-400/80 font-medium">Living Spaces</p>
                  <p className="text-gray-400 text-sm">Curated Collection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-yellow-400/10 via-yellow-500/5 to-yellow-400/10 rounded-3xl p-12 border border-yellow-400/20">
            <h3 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">
              Begin Your Journey
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              At Immobati, we don't just find houses—we discover homes that resonate with your soul, 
              spaces that inspire your story, and sanctuaries that elevate your everyday into something extraordinary.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"></div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default AboutPage;