import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import "./globals.css";
import "./home.css";
import "./about.css";
import "./contact.css";
import "./page.module.css";
import "./photos.css";
import "./topbar.css";
import "./topnav.css";
import "./work.css";
import "./experience.css";
import "./extracurricular.css";
import "./resume.css";
import "./skills.css";
import "./hobbies.css";
import "./cv.css";
// Project releases
import "./todolist.css";
import "./dropdown.css";
import "./sorting.css";

import { DataProvider } from "@/context/DataContext";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
	const router = useRouter();

	return (
		<DataProvider>
			<AnimatePresence mode="wait">
				<motion.div
					key={router.pathname}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
				>
					<Component key={router.route} {...pageProps}></Component>
				</motion.div>
				<motion.div
					className="slide-in"
					initial={{ scaleY: 0 }}
					animate={{ scaleY: 0 }}
					exit={{ scaleY: 1 }}
					transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
				></motion.div>
				<motion.div
					className="slide-out"
					initial={{ scaleY: 1 }}
					animate={{ scaleY: 0 }}
					exit={{ scaleY: 0 }}
					transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
				></motion.div>
			</AnimatePresence>
		</DataProvider>
	);
}
