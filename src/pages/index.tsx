import * as React from 'react'

import Page from '../components/Page'
import Terminal from '../components/Terminal'
import IndexLayout from '../layouts'
import ASCII from 'react-rainbow-ascii'

const IndexPage = () => {
  return (
    <IndexLayout>
      <Page>
        <Terminal title="/.welcome">
          <ASCII text="Local Jo" fallback="p" />
          <br />
          <h1>Jo Sprague - Senior Software Engineer</h1>
          <p className="emoji">
            ✨ I like to work with JavaScript/TypeScript, React,
            <br />
            Python and related tools and frameworks.
          </p>
          <p className="emoji">
            🚀 I have 10 years of experience working for teams like
            <br />
            <a
              className="blue badge"
              style={{ display: 'inline' }}
              href="https://github.com/nasa-gibs/worldview/pulls?utf8=%E2%9C%93&q=+is%3Apr+author%3Alocaljo+"
            >
              NASA
            </a>{' '}
            and the{' '}
            <a
              className="red badge"
              style={{ display: 'inline' }}
              href="https://github.com/hotosm/MapCampaigner/pulls?utf8=%E2%9C%93&q=is%3Apr+author%3Alocaljo+"
            >
              Humanitarian OpenStreetMap Team
            </a>
            .
          </p>
          <p className="emoji">
            💚 I'm interested in working with teams that have a<br />
            mission or product I'm passionate about.
          </p>
        </Terminal>
      </Page>
    </IndexLayout>
  )
}

export default IndexPage
