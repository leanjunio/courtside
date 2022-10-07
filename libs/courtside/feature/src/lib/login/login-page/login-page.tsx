import React from 'react';
import { LoginForm } from '../login-form/login-form';

export function Login() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-first lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="sideline"
            src="https://images.unsplash.com/photo-1563506644863-444710df1e03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
          />
        </aside>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6">
          <div className="w-full">
            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Login
            </h1>

            <p className="w-max mt-4 leading-relaxed text-gray-500">
              Enter your login information
            </p>
            <LoginForm />
          </div>
        </main>
      </div>
    </section>
  );
}
