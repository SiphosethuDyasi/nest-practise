"use client";

import PageContainer from "./components/pageContainer";

export default function Home() {
  const handleClick = () => {
    alert('Hello World!');
  }
  return (
    <div>
      <h1>Hello World!</h1>

      <button type="button" onClick={handleClick}>Click me!</button>

    </div>
    

  );
}
