import React from "react";

export default function Layout ({ children }: { children: React.ReactNode}) {
    return (
        <main>
            <nav>Category layout</nav>
            {children}
        </main>
    )
}