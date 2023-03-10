<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** techsavagery, tests-cypress, twitter_handle, email, Tech Savagery: Tests - Cypress, Functional tests built to showcase the features and value of the Cypress.io testing framework.
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!--[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]-->

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <!-- <a href="">
    <img src="" alt="Logo" width="516" height="120">
  </a> -->

  <h3 align="Left">MHM Automated Tests</h3>

  <p align="Left">
    Test suite to validate features of the Mental Health Match web app. 
    <br />
    <a href="https://github.com/TechSavagery/mhm-tests"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    ·
    <a href="https://github.com/TechSavagery/mhm-tests/issues">Report Test Automation Defect</a>
    ·
    <a href="https://github.com/TechSavagery/mhm-tests/issues">Request Test Automation</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## Latest Test Run: 
https://techsavagery.github.io/mhm-tests/

## About The Project

<!--[![Product Name Screen Shot][product-screenshot]](https://example.com)-->

### Test Plan Outline
- Therapist
 - Marketing Pages Validation
 - Account Creation
   -  Basic info 
   -  Profile Prompts, Certifications, Specialities etc 
 -  Account Edits 
   -  Basic Info
   -  Prompts, Certifications, Specialities etc
 -  Billing 
   -  Sign Up 
   -  Cancellation (Not Covered) 
   -  Change Subscription Type (Not Covered)
 -  Therapist Search 
   - Search Results 
   - Email Trigger 
 -  
- Consumer
- 

### Built With

- [Cypress.io](https://www.cypress.io/)

<!-- GETTING STARTED -->

## Getting Started

To run this locally follow these steps.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/TechSavagery/mhm-tests.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<!-- USAGE EXAMPLES -->

## Usage

To Run Tests in specfic environments:
```
interactive: starts a test managemment browser that allows you to run tests via a GUI
monitor: Provides the same GUI but automatically runs so that you can just watch it do its thing 
ci: runs headlessly so you can leverage this in ci/cd builds 
```
## Development
`npm run test:interactive:dev`  
`npm run test:monitor:dev`  
`npm run test:ci:dev`  

## QA 
`npm run test:interactive:qa`  
`npm run test:monitor:qa`  
`npm run test:ci:dev`  

## Production 
`npm run test:interactive:prod`  
`npm run test:monitor:prod`  
`npm run test:ci:prod`  

## CI via GitHub actions:
### Base GitHub Actions Yaml 
```
name: MHM Automated Tests
on: [push]
jobs:
  qa-environment-tests-chrome:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Run Cypress Tests Chrome
        uses: cypress-io/github-action@v2
        with:
          browser: chrome
          headless: true
          spec: |
            cypress/integration/workflows/**/*spec.js
            cypress/integration/pages/**/*spec.js
          config-file: cypress/env/qa.json
          config: video=false
  qa-environment-tests-firefox:
    runs-on: ubuntu-latest
    container:
      image: cypress/browsers:node13.6.0-chrome80-ff72
      options: --user 1001
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Run Cypress Tests Firefox
        uses: cypress-io/github-action@v2
        with:
          browser: firefox
          headless: true
          spec: |
            cypress/integration/workflows/**/*spec.js
            cypress/integration/pages/**/*spec.js
          config-file: cypress/env/qa.json
          config: video=false
```

### Adding Test Execution Report via Github Pages

The following will run this workflow:

1. Copy Videos to public directory for use in test report generation
2. Merge individual spec file reports into one report 
3. Generate html report 
4. Deploy to github pages

For detailed config and dependencies setup, please refer to the following article below:
https://medium.com/swlh/publish-your-cypress-test-report-with-github-actions-47248788713a

```
- name: Copy Videos for Test Report
        run: |
          mkdir public
          cp -r cypress/videos public/videos
      - name: Merge Test Result Files
        run: npm run report:merge
      - name: Generate HTML report
        run: npm run report:generate
      - name: Deploy Cypress Test Report 
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GH_TOKEN }}
          publish_dir: ./public
          user_name: 'github-actions[bot]'
          user_email: 'github-actions[bot]@users.noreply.github.com'
```

### Increasing Quality of Screenshots and Videos 
https://www.cypress.io/blog/2021/03/01/generate-high-resolution-videos-and-screenshots/

<!--Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_-->

<!-- ROADMAP -->

<!-- CONTRIBUTING -->

<!-- LICENSE -->

<!-- CONTACT -->

## Contact

Your Name - [@ladellerby](https://twitter.com/ladellerby) - ladellerby@techsavagery.net

Project Link: [https://github.com/TechSavagery/mhm-tests](https://github.com/TechSavagery/mhm-tests)

<!-- ACKNOWLEDGEMENTS -->

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/techsavagery/repo.svg?style=for-the-badge
[contributors-url]: https://github.com/techsavagery/repo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/techsavagery/repo.svg?style=for-the-badge
[forks-url]: https://github.com/techsavagery/repo/network/members
[stars-shield]: https://img.shields.io/github/stars/techsavagery/repo.svg?style=for-the-badge
[stars-url]: https://github.com/techsavagery/repo/stargazers
[issues-shield]: https://img.shields.io/github/issues/techsavagery/repo.svg?style=for-the-badge
[issues-url]: https://github.com/techsavagery/repo/issues
[license-shield]: https://img.shields.io/github/license/techsavagery/repo.svg?style=for-the-badge
[license-url]: https://github.com/techsavagery/repo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/techsavagery
