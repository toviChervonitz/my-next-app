'use client';
import React from 'react';
import AuthForm from '../components/AuthForm';

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <AuthForm mode="signup" />
    </div>
  );
}
