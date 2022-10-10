import React from "react";
import Feature from "../Feature/Feature";

const Price = ({ price }) => {
    const { features } = price;
    return (
        <div className="bg-cyan-200 m-5 rounded-md p-5">
            <h3>
                <span className="text-6xl text-indigo-400">$</span>
                <span className="text-6xl font-bold text-indigo-800">
                    {price.price}
                </span>
                <span className="text-2xl font-bold text-indigo-400">
                    /month
                </span>
            </h3>
            <p className="mt-8">
                <span className="px-4 rounded-md text-2xl font-bold bg-indigo-400 text-white">
                    {price.option}
                </span>
            </p>
            {features.map((feature) => (
                <Feature key={feature.key} feature={feature}></Feature>
            ))}
        </div>
    );
};

export default Price;
