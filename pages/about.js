import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layout'
import { Card, CardBody, Button } from 'reactstrap'

const about = () => {
    return (
        <Layout>
            <Head>
                <title>About page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Card className="text-center">
                <CardBody>
                    <h1>Hi this is about page</h1>
                    <Image src="/images/avatar.png" height="144" width="144" alt="Cool Avatar" />
                    <p className="text-success">Navigate back <Link  href='/'><Button color="primary">home</Button></Link></p>
                </CardBody>
            </Card>
        </Layout>
    );
};

export default about;