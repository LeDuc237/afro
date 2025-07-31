"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, HelpCircle, Star, Shield, Truck, MessageCircle, Mail } from "lucide-react"

interface QASectionProps {
  isHomePage?: boolean
}

const QASection = ({ isHomePage = false }: QASectionProps) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(isHomePage ? null : 0)
  const [isExpanded, setIsExpanded] = useState(!isHomePage)

  const faqs = [
    {
      question: "What is Afro Kinky Bulk Hair?",
      answer:
        "Afro Kinky Bulk Hair is 100% human hair with a natural kinky texture that perfectly mimics African textured hair. It's ideal for braiding, twisting, dreadlocks, and other protective hairstyles. Our bulk hair comes unprocessed and ready to be styled according to your preferences.",
    },
    {
      question: "How much hair do I need for a full head?",
      answer:
        "For a full head installation, we recommend 3-4 packs of our Afro Kinky Bulk Hair. The exact amount depends on your desired fullness and the size of your natural head. For thicker, fuller styles or longer lengths, you might need 4-5 packs. Our customer service team can help you determine the right amount for your specific needs.",
    },
    {
      question: "Can I color or dye the hair?",
      answer:
        "Yes! Since our Afro Kinky Bulk Hair is 100% human hair, it can be colored or dyed. However, we recommend going darker rather than lighter to maintain the hair's integrity. For best results, have a professional colorist perform any chemical treatments. Always do a strand test first.",
    },
    {
      question: "How long does the hair last?",
      answer:
        "With proper care and maintenance, our Afro Kinky Bulk Hair can last 6-12 months or even longer. The longevity depends on how well you care for it, how often you manipulate it, and your maintenance routine. Regular moisturizing and gentle handling will extend the life of your hair.",
    },
    {
      question: "Is this hair suitable for locs and twists?",
      answer:
        "Our Afro Kinky Bulk Hair is perfect for creating locs, twists, braids, and other protective styles. The kinky texture provides excellent grip and blends seamlessly with natural African-textured hair, making it ideal for starting locs or adding length to existing ones.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer free worldwide shipping on all orders! We ship to most countries globally with tracking provided. Delivery times vary by location: 5-7 business days for US customers, 7-14 business days for international orders. All customs duties and taxes are handled by our shipping partners.",
    },
    {
      question: "What's your return policy?",
      answer:
        "We offer a 30-day return policy for unused hair in its original packaging. If you're not completely satisfied with your purchase, you can return it for a full refund or exchange. The hair must be unopened and in its original condition. Return shipping is free for defective products.",
    },
    {
      question: "How should I care for Afro Kinky Bulk Hair?",
      answer:
        "Care for your Afro Kinky Bulk Hair like you would your natural hair. Use sulfate-free shampoos, deep condition regularly, and moisturize with natural oils. Avoid excessive heat styling and sleep with a silk or satin pillowcase or bonnet to prevent tangles and breakage.",
    },
  ]

  const features = [
    {
      icon: Star,
      title: "Premium Quality",
      description: "100% virgin human hair, ethically sourced",
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "30-day satisfaction guarantee",
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Free worldwide shipping with tracking",
    },
    {
      icon: HelpCircle,
      title: "Expert Support",
      description: "Professional styling advice available",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const toggleSection = () => {
    setIsExpanded(!isExpanded)
  }

  if (isHomePage && !isExpanded) {
    return (
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <button
              onClick={toggleSection}
              className="bg-white rounded-2xl  shadow-lg p-6 hover:shadow-xl transition-all duration-300 inline-flex items-center space-x-3 "
            >
              <HelpCircle className="text-gray-600" size={24} />
              <span className="text-xl font-bold text-grey-900">Q&A - Afro Kinky Bulk</span>
              <ChevronDown className="text-gray-500" size={24} />
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Q&A - Afro Kinky Bulk</h2>
            {isHomePage && (
              <button onClick={toggleSection} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                <ChevronUp className="text-gray-500" size={24} />
              </button>
            )}
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Everything you need to know about our premium Afro Kinky Bulk Hair extensions. Can't find what you're
            looking for? Contact our expert team!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="font-bold text-lg text-gray-900 pr-4">{faq.question}</h3>
                    {openFAQ === index ? (
                      <ChevronUp className="text-gray-500 flex-shrink-0" size={24} />
                    ) : (
                      <ChevronDown className="text-gray-500 flex-shrink-0" size={24} />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-700 leading-relaxed text-lg">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Still have questions */}
            <div className="mt-12 bg-gradient-to-r from-gray-900 to-gray-700 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-gray-300 mb-6">
                Our hair experts are here to help you make the perfect choice for your hair needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/+1234567890?text=Hi! I have questions about Afro Kinky Bulk Hair."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold transition-colors duration-300 inline-flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={20} className="text-white" />
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href="mailto:support@blenhairs.com"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-bold transition-colors duration-300 inline-flex items-center justify-center space-x-2"
                >
                  <Mail size={20} className="text-white" />
                  <span>Email Support</span>
                </a>
              </div>
            </div>
          </div>

          {/* Features Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Why Choose Our Hair?</h3>

              <div className="space-y-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-gray-900 to-gray-700 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <button
                  onClick={() => (window.location.href = "/collection/afro-kinky-bulk")}
                  className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-colors"
                >
                  Shop Afro Kinky Collection
                </button>
              </div>

              {/* Trust indicators */}
              <div className="mt-6 text-center">
                <div className="flex items-center justify-center space-x-1 text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-current" />
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  <strong>4.9/5</strong> from 3,247+ verified reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QASection
