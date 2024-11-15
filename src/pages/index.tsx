import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={clsx('container', styles.heroContent)}>
        {/* <img
          alt={siteConfig.title}
          className={clsx(styles.heroLogo, 'margin-vert--md')}
          src='img/logo.svg'
        /> */}
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttonsContainer}>
          <Link
            className={clsx('button button--primary button--lg', styles.getStartedButton)}
            to="/docs/intro"
          >
            Get Started
          </Link>
          <Link
            className={clsx('button button--secondary button--lg', styles.exploreButton)}
            to="#"
          >
            Explore Features
          </Link>
        </div>
        {/* <div className={styles.githubButtonContainer}>
          <iframe
            src="https://ghbtns.com/github-btn.html?user=html-mastery&amp;repo=html-mastery.github.io&amp;type=star&amp;count=true&amp;size=large"
            frameBorder={0}
            scrolling={0}
            width={170}
            height={30}
            title="GitHub Stars"
          />
        </div> */}
      </div>
    </header>
  );
}

function FeaturesSection() {
  return (
    <section className={styles.featuresSection}>
      <h2>Key Features</h2>
      <div className={styles.featuresGrid}>
        <div className={styles.featureItem}>Comprehensive HTML Tutorials</div>
        <div className={styles.featureItem}>Interactive Code Examples</div>
        <div className={styles.featureItem}>In-depth Explanations</div>
        <div className={styles.featureItem}>Community Support</div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="HTML Mastery is a free, open-source, online resource for learning HTML."
    >
      <HomepageHeader />
      <main>
        <FeaturesSection />
      </main>
    </Layout>
  );
}
