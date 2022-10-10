import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Feature = (feature) => {
    return (
        <div>
            <div className="mt-8 flex items-center">
                <CheckCircleIcon className="w-6 h-6 text-indigo-400"></CheckCircleIcon>
                <p className="ml-2 text-xl">{feature.feature}</p>
            </div>
        </div>
    );
};

export default Feature;
