import React from "react";
import dynamic from "next/dynamic";
const EarlyHairDxLanding = dynamic(() => import("../components/EarlyHairDxLanding"), { ssr: false });
export default function Sales() { return <EarlyHairDxLanding />; }
