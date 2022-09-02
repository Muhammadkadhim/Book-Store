import { useState } from "react";
import { useEffect } from "react";
import {
    Hero,
    NewArrivals,
    Comics,
    BestSellers,
    Special,
    Testimonials,
} from "../components/";

export default function Home() {
    return (
        <div className="flex flex-col gap-20  ">
            <Hero />
            <NewArrivals />
            <BestSellers />
            <Comics />
            <Special />
            <Testimonials />
        </div>
    );
}
