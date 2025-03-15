
import React from 'react';
import { Check } from 'lucide-react';


const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium mb-6">
              About Me
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Passionate Pencil Artist <br /> With an Eye for Detail
            </h2>
            <div className="text-gray-600 space-y-4 mb-8">
              <p>
                I've been drawing portraits for over 10 years, specializing in capturing the essence and emotions of people in my pencil sketches. My journey began as a childhood passion and evolved into a professional pursuit after formal training in fine arts.
              </p>
              <p>
                What sets my work apart is the meticulous attention to detail – from the subtle contours of facial features to the play of light and shadow that brings each portrait to life. I believe that a great portrait doesn't just capture a likeness, but also reveals something deeper about the subject.
              </p>
            </div>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3">
                <Check className="text-gray-900" size={20} />
                <span className="text-gray-700">Highly detailed pencil artworks</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="text-gray-900" size={20} />
                <span className="text-gray-700">Custom portraits from your photos</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="text-gray-900" size={20} />
                <span className="text-gray-700">Quick turnaround times</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="text-gray-900" size={20} />
                <span className="text-gray-700">100% satisfaction guaranteed</span>
              </div>
            </div>
            
            <a
              href="#order"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors font-medium"
            >
              Order Your Portrait
            </a>
          </div>
          
          <div className="order-1 lg:order-2 animate-float">
            <div className="relative">
              {/* Main image */}
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/nischal_main.jpg"
                  alt="Artist working on a portrait"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Floating card 1 */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 frosted-glass rounded-lg shadow-lg p-2 rotate-6">
                <img
                  src="images/nischal_down.jpg"
                  alt="Pencil sketch sample"
                  className="w-full h-full object-cover rounded"
                />
              </div>
              
              {/* Floating card 2 */}
              <div className="absolute -top-8 -right-8 w-40 h-40 frosted-glass rounded-lg shadow-lg p-2 -rotate-3">
                <img
                  src="/images/nischal_up.jpg"
                  alt="Pencil and art supplies"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
