import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head >
                <meta charSet="utf-8" />
            </Head>
            <body className='bg-zinc-900 text-gray-300'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
