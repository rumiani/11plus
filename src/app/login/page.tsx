'use client'
import React from "react";
import Head from "next/head";
import Login from "../../components/logIn/login";

const Index = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/assets/favicon.ico" />
        <title>Skillpath</title>
        <meta name="author" content="Maziar Rumiani" />
        <meta name="keywords" content="skill, skillpath" />
        <meta
          name="description"
          content="Write about your skill path here ..."
        />
      </Head>
      <section>
        <div className="g-6 flex flex-row h-full items-center justify-center lg:justify-between">
          <Login />
        </div>
      </section>
    </>
  );
};

export default Index;
