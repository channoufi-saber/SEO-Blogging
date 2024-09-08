import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  setGoogleTags() {


    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-WQSKBZL2GY');

        `
    };
        
  }
  
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
          />

          <link 
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          />              
          <link rel="stylesheet" href="/static/css/styles.css" />
          <script dangerouslySetInnerHTML={this.setGoogleTags()} />
        </Head>
        <body>
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-WQSKBZL2GY"></script>            
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;