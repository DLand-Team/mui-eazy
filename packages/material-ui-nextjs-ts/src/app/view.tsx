"use client";
import image1 from "@/assets/image/test-image-1.jpg";
import image2 from "@/assets/image/test-image-2.jpg";
import image3 from "@/assets/image/test-image-3.webp";
import image4 from "@/assets/image/test-image-4.webp";
import Footer from "@/common/components/Footer";
import Header from "@/common/components/Header";
import LoginModalComponent from "@/common/components/LoginModal";
import styles from "./index.module.scss";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LandCard from "@/common/components/Card";
import dynamic from "next/dynamic";
import { Container } from "@mui/material";

const DemoWithNoSSR = dynamic(() => import("./_demo/demo"), {
	ssr: false,
});

export default function View() {
	const router = useRouter();
	const [loginModalOpen, setLoginModalOpen] = useState(false);
	return (
		<div className={styles.container}>
			<Header loginClick={() => setLoginModalOpen(true)}></Header>
			<DemoWithNoSSR />
			<div className={styles.banner}>
				<video
					src="https://openaicomproductionae4b.blob.core.windows.net/production-twill-01/121dd5e0-eaea-424d-bdf2-db02ca1f5e55/gpt-4-92586ac_1080p60.mp4"
					aria-hidden="true"
					data-recon-click="covers,onVideoBtnClick,covers,covers"
					data-recon-globalfocus="covers,playOnBrowserActive,covers,covers"
					data-recon-globalblur="covers,onBrowserBlur,covers,covers"
					preload="metadata"
					muted
					loop
					autoPlay
					playsInline
				></video>
				<div className={styles.cover}>
					<div className={styles.topText}>
						Discover New Opportunities & Drive Growth
					</div>
					<div className={styles.bottomText}>
						Access Unbeatable Value with Dland's Exclusive
						Opportunities for SMEs
					</div>
				</div>
			</div>
			<Container className={styles.cards}>
				<LandCard
					className={styles.each}
					image={image1.src}
					title={"Mobile Phone Plans Special "}
					onClick={() => router.push("/detail")}
				></LandCard>
				<LandCard
					className={styles.each}
					image={image2.src}
					title={"Mobile Phone Plans Special "}
					onClick={() => router.push("/detail")}
				></LandCard>
				<LandCard
					className={styles.each}
					image={image3.src}
					title={"Mobile Phone Plans Special "}
					onClick={() => router.push("/detail")}
				></LandCard>
				<LandCard
					className={styles.each}
					image={image4.src}
					title={"Mobile Phone Plans Special "}
					onClick={() => router.push("/detail")}
				></LandCard>
				<LandCard
					className={styles.each}
					image={image1.src}
					title={"Mobile Phone Plans Special "}
					onClick={() => router.push("/detail")}
				></LandCard>
				<LandCard
					className={styles.each}
					image={image2.src}
					title={"Mobile Phone Plans Special "}
					onClick={() => router.push("/detail")}
				></LandCard>
				<LandCard
					className={styles.each}
					image={image3.src}
					title={"Mobile Phone Plans Special "}
					onClick={() => router.push("/detail")}
				></LandCard>
				<LandCard
					className={styles.each}
					image={image4.src}
					title={"Mobile Phone Plans Special "}
					onClick={() => router.push("/detail")}
				></LandCard>
			</Container>
			<Footer></Footer>
			<LoginModalComponent
				open={loginModalOpen}
				onClose={() => setLoginModalOpen(false)}
			></LoginModalComponent>
		</div>
	);
}
