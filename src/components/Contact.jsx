import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const form = event.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast.success('Message sent successfully!');
        form.reset();
      } else {
        const responseData = await response.json();
        if (responseData.errors) {
          toast.error(responseData.errors.map(error => error.message).join(", "));
        } else {
          toast.error('Oops! There was a problem submitting your form.');
        }
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className='py-16 px-4 md:px-10 bg-white'>
      <div className='max-w-3xl mx-auto'>
        <h2 className='text-4xl font-bold text-center mb-12'>Contact Me</h2>
        <form className='space-y-6' action="https://formspree.io/f/mzzoywdy" method="POST" onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name' className='block text-lg font-medium text-gray-700'>
              Name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm'
              placeholder='Your Name'
              required
            />
          </div>
          <div>
            <label htmlFor='email' className='block text-lg font-medium text-gray-700'>
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm'
              placeholder='you@example.com'
              required
            />
          </div>
          <div>
            <label htmlFor='message' className='block text-lg font-medium text-gray-700'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              rows='4'
              className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm'
              placeholder='Your message...'
              required
            ></textarea>
          </div>
          <div>
            <button
              type='submit'
              disabled={isSubmitting}
              className='w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors disabled:bg-emerald-400 disabled:cursor-not-allowed'
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;