import React from 'react'
import { css, Global } from '@emotion/core'

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import SEO from '@rocketseat/gatsby-theme-docs/src/components/SEO';

import Prism from 'prism-react-renderer/prism'

import Index from '../text/index.mdx';

;(typeof global !== 'undefined' ? global : window).Prism = Prism

require('prismjs/components/prism-rust')

export default function Homepage(props) {
  return (
    <Layout>
      <Global styles={css({
        [`pre[class~='language-rust']::before`]: {
          content: '"rust"',
          background: '#b7410e',
          color: '#fff',
        }
      })} />
      <SEO />
      <Index />
    </Layout>
  )
}
