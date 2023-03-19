import Head from 'next/head'

type Props = {
    title?: string;
}

const HeadComponent: React.FC<Props> = ({ title }) => (
    <Head>
        <title>Gilbert Torchon {title && `| ${title}`}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
)

export default HeadComponent