import { EmailField, PasswordField, TextField } from '@courtside/ui/fields';
import React from 'react';
import { useForm } from 'react-hook-form';

type SignupFields = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export function Signup() {
  const form = useForm<SignupFields>();

  const onSubmit = (data: unknown) => {
    form.reset();
    console.log(data);
  };

  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="sideline"
            src="https://images.unsplash.com/photo-1599677104038-58d80f6976e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
          />
        </aside>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Signup
            </h1>

            <p className="mt-4 leading-relaxed text-gray-500">
              Please start by entering the following details. The following
              information would be used for your communication with your
              teammates
            </p>

            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-8 grid grid-cols-6 gap-6"
            >
              <TextField
                htmlFor="FirstName"
                label="First Name"
                {...form.register('firstName')}
              />
              <TextField
                htmlFor="LastName"
                label="Last Name"
                {...form.register('lastName')}
              />

              <div className="col-span-6">
                <EmailField
                  htmlFor="Email"
                  label="Email"
                  {...form.register('email')}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <PasswordField
                  htmlFor="Password"
                  label="Password"
                  {...form.register('password')}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <PasswordField
                  htmlFor="PasswordConfirmation"
                  label="Confirm Password"
                  {...form.register('passwordConfirmation')}
                />
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  type="submit"
                  className="inline-block shrink-0 rounded-md border border-amber-600 bg-amber-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-amber-600 focus:outline-none focus:ring active:text-amber-500"
                >
                  Create an account
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Already have an account?{' '}
                  <a href="/login" className="text-gray-700 underline">
                    Log in
                  </a>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}
