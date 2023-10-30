import Layout from "./components/layout/page";
import './styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp;

// import React from 'react'

// const ReviewsPage = () => {
//   return (
//     <div>
//       <h1>Review</h1>
//     </div>
//   )
// }

// export default ReviewsPage
