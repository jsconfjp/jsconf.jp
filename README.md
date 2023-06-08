# jsconf.jp

JSConf Japan Website

To edit your CFP, please make a pull request refer to [CONTRIBUTING.md](./CONTRIBUTING.md).

## Development

### Adding a volunteer staff

Please update `{YEAR}/src/data/members.yaml`

### Editting a talk or speaker

Please update `{YEAR}/src/data/talks.yaml` or `{YEAR}/src/data/speakers.yaml`

### Editting a sponsor

Please update `{YEAR}/src/data/sponsors.yaml`

### Create a new website for next year

1. Duplicate the next year's folder from the most recent year's folder
1. Change the redirect destination of `public/index.html` to the new website url
1. Edit `.github/workflows/CI.yml`, `.github/workflows/CD.yml` and `netlify.toml` accordingly
