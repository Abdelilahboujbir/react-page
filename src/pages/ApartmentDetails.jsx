import Header from "../components/header";
import Footer from "../components/footer"
import React, { useState } from 'react';
import { MapPin, Bed, Bath, Square, ChevronLeft, ChevronRight } from 'lucide-react';


const ApartmentDetails = ({ apartment, onBack }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-MA', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % apartment.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + apartment.images.length) % apartment.images.length);
  };

  return (
    <>
      <Header />
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16 px-4 sm:px-6 lg:px-8 pt-30">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <button
            onClick={onBack}
            className="mb-8 flex items-center space-x-2 text-white hover:text-yellow-400 transition-colors duration-300"
          >
            <ChevronLeft className="h-5 w-5" />
            <span>Back to Properties</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Carousel */}
            <div className="relative">
              <div className="relative h-96 lg:h-[600px] overflow-hidden rounded-2xl">
                <img
                  src={apartment.images[currentImageIndex]}
                  alt={apartment.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Carousel Navigation */}
                {apartment.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
                      style={{ color: '#FFD700' }}
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
                      style={{ color: '#FFD700' }}
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                    
                    {/* Image Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                      {apartment.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentImageIndex ? 'w-8' : 'bg-white/50 hover:bg-white/70'
                          }`}
                          style={{
                            backgroundColor: index === currentImageIndex ? '#FFD700' : undefined
                          }}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-3 gap-2 mt-4">
                {apartment.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative h-24 overflow-hidden rounded-lg transition-all duration-300 ${
                      index === currentImageIndex ? 'ring-2 ring-yellow-400' : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${apartment.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Property Details */}
            <div className="space-y-8">
              {/* Price */}
              <div 
                className="inline-block px-6 py-3 rounded-full font-bold text-black text-2xl shadow-lg"
                style={{ backgroundColor: '#FFD700' }}
              >
                {formatPrice(apartment.price)}
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                {apartment.title}
              </h1>

              {/* Location */}
              <div className="flex items-center text-gray-300 text-lg">
                <MapPin className="h-5 w-5 mr-2" style={{ color: '#FFD700' }} />
                <span>{apartment.location}</span>
              </div>

              {/* Property Stats */}
              <div className="grid grid-cols-3 gap-6 py-6 border-t border-b border-gray-600">
                <div className="text-center">
                  <Bed className="h-8 w-8 mx-auto mb-2" style={{ color: '#FFD700' }} />
                  <div className="text-2xl font-bold text-white">{apartment.bedrooms}</div>
                  <div className="text-gray-300 text-sm">Bedrooms</div>
                </div>
                <div className="text-center">
                  <Bath className="h-8 w-8 mx-auto mb-2" style={{ color: '#FFD700' }} />
                  <div className="text-2xl font-bold text-white">{apartment.bathrooms}</div>
                  <div className="text-gray-300 text-sm">Bathrooms</div>
                </div>
                <div className="text-center">
                  <Square className="h-8 w-8 mx-auto mb-2" style={{ color: '#FFD700' }} />
                  <div className="text-2xl font-bold text-white">{apartment.area}m²</div>
                  <div className="text-gray-300 text-sm">Area</div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Description</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {apartment.description}
                </p>
              </div>

              {/* Features Section */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Features & Amenities</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#FFD700' }}></div>
                    <span>Premium Finishes</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#FFD700' }}></div>
                    <span>Modern Appliances</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#FFD700' }}></div>
                    <span>Security System</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#FFD700' }}></div>
                    <span>Parking Available</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#FFD700' }}></div>
                    <span>Air Conditioning</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#FFD700' }}></div>
                    <span>High-Speed Internet</span>
                  </div>
                </div>
              </div>

              {/* Contact Actions */}
              <div className="space-y-3">
                <button 
                  className="w-full py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg text-black"
                  style={{ backgroundColor: '#FFD700' }}
                >
                  Contact Agent
                </button>
                <button 
                  className="w-full py-4 px-8 border-2 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:bg-yellow-400 hover:text-black"
                  style={{ 
                    borderColor: '#FFD700',
                    color: '#FFD700'
                  }}
                >
                  Schedule Viewing
                </button>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Location Info */}
            <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Location</h3>
              <div className="space-y-2 text-gray-300">
                <p>Prime location in {apartment.location}</p>
                <p>Easy access to major highways</p>
                <p>Close to shopping centers</p>
                <p>Near public transportation</p>
              </div>
            </div>

            {/* Property Details */}
            <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Property Details</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Property Type:</span>
                  <span className="text-white">Luxury Apartment</span>
                </div>
                <div className="flex justify-between">
                  <span>Year Built:</span>
                  <span className="text-white">2022</span>
                </div>
                <div className="flex justify-between">
                  <span>Heating:</span>
                  <span className="text-white">Central</span>
                </div>
                <div className="flex justify-between">
                  <span>Cooling:</span>
                  <span className="text-white">Air Conditioning</span>
                </div>
              </div>
            </div>

            {/* Monthly Costs */}
            <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Monthly Costs</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Property Tax:</span>
                  <span className="text-white">2,500 MAD</span>
                </div>
                <div className="flex justify-between">
                  <span>Insurance:</span>
                  <span className="text-white">800 MAD</span>
                </div>
                <div className="flex justify-between">
                  <span>Maintenance:</span>
                  <span className="text-white">1,200 MAD</span>
                </div>
                <div className="border-t border-gray-600 pt-2 mt-3">
                  <div className="flex justify-between font-bold">
                    <span className="text-white">Total Monthly:</span>
                    <span style={{ color: '#FFD700' }}>4,500 MAD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ApartmentDetails;

