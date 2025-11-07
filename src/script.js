document.addEventListener("DOMContentLoaded", async () => {

    // Utility function to safely import a module
    const safeImport = async (path, exportName) => {

        try {
            const module = await import(path);
            const fn = module[exportName];

            if (typeof fn === "function") {
                return fn;
            } else {
                console.warn(`${exportName} is not a valid function in ${path}`);
                return null;
            }
        } catch (err) {
            console.warn(`Failed to load ${exportName} from ${path}:`, err);
            return null;
        }
    };

    // List of modules with their import paths and exported function names
    const modules = [
        { path: "./components/collapseSidebar.js", exportName: "collapseSidebar" },
        { path: "./components/sidebar.js", exportName: "sidebarFunction" },
        { path: "./components/metricCards.js", exportName: "metricCards" },
        { path: "./components/progressbars.js", exportName: "progressBars" },
        { path: "./components/overviewCards.js", exportName: "overviewCards" },
        { path: "./components/dataTables.js", exportName: "dataTables" },
        { path: "./components/subscriptions.js", exportName: "rszSubscriptions" },
    ];

    // Dynamically import and initialize modules safely
    for (const { path, exportName } of modules) {
        const fn = await safeImport(path, exportName);

        if (fn) {
            try {
                fn();
            } catch (err) {
                console.warn(`${exportName} failed to initialize:`, err);
            }
        }
    }

    console.info("Dashboard initialization complete (all modules handled safely)");
});
