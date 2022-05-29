import Head from 'next/head'
import Header from '@src/components/header/header'
import Footer from '@src/components/footer'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>LongHornMansion</title>
        <meta name="title" content="Long Horn Mansion Club" />
        <meta name="description" content="Long Horn Mansion Club" />
        <meta name="keywords" content="LongHornMansion" />
        <meta property="og:image" content="https://www.goldendao.xyz/logo1.png" />
        <meta property="og:site_name" content="Long Horn Mansion Club" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.goldendao.xyz/" />
        <meta property="og:title" content="Long Horn Mansion Club" />
        <meta
          property="og:description"
          content="Long Horn Mansion Club is a community-driven, utility-oriented, and longhorn-designed community. LMC's mission is to launch a collective western brand to engineer a creative and self-powered community."
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.goldendao.xyz/" />
        <meta property="twitter:title" content="Long Horn Mansion Club" />
        <meta
          property="twitter:description"
          content="Long Horn Mansion Club is a community-driven, utility-oriented, and longhorn-designed community. LMC's mission is to launch a collective western brand to engineer a creative and self-powered community."
        />
        <meta property="twitter:card" content="https://www.goldendao.xyz/logo1.png" />
        <meta property="twitter:site_name" content="Long Horn Mansion Club" />
      </Head>
      <div className="page-background">
        <Header />
        <main className="pb-[100px]">{children}</main>
        <Footer />
      </div>
    </>
  )
}
