
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  Youtube,
  Linkedin,
  MessageCircle
} from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

const Contact = () => {
  const { toast } = useToast();
  const { theme } = useTheme();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  // Social media links
  const socialMedia = [
    { name: "Instagram", icon: <Instagram size={20} />, url: "https://instagram.comhttps://www.instagram.com/nischalbhandari9876/" },
    { name: "Facebook", icon: <Facebook size={20} />, url: "https://www.facebook.com/profile.php?id=100094678936841"},
    { name: "YouTube", icon: <Youtube size={20} />, url: "https://youtube.com/@nischalbhandari5506?si=AmnlsLkgvyJb5jbb" },
    { name: "LinkedIn", icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/nischal-bhandari-6abba8284/" },
    { name: "Twitter", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>, url: "https://x.com/Nischal75548537" },

    { name: "WhatsApp", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5Z" /><path d="m12.5 11.5-1 2-1-2" /><path d="m15.5 11.5-1 2-1-2" /><path d="m8.5 11.5 2 2 2-2" /></svg>, url: "https://api.whatsapp.com/send?phone=9745485234" },

    { name: "TikTok", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" /><path d="M9 22a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" /><path d="M22 9h-5" /><path d="M14.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z" /></svg>, url: "https://www.tiktok.com/@nischal_bhandari1" },

    { name: "Snapchat", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a9.96 9.96 0 0 0-7.071 2.929A9.96 9.96 0 0 0 2 12a9.96 9.96 0 0 0 2.929 7.071A9.96 9.96 0 0 0 12 22a9.96 9.96 0 0 0 7.071-2.929A9.96 9.96 0 0 0 22 12a9.96 9.96 0 0 0-2.929-7.071A9.96 9.96 0 0 0 12 2Z" /><path d="M12 16a4 4 0 0 1-4-4v-1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1a4 4 0 0 1-4 4Z" /><path d="M8 8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2" /></svg>, url: "https://www.snapchat.com/add/nischal_bha7617" },
    { name: "Threads", icon: <MessageCircle size={20} />, url: "https://www.threads.net/@nischalbhandari9876" }
  ];

  return (
    <section 
      id="contact" 
      className={cn(
        "py-24 px-6",
        theme === "dark" ? "bg-gray-900" : "bg-gray-50"
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className={cn(
            "inline-block px-3 py-1 rounded-full text-sm font-medium mb-6",
            theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"
          )}>
            Get In Touch
          </span>
          <h2 className={cn(
            "text-3xl md:text-5xl font-bold mb-4",
            theme === "dark" ? "text-white" : "text-gray-900"
          )}>
            Contact Me
          </h2>
          <p className={cn(
            "text-xl max-w-3xl mx-auto text-balance",
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          )}>
            Have a question or want to discuss a custom project?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <Card className={cn(
            "col-span-3 border-0 shadow-lg animate-fade-in",
            theme === "dark" ? "bg-gray-800" : "bg-white"
          )}>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className={theme === "dark" ? "text-gray-200" : ""}>Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className={theme === "dark" ? "bg-gray-700 border-gray-600 text-white" : ""}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className={theme === "dark" ? "text-gray-200" : ""}>Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className={theme === "dark" ? "bg-gray-700 border-gray-600 text-white" : ""}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className={theme === "dark" ? "text-gray-200" : ""}>Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows={6}
                    required
                    className={theme === "dark" ? "bg-gray-700 border-gray-600 text-white" : ""}
                  />
                </div>
                
                <Button
                  type="submit"
                  className={theme === "dark" ? "bg-white text-gray-900 hover:bg-gray-200" : "bg-gray-900 hover:bg-gray-800 text-white"}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="col-span-2 space-y-8 animate-fade-in-up">
            <Card className={cn(
              "border-0 shadow-lg overflow-hidden",
              theme === "dark" ? "bg-gray-800" : "bg-white"
            )}>
              <div className="aspect-video w-full">
          <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d223.0451009666841!2d88.07987739990033!3d26.561209712084846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1741427459735!5m2!1sen!2snp" 
                  width="100%" 
                  height="100%" 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location map"
                  className="border-0"
                ></iframe> 
               
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className={cn(
                      "w-5 h-5 mt-1 flex-shrink-0",
                      theme === "dark" ? "text-gray-400" : "text-gray-500"
                    )} />
                    <div>
                      <h4 className={theme === "dark" ? "font-medium text-white" : "font-medium text-gray-900"}>Location</h4>
                      <p className={theme === "dark" ? "text-gray-300 mt-1" : "text-gray-600 mt-1"}>Bhadrapur, Jhapa, Nepal</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className={cn(
                      "w-5 h-5 mt-1 flex-shrink-0",
                      theme === "dark" ? "text-gray-400" : "text-gray-500"
                    )} />
                    <div>
                      <h4 className={theme === "dark" ? "font-medium text-white" : "font-medium text-gray-900"}>Email</h4>
                      <a 
                        href="mailto:contact@sketchstudio.com" 
                        className={cn(
                          "mt-1 block",
                          theme === "dark" ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"
                        )}
                      >
                        nischalbhandari9876@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className={cn(
                      "w-5 h-5 mt-1 flex-shrink-0",
                      theme === "dark" ? "text-gray-400" : "text-gray-500"
                    )} />
                    <div>
                      <h4 className={theme === "dark" ? "font-medium text-white" : "font-medium text-gray-900"}>Phone</h4>
                      <a 
                        href="tel:+9779876543210" 
                        className={cn(
                          "mt-1 block",
                          theme === "dark" ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"
                        )}
                      >
                       +977 9745485234
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className={theme === "dark" ? "font-medium text-white mb-4" : "font-medium text-gray-900 mb-4"}>Connect on Social Media</h4>
                  <div className="flex flex-wrap gap-3">
                    {socialMedia.map((social) => (
                      <a 
                        key={social.name}
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={cn(
                          "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                          theme === "dark" 
                            ? "bg-gray-700 hover:bg-gray-600 text-gray-300" 
                            : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                        )}
                        title={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper function to conditionally join class names
const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

export default Contact;
