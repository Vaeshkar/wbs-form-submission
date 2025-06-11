import { registerNewsletter } from '../api/index.js';
import { useActionState } from 'react';

const registerAction = async (_prevState, formData) => {
  try {
    const email = formData.get('email');
    if (!email || !email.trim()) {
      throw new Error('Email is required.');
    }
    await registerNewsletter(email);
    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
};

const Register = () => {
  const [state, formAction, isPending] = useActionState(registerAction, {});

  return (
    <div className='flex flex-col items-center'>
        <form action={formAction}>
          <fieldset className='fieldset bg-base-200 border-base-300 rounded-box w-lg border p-4'>
            <legend className='fieldset-legend'>Register to our newsletter</legend>
            <label className='label'>Email</label>
            <input className='input w-full' name='email' placeholder='Email' />
            {state.error && (
              <p className="text-sm text-red-600 mt-2">{state.error}</p>
            )}
            <button className='btn btn-neutral mt-4' disabled={isPending}>
              {isPending ? 'Registering...' : 'Register!'}
            </button>
          </fieldset>
        </form>
    </div>
  );
};

export default Register;
