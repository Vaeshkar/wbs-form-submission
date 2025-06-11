import { sendContactForm } from '../api/index.js';
import { useActionState } from 'react';

const contactAction = async (_prevState, formData) => {
  try {
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const message = formData.get('message');

    if (!firstName || !firstName.trim()) throw new Error('First name is required.');
    if (!lastName || !lastName.trim()) throw new Error('Last name is required.');
    if (!email || !email.trim()) throw new Error('Email is required.');
    if (!message || !message.trim()) throw new Error('Message is required.');

    await sendContactForm({ firstName, lastName, email, message });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

const Contact = () => {
  const [state, formAction, isPending] = useActionState(contactAction, {});

  return (
    <div className='flex flex-col items-center'>
        <form action={formAction}>
          <fieldset className='fieldset bg-base-200 border-base-300 rounded-box w-lg border p-4'>
            <legend className='fieldset-legend'>Contact Us</legend>
            <label className='label'>First Name</label>
            <input className='input w-full' name='firstName' placeholder='First Name' />
            <label className='label'>Last Name</label>
            <input className='input w-full' name='lastName' placeholder='Last Name' />
            <label className='label'>Email</label>
            <input className='input w-full' name='email' placeholder='Email' />
            <label className='label'>Message</label>
            <textarea
              className='textarea w-full'
              name='message'
              placeholder='Your message'
              rows={4}
            />
            <button type='submit' className='btn btn-neutral mt-4' disabled={isPending}>
              {isPending ? 'Sending...' : 'Send'}
            </button>
            {state.error && (
              <p className="text-red-600 mt-2">{state.error}</p>
            )}
            {state.success && (
              <p className="text-green-600 mt-2">Your message has been sent!</p>
            )}
          </fieldset>
        </form>
    </div>
  );
};

export default Contact;
