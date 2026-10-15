import PageContainer from "../components/pageContainer";
import Image from "next/image";
import { ChartNoAxesColumnIncreasing, Target, Wallet, HandCoins, Bell, Users, Heart } from "lucide-react"
import NavBar from "../components/navBar";
import HomeScreen from "./HomeScreen";
import FeaturesScreen from "./FeaturesScreen";
import AboutScreen from "./AboutScreen";

export default function WelcomeScreen() {
    return (
        <PageContainer>
            <NavBar/>

            <HomeScreen/>

            <FeaturesScreen/>

            <AboutScreen/>
            
        </PageContainer>
    )
}