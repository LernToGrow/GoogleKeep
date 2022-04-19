import React from "react";

const Fotter =()=>{

    const year =new Date().getFullYear();
    return(
        <>
            <footer>
                <p>
                  copyrights © {year}
                </p>
            </footer>
        </>
    )
};

export default Fotter;