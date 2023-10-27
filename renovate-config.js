module.exports = {
  branchPrefix: 'renovate/',
  onboarding: true,
  onboardingConfig: {
    "$schema": "https://docs.renovatebot.com/renovate-schema.json",
    "extends": [
      "github>apter-tech/renovate-config#v0.2.0"
    ]
  },
  platform: 'github',
  forkProcessing: "enabled",
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
      minimumReleaseAge: null,
    },
  ],
};
