
import React from 'react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer comprehensive digital solutions including web development, mobile app development, UI/UX design, cloud solutions, digital marketing, and cybersecurity services. Our team specializes in modern technologies like React, Next.js, and cloud platforms."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while complex web applications can take 3-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the process."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive support and maintenance packages. This includes regular updates, security patches, performance monitoring, and technical support. We believe in long-term partnerships with our clients."
    },
    {
      question: "What is your development process?",
      answer: "Our process includes discovery and planning, design and prototyping, development and testing, deployment, and ongoing support. We use agile methodologies to ensure transparency and regular communication throughout the project."
    },
    {
      question: "Can you work with our existing team?",
      answer: "Absolutely! We can work as an extension of your team or collaborate with your existing developers and designers. We're flexible and adapt to your preferred communication tools and workflows."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "We specialize in modern web technologies including React, Next.js, Node.js, TypeScript, and cloud platforms like AWS and Azure. We also work with mobile technologies like React Native and have expertise in various databases and backend technologies."
    },
    {
      question: "How do you ensure project quality?",
      answer: "We follow industry best practices including code reviews, automated testing, continuous integration, and regular quality assurance checks. We also provide regular demos and gather feedback throughout the development process."
    },
    {
      question: "What are your pricing models?",
      answer: "We offer flexible pricing models including fixed-price projects, hourly rates, and monthly retainers. The pricing depends on project scope, complexity, and timeline. We provide detailed quotes after understanding your requirements."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-6">
            FAQ
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked
            <span className="block text-orange-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services, process, and how we can help 
            bring your digital vision to life.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-white rounded-2xl shadow-sm border p-6 mb-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-100 last:border-b-0">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl shadow-sm border p-8">
          <MessageCircle className="w-12 h-12 text-orange-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Our team is here to help you with any questions.
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
