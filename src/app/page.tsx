"use client";
import NavBar from "./components/navBar";
import PageContainer from "./components/pageContainer";
import AboutScreen from "./screens/AboutScreen";
import FeaturesScreen from "./screens/FeaturesScreen";
import HomeScreen from "./screens/HomeScreen";

export default function Home() {
  return (
    <PageContainer>
      <NavBar/>
    
      <HomeScreen/>
    
      <FeaturesScreen/>
    
      <AboutScreen/>
                
    </PageContainer>
  );
}
