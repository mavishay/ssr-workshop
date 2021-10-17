import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1 className="title">
                    Welcome Tikal Trivia!!!
                </h1>
                <ul>
                    <li><Link href="/trivia/true-false">True/False</Link></li>
                    <li><Link href="/trivia/multiple">Multiple</Link></li>
                </ul>
            </main>
        </div>
    )
}
