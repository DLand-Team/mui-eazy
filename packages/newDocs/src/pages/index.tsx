import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Logo from "@site/static/img/logo.svg";
import Layout from "@theme/Layout";
import styles from "./index.module.scss";
function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	debugger;
	return (
		<header className={styles.heroBanner}>
			<div className="container">
				<div className={styles.header}>
					<div className={styles.infoPart}>
						<h1>
							<p className={styles.title}>MuiEazy</p>
						</h1>
						<h1>
							<p className={styles.title2}>
								A high-level component library based on mui
							</p>
							<p className={styles.title3}>
								Developing practical components for common
								business scenarios to provide robust support for
								development.
							</p>
						</h1>
						<div className={styles.btn}>Get Started</div>
					</div>
					<div className={styles.logoPart}>
						<div className={styles.image}>
							<div className={styles.imageContainer}>
								<div className={styles.imageBg}></div>
								<Logo className={styles.logo}></Logo>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default function Home(): JSX.Element {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={`Hello from ${siteConfig.title}`}
			description="Description will go into a meta tag in <head />"
		>
			<HomepageHeader />
			<main>
				<HomepageFeatures />
			</main>
		</Layout>
	);
}
