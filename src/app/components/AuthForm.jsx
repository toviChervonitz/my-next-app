'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AuthForm({ mode }) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    //here call the relevent functions
    e.preventDefault();
    console.log("submit");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg"
    >
      <h2 className="text-2xl font-semibold mb-4">
        {mode === 'signup' ? 'Sign up' : 'Log in'}
      </h2>

      {error && <div className="mb-3 text-sm text-red-600">{error}</div>}

      <label className="block mb-3">
        <span className="text-sm">Email</span>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mt-1 px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
        />
      </label>

      <label className="block mb-4">
        <span className="text-sm">Password</span>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mt-1 px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
      >
        {loading ? 'Please wait...' : mode === 'signup' ? 'Create account' : 'Log in'}
      </button>

      {/* Link to the other page */}
      <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-300">
        {mode === 'login' ? (
          <>
            Don’t have an account?{' '}
            <Link href="/signup" className="text-blue-600 hover:underline">
              Sign up!
            </Link>
          </>
        ) : (
          <>
            Already have an account?{' '}
            <Link href="/login" className="text-blue-600 hover:underline">
              Log in
            </Link>
          </>
        )}
      </div>
    </form>
  );
}
