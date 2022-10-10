import React from "react";
import Price from "../Price/Price";

const Prices = () => {
    const prices = [
        {
            id: 1,
            option: "free",
            price: 0,
            features: [
                "Primary Feature",
                "Awesome Feature",
                "Nice Feature",
                "Better Feature",
                "Good Feature",
                "Necessary Feature",
                "Unnecessary Feature",
            ],
        },
        {
            id: 2,
            option: "medium",
            price: 9.99,
            features: [
                "All Feature From Free",
                "Awesome Feature",
                "Nice Feature",
                "Better Feature",
                "Good Feature",
                "Necessary Feature",
                "Unnecessary Feature",
            ],
        },
        {
            id: 3,
            option: "premium",
            price: 19.99,
            features: [
                "All Feature From Medium",
                "Awesome Feature",
                "Nice Feature",
                "Better Feature",
                "Good Feature",
                "Necessary Feature",
                "Unnecessary Feature",
            ],
        },
    ];
    return (
        <div>
            <h2 className="text-5xl font-bold bg-indigo-300 text-white p-12">
                Best Deal Of The Town
            </h2>
            <div className="grid grid-cols-3 gap-5">
                {prices.map((price) => (
                    <Price key={price.id} price={price}></Price>
                ))}
            </div>
        </div>
    );
};

export default Prices;
