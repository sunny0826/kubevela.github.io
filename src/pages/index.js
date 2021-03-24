import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import features from '../data/features'
import Translate, { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Feature({ imgUrl, title, description, reverse }) {
  return (
    <div className={clsx('row', styles.feature, reverse ? styles.featureReverse : '')}>
      <div className="col col--3">
        <div className="text--center">
          {imgUrl && <img className={styles.featureImage} src={useBaseUrl(imgUrl)} alt={title} />}
        </div>
      </div>
      <div className={clsx('col col--9', styles.featureDesc)}>
        <div>
          <h2>{title}</h2>
          <div>{description}</div>
        </div>
      </div>
    </div>
  )
}


export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout title={siteConfig.tagline} description={siteConfig.tagline}>

      <header className={clsx('hero', styles.hero)}>
        <div className="container text--center">
          <div className={styles.heroLogoWrapper}>
            <img className={styles.heroLogo} src={useBaseUrl('img/logo.svg')} alt="Pod Lens Logo" />
          </div>
          <h2 className={clsx('hero__title', styles.heroTitle)}>{siteConfig.title}</h2>
          <p className="hero__subtitle"><Translate>{siteConfig.tagline}</Translate></p>
        </div>
      </header>

      <WhatIs />

      <main className={clsx('hero', styles.hero)}>
        <div className="container">
          <section className={styles.features}>
            <div className="container">
              {features.map((f, idx) => (
                <Feature key={idx} {...f} />
              ))}
            </div>
          </section>
        </div>
      </main>

    </Layout>
  );
}

const WhatIs = () => (
  <div className={clsx('hero', styles.hero)}>
    <div className="container">
      <div className="row">
        <div className="col col--6">
          <h1>What is KubeVela?</h1>
          <p className="hero__subtitle">
            <small>
              <strong>For platform builders</strong>: KubeVela serves as a framework that empowers them to create user friendly yet highly extensible platforms at ease
              <br />
              <strong>For developers</strong>: such Application abstraction built with KubeVela will enable them to design and ship their applications to Kubernetes with minimal effort.
              </small>
          </p>
        </div>
        <div className="col">
          <img
            className="image"
            src={useBaseUrl("img/what-is-kubevela.png")}
            align="right"
            alt="what is kubevela"
          />
        </div>
      </div>
    </div>
  </div>
);