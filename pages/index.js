import Head from "next/head";
import Button from "../components/button";
import Heading from "../components/Heading";

export default function Home() {
  return (
    <>
      <Head>
        <title>Extract media queries</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <div className="container">
        <Heading>Esto es un titulo</Heading>
        <Button>Esto es un boton</Button>
      </div>
    </>
  );
}