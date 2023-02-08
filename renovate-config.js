module.exports = {
    branchPrefix: 'renovate/',
    username: 'renovate-self-hosted-apter[bot]',
    gitAuthor: 'Renovate Self Hosted Apter <123456+renovate-self-hosted-apter[bot]@users.noreply.github.com>',
    onboarding: true,
    onboardingConfig: {
        "$schema": "https://docs.renovatebot.com/renovate-schema.json",
        "extends": [
            "github>apter-tech/renovate-config#v0.2.0"
        ]
    },
    platform: 'github',
    includeForks: true,
    packageRules: [
      {
        description: 'lockFileMaintenance',
        matchUpdateTypes: [
          'pin',
          'digest',
          'patch',
          'minor',
          'major',
          'lockFileMaintenance',
        ],
        dependencyDashboardApproval: false,
        stabilityDays: 0,
      },
    ],
  };
