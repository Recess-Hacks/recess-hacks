import type { Metadata } from "next";
import React from "react";
import "./global.css"

export const metadata: Metadata = {
    title: "RecessHacks 2025",
    description: "RecessHacks 5.0 is our fifth ever iteration hackathon. We are a highschool hackathon open to all students from August 23-24. Hours of coding, mentorship & fun!",
    openGraph: {
        title: "RecessHacks 2025",
        type: "website",
        url: "https://recesshacks.org/",
        images: [
            {
                url: "https://recesshacks.org/logo.png",
            },
        ],
        description: "RecessHacks 5.0 is our fifth ever iteration hackathon. We are a highschool hackathon open to all students from August 23-24. Hours of coding, mentorship & fun!",
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        // Disable hydration warning since browser addons/extensions trigger
        <html lang="en" suppressHydrationWarning>
            <head>
                <meta charSet="UTF-8" />
                <link rel="icon" type="image/svg+xml" href="https://recesshacks.org/logo.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
                <title>RecessHacks</title>

                <meta property="og:title" content="RecessHacks 2025" />
                <meta property="og:description" content="RecessHacks 5.0 is our fifth ever iteration hackathon. We are a highschool hackathon open to all students from August 23-24. Hours of coding, mentorship & fun!" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/logo.png" />
                
                <script defer src="https://cloud.umami.is/script.js"
                    data-website-id="515f16a5-8036-482d-b535-7cdc2310d52b"></script>
            </head>
            <body className="overflow-x-hidden">
                {children}
            </body>
        </html>
    );
}
