# jsconf.jp

JSConf Japan Website

URL: https://jsconf.jp

## Development

### Continuous integration

We use [CircleCI](https://circleci.com) as continuous integration(CI) service for this project.
If you want to write access to CircleCI, you need to have write privilege on this GitHub repo.
The build configuration file is located in `.circleci/config.yml`.

### Create a new website for next year

Assuming you create a 2020 website,

1. Create a directory named `2020` as in [2019](https://github.com/jsconfjp/jsconf.jp/tree/master/2019)  
   We used [Gatsby](https://github.com/gatsbyjs/gatsby) as a static site generator to create a 2019 website, but we don't need to continue to using Gatsby after next year. Use some tools that are easy to use and timely. If you continue to use Gatsby, please refer [2019/README](https://github.com/jsconfjp/jsconf.jp/tree/master/2019/README.md) to learn project structure.
1. Change the redirect destination of `public/index.html` to the new website url
1. Add build step to place build artifacts in `dist/2020` like as [2019's build process](https://github.com/jsconfjp/jsconf.jp/blob/9bf1fb4d805e8134dde5bea676407ecc037ffab4/.circleci/config.yml#L45)  
   If you place a build artifacts in dist/2020, it will be automatically deployed to `https://jsconf.jp/2020`.
