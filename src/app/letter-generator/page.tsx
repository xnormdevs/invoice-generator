"use client";
import React from "react";
import Head from "next/head";
import { Spin } from "antd";
import dynamic from "next/dynamic";

const LetterGenerator = () => {
  const LetterGeneratorComponent = dynamic(
    () => import("@/components/letter/Letter"),
    {
      loading: () => <Spin size="large" tip="Loading..." fullscreen />,
    }
  );

  return (
    <main>
      <Head>
        <title>Letter Generator</title>
        <meta name="description" content="App to generate free letters" />
      </Head>
      <LetterGeneratorComponent />
    </main>
  );
};

export default LetterGenerator;
