'use client';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react';

function HelloPage() {
    const router = useRouter();


    return (
        <div>
        <h1>This is hello page 
        </h1>
        <h2>Hello World</h2>
        <p>As you can see i have a lot of ideas what to write</p>

        </div>
    );
}

export default HelloPage;