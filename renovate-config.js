module.exports = {
    branchPrefix: 'renovate/',
    username: 'renovate-self-hosted-apter[bot]',
    gitAuthor: 'Renovate Self Hosted Apter <123456+renovate-self-hosted-apter[bot]@users.noreply.github.com>',
    onboarding: false,
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
