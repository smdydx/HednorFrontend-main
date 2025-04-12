import React from "react";
import NavigationItem from "./NavigationItem";
import { NAVIGATION_DEMO_2 } from "@/data/navigation";

function Navigation() {
  return (
    <ul className="nc-Navigation flex items-center w-full justify-center gap-x-8 bg-gradient-to-r from-[#DF9F28] from-10% via-[#ecc64e] via-60% to-[#DF9F28] to-90%">
      {NAVIGATION_DEMO_2.map((item) => (
        <NavigationItem key={item.id} menuItem={item} />
      ))}
    </ul>
  );
}

export default Navigation;
