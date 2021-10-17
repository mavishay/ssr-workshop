import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const about = () => {
    return (
        <div className="container">
            <Head>
                <title>About page</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="/styles.css" />
            </Head>
            <h1>Hi this is about page</h1>
            <p>Navigate back <Link href='/'>home</Link></p>
        </div>
    );
};

export default about;