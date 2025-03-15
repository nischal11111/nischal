
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { UploadCloud, CheckCircle2, CreditCard, QrCode, Bold } from "lucide-react";

// Price configuration
const PRICE_CONFIG = {
  size: {
    small: { label: "Small (8×10 inches)", price: 1500 },
    medium: { label: "Medium (11×14 inches)", price: 2500 },
    large: { label: "Large (16×20 inches)", price: 4000 },
  },
  style: {
    blackAndWhite: { label: "Black & White", price: 0 },
    colored: { label: "Colored", price: 1500 },
    detailed: { label: "Highly Detailed", price: 2500 },
  },
  delivery: {
    standard: { label: "Standard (7-10 days)", price: 0 },
    express: { label: "Express (3-5 days)", price: 1000 },
  }
};

const OrderForm = () => {
  const { toast } = useToast();
  
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    size: "medium",
    style: "blackAndWhite",
    delivery: "standard",
    instructions: "",
    image: null as File | null,
  });
  
  const [paymentMethod, setPaymentMethod] = useState("esewa");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // Calculate total price
  const calculatePrice = () => {
    const sizePrice = PRICE_CONFIG.size[formState.size as keyof typeof PRICE_CONFIG.size].price;
    const stylePrice = PRICE_CONFIG.style[formState.style as keyof typeof PRICE_CONFIG.style].price;
    const deliveryPrice = PRICE_CONFIG.delivery[formState.delivery as keyof typeof PRICE_CONFIG.delivery].price;
    
    return sizePrice + stylePrice + deliveryPrice;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setFormState(prev => ({ ...prev, image: file }));
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // For demo, just show a toast and move to payment
    setTimeout(() => {
      setIsSubmitting(false);
      setShowPayment(true);
      toast({
        title: "Order received!",
        description: "Please proceed with payment to confirm your custom portrait.",
      });
    }, 1500);
  };

  const handlePayment = () => {
    setIsSubmitting(true);
    
    // For demo, just show success toast
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Payment successful!",
        description: "Your order has been confirmed. Check your email for details.",
        variant: "default",
      });
      
      // Reset form
      setFormState({
        name: "",
        email: "",
        phone: "",
        size: "medium",
        style: "blackAndWhite",
        delivery: "standard",
        instructions: "",
        image: null,
      });
      setPreviewImage(null);
      setShowPayment(false);
    }, 2000);
  };

  return (
    <section id="order" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium mb-6">
            Commission
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Order a Custom Portrait
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Turn your favorite photos into timeless, hand-drawn pencil sketches
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Information Card */}
          <Card className="bg-white border-0 shadow-lg overflow-hidden animate-fade-in">
            <div className="aspect-video overflow-hidden">
              <img 
                src="/images/prasanna.jpg" 
                alt="Custom portrait process" 
                className="w-full h-full object-cover"
                style={{objectFit:"contain"}}
              />
            </div>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
              <CardDescription>Simple steps to your custom portrait</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1 bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center">
                  <span className="font-medium">1</span>
                </div>
                <div>
                  <h4 className="font-medium">Upload Your Photo</h4>
                  <p className="text-gray-500 text-sm mt-1">
                    Submit a high-quality photo that you'd like to be transformed into a pencil sketch.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1 bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center">
                  <span className="font-medium">2</span>
                </div>
                <div>
                  <h4 className="font-medium">Choose Your Preferences</h4>
                  <p className="text-gray-500 text-sm mt-1">
                    Select your desired size, style, and delivery options for your custom artwork.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1 bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center">
                  <span className="font-medium">3</span>
                </div>
                <div>
                  <h4 className="font-medium">Secure Payment</h4>
                  <p className="text-gray-500 text-sm mt-1">
                    Complete your order with our secure payment options: eSewa, Khalti, or QR code.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1 bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center">
                  <span className="font-medium">4</span>
                </div>
                <div>
                  <h4 className="font-medium">Receive Your Artwork</h4>
                  <p className="text-gray-500 text-sm mt-1">
                    Your custom pencil portrait will be delivered to your doorstep within the selected timeframe.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Order Form */}
          <div className="animate-fade-in-up">
            {!showPayment ? (
              <Card className="bg-white border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Place Your Order</CardTitle>
                  <CardDescription>Fill in the details for your custom portrait</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            placeholder="your.email@example.com"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          placeholder="Your contact number"
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="size">Portrait Size</Label>
                          <Select 
                            value={formState.size} 
                            onValueChange={(value) => handleSelectChange('size', value)}
                          >
                            <SelectTrigger id="size">
                              <SelectValue placeholder="Select size" />
                            </SelectTrigger>
                            <SelectContent>
                              {Object.entries(PRICE_CONFIG.size).map(([key, { label, price }]) => (
                                <SelectItem key={key} value={key}>
                                  {label} - Rs. {price}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="style">Portrait Style</Label>
                          <Select 
                            value={formState.style} 
                            onValueChange={(value) => handleSelectChange('style', value)}
                          >
                            <SelectTrigger id="style">
                              <SelectValue placeholder="Select style" />
                            </SelectTrigger>
                            <SelectContent>
                              {Object.entries(PRICE_CONFIG.style).map(([key, { label, price }]) => (
                                <SelectItem key={key} value={key}>
                                  {label} {price > 0 ? `- Rs. ${price}` : ''}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="delivery">Delivery Option</Label>
                        <Select 
                          value={formState.delivery} 
                          onValueChange={(value) => handleSelectChange('delivery', value)}
                        >
                          <SelectTrigger id="delivery">
                            <SelectValue placeholder="Select delivery option" />
                          </SelectTrigger>
                          <SelectContent>
                            {Object.entries(PRICE_CONFIG.delivery).map(([key, { label, price }]) => (
                              <SelectItem key={key} value={key}>
                                {label} {price > 0 ? `- Rs. ${price}` : ''}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="instructions">Special Instructions (Optional)</Label>
                        <Textarea
                          id="instructions"
                          name="instructions"
                          value={formState.instructions}
                          onChange={handleChange}
                          placeholder="Any specific details or requests for your portrait"
                          rows={3}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="image">Upload Your Photo</Label>
                        <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center">
                          {previewImage ? (
                            <div className="space-y-4">
                              <img
                                src={previewImage}
                                alt="Preview"
                                className="h-48 mx-auto object-contain"
                              />
                              <p className="text-sm text-gray-500 flex items-center justify-center gap-1">
                                <CheckCircle2 size={16} className="text-green-500" />
                                Photo uploaded successfully
                              </p>
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                  setPreviewImage(null);
                                  setFormState(prev => ({ ...prev, image: null }));
                                }}
                              >
                                Change Photo
                              </Button>
                            </div>
                          ) : (
                            <div className="space-y-4">
                              <UploadCloud className="h-12 w-12 text-gray-400 mx-auto" />
                              <div className="space-y-2">
                                <p className="text-sm text-gray-500">
                                  Click to upload or drag and drop
                                </p>
                                <p className="text-xs text-gray-400">
                                  High quality PNG or JPG up to 10MB
                                </p>
                              </div>
                              <Input
                                id="image"
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="hidden"
                              />
                              <Button
                                type="button"
                                variant="outline"
                                onClick={() => document.getElementById('image')?.click()}
                              >
                                Select a file
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-gray-600 font-medium">Total:</span>
                        <span className="text-2xl font-bold">Rs. {calculatePrice()}</span>
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-gray-900 hover:bg-gray-800"
                        disabled={!formState.image || isSubmitting}
                      >
                        {isSubmitting ? "Processing..." : "Proceed to Payment"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-white border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Complete Payment</CardTitle>
                  <CardDescription>Select your preferred payment method</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <RadioGroup
                        value={paymentMethod}
                        onValueChange={setPaymentMethod}
                        className="space-y-3"
                      >
                        <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                          <RadioGroupItem value="esewa" id="esewa" />
                          <Label htmlFor="esewa" className="flex-1 cursor-pointer flex items-center">
                            <span>eSewa</span>
                            <div className="ml-auto">
                              <div className="w-10 h-10 bg-green-500 rounded-md flex items-center justify-center text-white font-bold">
                                e
                              </div>
                            </div>
                          </Label>
                        </div>
                        
                        <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                          <RadioGroupItem value="khalti" id="khalti" />
                          <Label htmlFor="khalti" className="flex-1 cursor-pointer flex items-center">
                            <span>Khalti</span>
                            <div className="ml-auto">
                              <div className="w-10 h-10 bg-purple-600 rounded-md flex items-center justify-center text-white font-bold">
                                K
                              </div>
                            </div>
                          </Label>
                        </div>
                        
                        <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                          <RadioGroupItem value="qr" id="qr" />
                          <Label htmlFor="qr" className="flex-1 cursor-pointer flex items-center">
                            <span>QR Code</span>
                            <div className="ml-auto">
                              <QrCode size={24} className="text-gray-600" />
                            </div>
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-gray-600 font-medium">Amount:</span>
                        <span className="text-2xl font-bold">Rs. {calculatePrice()}</span>
                      </div>
                      
                      <div className="space-y-3">
                        <Button 
                          type="button" 
                          className="w-full bg-gray-900 hover:bg-gray-800"
                          onClick={handlePayment}
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Processing..." : "Pay Now"}
                        </Button>
                        
                        <Button 
                          type="button" 
                          variant="outline"
                          className="w-full"
                          onClick={() => setShowPayment(false)}
                          disabled={isSubmitting}
                        >
                          Back to Order Form
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
