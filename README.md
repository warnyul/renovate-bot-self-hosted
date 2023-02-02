# Renovate Workflow

This repository contains a GitHub Actions workflow for using [Renovate](https://renovatebot.com/) to easily update dependencies within your organization. The setup is simple and straightforward, making it easy to keep your dependencies up-to-date and secure.

## Usage

The workflow can be triggered in 4 ways:
1. On demand, by manually dispatching the workflow and specifying the desired log level.
2. On a schedule every 30 minutes, by configuring a cron schedule.
3. On push to main branch
4. On push to a pull request

## Inputs

The workflow has the following input:

- `logLevel`: Renovate log levels are used to control the amount of detail that is output in the Renovate log files. Possible log level options: trace, debug, info, warn, error, and fatal.

## Workflow Configuration

The workflow is defined in the `renovate.yml` file and contains the following steps:
1. Checkout: checkouts the repository to the runner.
2. Request a Github token: request a Github token using `getsentry/action-github-app-token@v2.0.0` action.
3. Self-hosted Renovate: runs the renovate using `renovatebot/github-action@v34.109.1` action.

## Secrets

The following secrets are required to be added to the repository for the workflow to run correctly:
- `APP_ID`
- `PRIVATE_KEY`

## Note

It is mandatory to have `renovate.json` file in the root of the repository with the configuration required by renovate.

## Additional resources

- [Renovate Documentation](https://renovatebot.com/docs)
- [GitHub Actions](https://docs.github.com/en/actions)
- [getsentry/action-github-app-token](https://github.com/getsentry/action-github-app-token)
- [renovatebot/github-action](https://github.com/renovatebot/github-action)
