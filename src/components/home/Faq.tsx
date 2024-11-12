"use client";
import React, { useState} from 'react';

const FAQAccordion = () => {
  const [openItems, setOpenItems] = useState<number | null>(0); // Set first item open by default
  const [loadedItems, setLoadedItems] = useState<number[]>([]); // Track items that have already loaded their animations

  const faqs = [
    { id: 1, title: 'About the course', content: 'Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.' },
    { id: 2, title: 'About the training', content: 'We provide comprehensive training programs tailored to meet each students needs.' },
    { id: 3, title: 'What extracurricular activities are available for students?', content: 'We offer a wide range of extracurricular activities including sports, arts, music, and academic clubs.' },
    { id: 4, title: 'How do you handle food allergies and dietary restrictions?', content: 'We maintain a detailed record of all student allergies and dietary requirements, ensuring safe meal preparation and service.' },
    { id: 5, title: 'What is the teacher-to-student ratio at Little Learners Academy?', content: 'We maintain small class sizes to ensure individual attention for each student.' },
    { id: 6, title: 'How do you handle discipline and behavior management?', content: 'We use positive reinforcement techniques and maintain clear communication with parents.' },
    { id: 7, title: 'How do I apply for admission to Little Learners Academy?', content: 'The admission process involves filling out an application form and scheduling an interview.' }
  ];

  const toggleItem = (id: number) => {
    setOpenItems(openItems === id ? null : id);
    if (!loadedItems.includes(id)) {
      setLoadedItems([...loadedItems, id]); // Mark this item as loaded for animation
    }
  };

  return (
    <div className="p-16 mx-auto space-y-4">
      <h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>
      <p className="text-center text-gray-600 mb-8 w-4/5 mx-auto">
        Find all the essential information you need in our FAQ section, designed to address the
        most frequently asked questions and help you make informed decisions for your child&apos;s
        education.
      </p>
      
      <div className="grid grid-cols-2 gap-8">
        {faqs.map(faq => (
          <div key={faq.id} className="flex flex-col">
            <div
              data-aos={loadedItems.includes(faq.id) ? undefined : "fade-in"}
              data-aos-duration="1000"
              data-aos-once="true"
              className={`p-4 flex justify-between border-2 rounded-t-md cursor-pointer ${
                openItems === faq.id ? 'bg-white' : 'bg-[#E3F5FF]'
              } ${openItems === faq.id ? 'border-b-0' : 'rounded-b-md'}`}
              onClick={() => toggleItem(faq.id)}
            >
              <p className='font-bold text-xl'>{faq.title}</p>
              <div className='bg-white border-2 w-8 h-8 flex items-center justify-center rounded'>
                {openItems === faq.id ? '-' : '+'}
              </div>
            </div>
            {openItems === faq.id && (
              <div className="bg-white p-4 border-2 border-t-0 rounded-b-md">
                <p className="text-gray-700">{faq.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
