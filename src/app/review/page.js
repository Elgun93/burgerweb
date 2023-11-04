"use client";

import Head from "next/head";
// import React, { useEffect, useState } from "react";
async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  // const data = await response.json();

  return response.json();
  // props: {
  //   review: data.slice(0, 20)
  // }
}

export default async function Review() {
  const data = await getData();

  // console.log(data);
  // const [review, setReview] = useState([]);

  // useEffect(() => {
  //     const getData = async() => {
  //       const response = await fetch('https://jsonplaceholder.typicode.com/comments');
  //       const data = await response.json();
  //       setReview(data);
  //     }
  //     getData();
  // }, []);

  // console.log(review);

  return (
    <>
      <Head>
        <title>Fat burger | Main</title>
        <meta name="title" content="Fat burger" />
      </Head>
      <div className="about mb-5">
        <h1 className="text-3xl py-3">Reviews clients</h1>
        <div className="reviews">
          {data.slice(0, 20).map((res) => {
            return (
              <div key={res.id} className="review">
                {res.id} {`${res.body.slice(0, 90)}...`}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

// export default Review;