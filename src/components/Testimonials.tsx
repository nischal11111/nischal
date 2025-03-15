
import React, { useState, useEffect, useRef } from 'react';
import { Pause, Play, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Images from "../components/Image";

// Sample testimonials data
const testimonialsData = [
  {
    id: 1,
    name: "Ajit Gurung",
    location: "Jhapa",
    img:Images.model1,
    avatar: Images.ajitpic,
    testimonial: "Absolutely love the portrait! The attention to detail and accuracy are incredible. It captures me perfectly, and the quality is top-notch. Worth every penny! Highly recommend to anyone looking for a stunning custom portrait.",
    rating: 5
  },
  {
    id: 2,
    name: "Prasanna Ghimiree ",
    location: "Charali",
    img:Images.model_prasanna,
    avatar: Images.prasanna,
    testimonial:"I'm truly impressed with the portrait! The craftsmanship and precision are outstanding. It looks so lifelike and beautifully done. The artist clearly put a lot of effort into it, and I couldn’t be happier with the result. Definitely worth it—highly recommended!",
    rating: 5
  },
  {
    id: 3,
    imges:"",
    name: "Prerna Pandey",
    img:Images.prerna,
    location: "Bhadrapur",
    avatar: Images.image3,
    testimonial: "I had a portrait made for my brother as a gift, and it turned out absolutely amazing! He loved it, and so did I. The level of detail and artistry is truly impressive. It’s a perfect keepsake, and I couldn’t have asked for a better result. Highly recommend!",
    rating: 5
  },
  
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Check if on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % testimonialsData.length);
      }, 5000);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying]);

  const handlePrev = () => {
    setActiveIndex(prev => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev + 1) % testimonialsData.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(prev => !prev);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg 
        key={index} 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill={index < rating ? "#fbbf24" : "#e5e7eb"} 
        className="w-5 h-5"
      >
        <path 
          fillRule="evenodd" 
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" 
          clipRule="evenodd" 
        />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium mb-6">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            What My Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Hear from people who have experienced my artistic journey
          </p>
        </div>

        <div className="relative">
          {/* Desktop Testimonials */}
          <div className="hidden md:block">
            <div className="relative h-[400px] overflow-hidden">
              {testimonialsData.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out transform ${
                    index === activeIndex 
                      ? 'translate-x-0 opacity-100' 
                      : index < activeIndex 
                        ? '-translate-x-full opacity-0' 
                        : 'translate-x-full opacity-0'
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
                    <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col justify-between relative">
                      <Quote className="absolute top-6 left-6 text-gray-100 w-24 h-24 -z-10" />
                      
                      <div className="space-y-4 z-10">
                        <div className="flex">{renderStars(testimonial.rating)}</div>
                        
                        <p className="text-gray-700 text-lg leading-relaxed">
                          "{testimonial.testimonial}"
                        </p>
                      </div>
                      
                      <div className="mt-6 flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <img 
                            src={testimonial.img} 
                            alt={testimonial.name}
                          
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                          <p className="text-gray-500 text-sm">{testimonial.location}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative rounded-2xl overflow-hidden shadow-lg h-full">
                      <img 
                        src={testimonial.avatar.replace('w=150', 'w=800')} 
                        alt="Client artwork" 
                        className="w-full h-full object-cover"
                        style={{objectFit:"contain",height:"500px",width:"500px",marginLeft:"-12%" }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Testimonials */}
          <div className="md:hidden">
            <div className="bg-white rounded-2xl p-6 shadow-lg relative">
              <Quote className="absolute top-6 left-6 text-gray-100 w-16 h-16 -z-10" />
              
              <div className="space-y-4 z-10">
                <div className="flex">{renderStars(testimonialsData[activeIndex].rating)}</div>
                
                <p className="text-gray-700 leading-relaxed">
                  "{testimonialsData[activeIndex].testimonial}"
                </p>
              </div>
              
              <div className="mt-6 flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonialsData[activeIndex].avatar} 
                    alt={testimonialsData[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{testimonialsData[activeIndex].name}</h4>
                  <p className="text-gray-500 text-sm">{testimonialsData[activeIndex].location}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Controls */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button 
              onClick={togglePlayPause}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          {/* Indicator dots */}
          <div className="flex justify-center mt-6">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full mx-1 transition-all ${
                  index === activeIndex ? 'bg-gray-900 w-4' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
