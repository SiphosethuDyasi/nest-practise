"use client";

import PageContainer from "./components/pageContainer";
import HomeScreen from "./screens/HomeScreen";

export default function Home() {
  const handleClick = () => {
    alert('Hello World!');
  }
  return (
    <HomeScreen/>
  );
}
