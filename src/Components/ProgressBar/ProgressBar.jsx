"use client"
import React, { useEffect, useState } from "react";

const ProgressBar = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollY = window.scrollY;
            const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;

            setScrollPercentage(scrollPercent);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    const progressWidth = scrollPercentage;

    return (
        <div
            id="progress-container"
            style={{
                height: "2px",
                width: "100%",
                backgroundColor: "#292929",
                position: "fixed",
                top: "0.1px",
                zIndex: "9999999",
                boxShadow: "0px 0px 40px 0px var(--color-primary)"
            }}
        >
            <div
                className="progress-fill"
                style={{
                    height: "100%",
                    background: "#009e66",
                    width: `${progressWidth}%`
                }}
            ></div>
        </div>

    );
};

export default ProgressBar;
