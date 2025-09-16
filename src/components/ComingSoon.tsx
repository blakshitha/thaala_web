import React from "react"
import Image from "next/image"

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-400/10 via-transparent to-gray-600/10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-300/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-400/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-12">
          <div className="w-80 h-80 mx-auto mb-6 flex items-center justify-center">
            <Image
              src="/images/thaala-logo.png"
              alt="Thaala Asapuwa - Centre for Sri Lankan Art & Culture"
              width={320}
              height={320}
              className="w-full h-full object-contain"
              priority
            />
          </div>
        </div>

        {/* Main Heading - H1 with Playfair Display */}
        <h1 className="coming-soon-h1 text-6xl md:text-8xl text-white mb-6 tracking-tight">
          Coming Soon
        </h1>

        {/* Subtitle - Body text with Open Sans */}
        <p className="coming-soon-subtitle text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
        Something extraordinary is in motion. We are choreographing an experience that will make your spirit dance.
        </p>

        {/* Decorative Line */}
        <div className="flex items-center justify-center mb-12">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full mx-4"></div>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
        </div>

        {/* Contact Info - Body text with proper line spacing */}
        <div className="coming-soon-body text-gray-400 text-lg">
          <p className="mb-2">Stay Connected</p>
          <p className="text-gray-500 text-base">We Will Be In Touch Soon</p>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse"></div>
          <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
          <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
        </div>
      </div>
    </div>
  )
}

export default ComingSoon
