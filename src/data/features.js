import React from 'react'
import Translate, { translate } from '@docusaurus/Translate';

const features = [
  {
    title: <>Application Centric</>,
    imgUrl: 'img/application-centric.svg',
    description: (
      <>
        <p>
          KubeVela enforces an Application abstraction as its main API and ALL KubeVela's 
          capabilities serve for the applications' needs only. This is achieved by adopting 
          the <a href="https://github.com/oam-dev/spec">Open Application Model</a> as the core API for KubeVela.
        </p>
      </>
    ),
  },
  {
    title: <>Extending Natively</>,
    imgUrl: 'img/extending-natively.svg',
    description: (
      <>
        <p>
          The Application abstraction is composed of modularized building blocks named components and traits. 
          Any capability provided by Kubernetes ecosystem can be added to KubeVela as new component or trait 
          through simple <code>kubectl apply -f</code>.
        </p>
      </>
    ),
    reverse: true,
  },
  {
    title: <>Simple yet Extensible Abstraction Mechanism</>,
    imgUrl: 'img/simple-yet-extensible-abstraction-mechanism.svg',
    description: (
      <>
        <p>
          The Application abstraction is implemented with server-side encapsulation controller 
          (supports <a href="https://github.com/cuelang/cue">CUELang</a> and <a href="https://helm.sh/">Helm</a>
           as templating engine) to abstract user-facing primitives from Kubernetes API resources. 
           Changes to existing capability templates (or new templates added) take effect at runtime, 
           neither recompilation nor redeployment of KubeVela is required.
        </p>
      </>
    ),
  },
]

export default features
