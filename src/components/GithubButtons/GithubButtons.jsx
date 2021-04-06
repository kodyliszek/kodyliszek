import React from 'react';
import GitHubButton from 'react-github-btn';

const GithubButton = () => (
  <>
    <GitHubButton
      className="github-button"
      href="https://github.com/kodyliszek/kodyliszek/fork"
      data-icon="octicon-repo-forked"
      data-size="large"
      data-show-count="true"
      aria-label="Fork kodyliszek on GitHub"
    >
      Fork
    </GitHubButton>
    <GitHubButton
      className="github-button"
      href="https://github.com/kodyliszek/kodyliszek"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star kodyliszek on GitHub"
    >
      Star
    </GitHubButton>
  </>
);

export default GithubButton;
