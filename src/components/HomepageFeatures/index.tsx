import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Image: React.ComponentType<React.ComponentProps<'img'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Combat Phishing with Confidence',
    Image: require('@site/static/img/phishingbattle.png').default,
    description: (
      <>
        Craft custom phishing campaigns that mirror real-world attacks. Train your staff to spot the signs and avoid costly security breaches.
      </>
    ),
  },
  {
    title: 'Knowledge is Power',
    Image: require('@site/static/img/learningship.png').default,
    description: (
      <>
        Our software doesn't just test - it educates. Provide targeted training resources that explain phishing tactics and promote safe online behavior.
      </>
    ),
  },
  {
    title: 'The Power of Open Source',
    Image: require('@site/static/img/opensourceship.png').default,
    description: (
      <>
        Security You Can See. Inspect, modify, and contribute to our code, ensuring full transparency and building trust.
      </>
    ),
  },
  // {
  //   title: 'The Power of Open Source',
  //   Image: require('@site/static/img/phishingbattle.png').default,
  //   description: (
  //     <>
  //       Join a global network of experts dedicated to fighting phishing. Access a continually evolving toolset powered by collaboration and innovation.
  //     </>
  //   ),
  // },
];

function Feature({title, Image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Image} className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
