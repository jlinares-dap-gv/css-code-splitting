import Head from "next/head";
import Button from "../components/button";
import Heading from "../components/Heading";

export default function Home() {
  return (
    <div className="container">
      <Heading>Esto es un titulo</Heading>
      <Button>Esto es un boton</Button>
    </div>
  );
}
