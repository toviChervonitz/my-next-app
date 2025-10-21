'use client';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react';

function HomePage() {
    const router = useRouter();


    return (
        <div>
        <h1>This is Home page </h1>
        <img src="https://www.webdigital.co.il/wp-content/uploads/2023/03/%D7%93%D7%A3-%D7%91%D7%99%D7%AA.jpg" alt="Home Image" width="500" height="300" />
        <p>
        Welcome to our website! Explore our products and services by navigating through the links provided.
        </p>
        <button onClick={() => router.push('/login')}>Go to Login Page</button>
            <button onClick={() => router.push('/signUp')}>Go to Sign Up Page</button>

        <button onClick={() => router.push('/products')}>Go to Products Page</button>

      
        </div>
    );
}

export default HomePage;
