import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { RecipeStoreProvider, ThemeProviders } from "./providers/providers";
import { Header, Footer } from "./components/components";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Nuska",
	
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProviders>
					<Header />
					<RecipeStoreProvider>{children}</RecipeStoreProvider>
					<Footer />
				</ThemeProviders>
			</body>
		</html>
	);
}
