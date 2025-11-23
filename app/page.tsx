import Image from "next/image";
import Hero from "./components/Hero";
import TextBlock from "./components/TextBlock";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center ">
    <Hero/>
    <TextBlock title="About the fund" text="The aim of the fund is to ensure a long-term management of revenue from Norway’s oil and gas resources, so that this wealth benefits both current and future generations. The fund’s formal name is the Government Pension Fund Global." linkText="About the fund"
    
    />
    <TextBlock title="How the fund is invested" text="The Government Pension Fund Global is one of the world's largest funds. Investments are spread across most markets, countries and currencies to achieve broad exposure to global growth and value creation while ensuring good risk diversification. The fund invests only abroad so that the Norwegian economy does not overheat." linkText="More on how we invest"
    
    />
        </div>
  )}
   