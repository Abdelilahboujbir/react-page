import Header from "../components/header";
import Footer from "../components/footer"
import React from 'react';
import { Shield, Lock, Eye, Phone, Mail, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-16 px-4 pt-28">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-wide">
            Privacy <span className="text-yellow-400">Policy</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            At Immobati, your privacy is paramount. We are committed to protecting your personal information 
            and maintaining the highest standards of data security while delivering exceptional real estate services.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          
          {/* Information We Collect Section */}
          <section className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-yellow-400/20 p-3 rounded-full mr-4">
                <FileText className="w-6 h-6 text-yellow-400" />
              </div>
              <h2 className="text-3xl font-bold text-yellow-400">Information We Collect</h2>
            </div>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                To provide you with personalized real estate services, we may collect the following information:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  <span><strong className="text-white">Personal Details:</strong> Your name, email address, phone number, and preferred contact methods.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  <span><strong className="text-white">Property Preferences:</strong> Location preferences, budget range, property type, and specific requirements.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  <span><strong className="text-white">Communication Records:</strong> Messages, inquiries, and feedback you provide through our contact forms or direct communication.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  <span><strong className="text-white">Usage Information:</strong> How you interact with our website and services to improve your experience.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* How We Use Your Information Section */}
          <section className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-yellow-400/20 p-3 rounded-full mr-4">
                <Eye className="w-6 h-6 text-yellow-400" />
              </div>
              <h2 className="text-3xl font-bold text-yellow-400">How We Use Your Information</h2>
            </div>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                Your information enables us to deliver exceptional, personalized service:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  <span><strong className="text-white">Property Matching:</strong> Curate property recommendations that align with your preferences and requirements.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  <span><strong className="text-white">Communication:</strong> Respond to inquiries, schedule viewings, and provide updates on relevant properties.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  <span><strong className="text-white">Service Enhancement:</strong> Improve our website functionality and develop new features based on user feedback.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  <span><strong className="text-white">Market Insights:</strong> Share relevant market updates and exclusive property opportunities with your consent.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Data Protection Section */}
          <section className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-yellow-400/20 p-3 rounded-full mr-4">
                <Lock className="w-6 h-6 text-yellow-400" />
              </div>
              <h2 className="text-3xl font-bold text-yellow-400">Data Protection</h2>
            </div>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                We implement robust security measures to protect your personal information:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  <span><strong className="text-white">Encryption:</strong> All sensitive data is encrypted both in transit and at rest using industry-standard protocols.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  <span><strong className="text-white">Secure Storage:</strong> Your information is stored on secure servers with restricted access and regular security audits.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  <span><strong className="text-white">Access Control:</strong> Only authorized personnel have access to personal data, and only when necessary for service delivery.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  <span><strong className="text-white">Data Minimization:</strong> We collect only the information necessary to provide our services effectively.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Your Rights Section */}
          <section className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-yellow-400/20 p-3 rounded-full mr-4">
                <Shield className="w-6 h-6 text-yellow-400" />
              </div>
              <h2 className="text-3xl font-bold text-yellow-400">Your Rights</h2>
            </div>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                You have full control over your personal information. Your rights include:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  <span><strong className="text-white">Access:</strong> Request a copy of all personal information we hold about you.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  <span><strong className="text-white">Correction:</strong> Update or correct any inaccurate or incomplete information.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  <span><strong className="text-white">Deletion:</strong> Request removal of your personal data from our systems, subject to legal requirements.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  <span><strong className="text-white">Opt-out:</strong> Unsubscribe from marketing communications at any time while maintaining service-related communication.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Contact for Privacy Matters */}
          <section className="bg-gradient-to-r from-yellow-400/10 via-yellow-500/5 to-yellow-400/10 rounded-2xl p-8 border border-yellow-400/30">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-yellow-400 mb-6">Contact for Privacy Matters</h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                For any privacy-related questions, concerns, or requests, please don't hesitate to contact us:
              </p>
              
              <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                {/* Phone Contact */}
                <a 
                  href="tel:+212645563387" 
                  className="group flex items-center space-x-3 px-6 py-4 bg-gray-800/50 rounded-xl hover:bg-yellow-400/10 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="bg-yellow-400/20 p-2 rounded-full group-hover:bg-yellow-400/30 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-yellow-400" />
                  </div>
                  <span className="text-yellow-400 font-semibold text-lg">+212 645 563 387</span>
                </a>

                {/* Email Contact */}
                <a 
                  href="mailto:contact@immobati.ma" 
                  className="group flex items-center space-x-3 px-6 py-4 bg-gray-800/50 rounded-xl hover:bg-yellow-400/10 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="bg-yellow-400/20 p-2 rounded-full group-hover:bg-yellow-400/30 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-yellow-400" />
                  </div>
                  <span className="text-yellow-400 font-semibold text-lg">contact@immobati.ma</span>
                </a>
              </div>

              <p className="text-gray-400 text-sm mt-6">
                We typically respond to privacy inquiries within 48 hours
              </p>
            </div>
          </section>

        </div>

        {/* Footer Note */}
        <div className="text-center mt-16 py-8 border-t border-gray-700/50">
          <p className="text-gray-400">
            Last updated: <span className="text-yellow-400">August 2025</span>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            This privacy policy may be updated periodically to reflect changes in our practices or legal requirements.
          </p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default PrivacyPolicy;