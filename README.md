[![Renovate](https://github.com/apter-tech/renovate-bot-self-hosted/actions/workflows/renovate.yml/badge.svg)](https://github.com/apter-tech/renovate-bot-self-hosted/actions/workflows/renovate.yml)

# Renovate Workflow

This repository contains a GitHub Actions workflow for using [Renovate](https://renovatebot.com/) to easily update dependencies within your organization. The setup is simple and straightforward, making it easy to keep your dependencies up-to-date and secure.

## Usage

If you want to enable Renovate on a repository in the organization.
1. Go to the [Renovate GitHub App's settings page](https://github.com/organizations/apter-tech/settings/installations/33594344).
2. Scroll down to the Repository Access section.
3. Select your repository to enable Renovate.

The workflow can be triggered in 4 ways:
1. On demand, by manually dispatching the workflow and specifying the desired log level.
2. On a schedule every 15 minutes between 8:00 and 17:00 (CET) on every day between Monday and Friday, by configuring a cron schedule.
3. On push to main branch
4. On push to a pull request

## Inputs

The workflow has the following input:

- `logLevel`: Renovate log levels are used to control the amount of detail that is output in the Renovate log files. Possible log level options: trace, debug, info, warn, error, and fatal.
- `dryRun`: Use dryRun to preview the behavior of Renovate in logs, without making any changes to the repository files. You can choose from the following behaviors for the dryRun config option:
    - `null`: Default behavior (except on pull requests) - Performs a regular Renovate run including creating/updating/deleting branches and PRs
    - `"extract"`: Performs a very quick package file scan to identify the extracted dependencies
    - `"lookup"`: Performs a package file scan to identify the extracted dependencies and updates available
    - `"full"`: Default behaviour on pull requests. Performs a dry run by logging messages instead of creating/updating/deleting branches and PRs.
    
    Information provided mainly in debug log level.

## Workflow Configuration

The workflow is defined in the `renovate.yml` file and contains the following steps:
1. Checkout: checkouts the repository to the runner.
2. Request a Github token: request a Github token using `getsentry/action-github-app-token` action.
3. Self-hosted Renovate: runs the renovate using `renovatebot/github-action` action.

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
