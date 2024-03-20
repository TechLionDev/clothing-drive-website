import Head from "next/head";

export default function CHead({ title }) {
  return (
    <>
      <Head>
        <title>{title} | Colecta De Ropa</title>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicons/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicons/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='194x194'
          href='/favicons/favicon-194x194.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='/favicons/android-chrome-192x192.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicons/favicon-16x16.png'
        />
        <link rel='manifest' href='/favicons/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/favicons/safari-pinned-tab.svg'
          color='#89b4fa'
        />
        <link rel='shortcut icon' href='/favicons/favicon.ico' />
        <meta name='msapplication-TileColor' content='#89b4fa' />
        <meta
          name='msapplication-TileImage'
          content='/favicons/mstile-144x144.png'
        />
        <meta
          name='msapplication-config'
          content='/favicons/browserconfig.xml'
        />
        <meta name='theme-color' content='#11111b' />
      </Head>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.onload = function() {
            setTimeout(function() {
              window.scrollTo(0, 0);
            }, 1);
          }
        `
        }}
      />
    </>
  );
}