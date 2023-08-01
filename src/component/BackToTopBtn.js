import React, { useEffect, useState } from 'react'

const BackToTopBtn = () => {
    const [backToTopBtn, setBackToTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                setBackToTopBtn(true);
            } else {
                setBackToTopBtn(false);
            }
        });
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "auto",
        })
    };

    return (
        <div className="App">
            {backToTopBtn && (
                <button style={{
                    position: "fixed",
                    bottom: "50px",
                    right: "30px",
                    height: "50px",
                    width: "50px",
                    fontSize: "50px",
                    backgroundColor: "orange",
                    borderRadius: "50%",
                    cursor: "pointer"
                }}
                    onClick={scrollUp}>
                    ^
                </button>
            )}
        </div>
    )
}

export default BackToTopBtn