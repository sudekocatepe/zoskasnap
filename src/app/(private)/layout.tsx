import React from "react";  


import Watchdog from "../../components/Watch";

export default function PrivateLayout({children} : {children: React.ReactNode }) {
    return <Watchdog>{children} </Watchdog>
}