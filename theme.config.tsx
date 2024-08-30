import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const WorkInProgress = () => (
  <div className="wip-notice">
    This page is a work in progress.
  </div>
);

const config: DocsThemeConfig = {
  logo: <span>K-Scale Labs</span>,
  project: {
    link: "https://github.com/kscalelabs/",
  },
  chat: {
    link: "https://discord.gg/kscale",
  },
  docsRepositoryBase: "https://github.com/kscalelabs/docs",
  footer: {
    text: "K-Scale Labs Documentation",
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – K-Scale Labs'
    };
  },
  components: {
    WorkInProgress: WorkInProgress
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return (
          <div style={{
            background: '#f0f0f0',
            padding: '8px 12px',
            margin: '8px 0',
            borderRadius: '4px',
            fontWeight: 'bold',
            color: '#333',
            textTransform: 'uppercase',
            fontSize: '0.8em',
            letterSpacing: '0.05em'
          }}>
            {title}
          </div>
        )
      }
      return <>{title}</>
    }
  }
};

export default config;