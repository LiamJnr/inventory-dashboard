import { sidebarFunction } from "./components/sidebar.js";
import { metricCards } from "./components/metricCards.js";
import { progressBars } from "./components/progressbars.js";
import { collapseSidebar } from "./components/collapseSidebar.js";
import { overviewCards } from "./components/overviewCards.js";

document.addEventListener('DOMContentLoaded', () =>{

    collapseSidebar();
    
    sidebarFunction();
    
    metricCards();

    progressBars();

    overviewCards();
})