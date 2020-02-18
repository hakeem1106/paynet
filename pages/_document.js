import Document, { Html, Head, Main, NextScript} from 'next/document'
import { renderToHTML } from 'next/dist/next-server/server/render'

export default class PayDoc extends Document{
    static async getInitialProps(ctx){
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }
    render(){
        return(
            <Html lang="en">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    
    }
}

