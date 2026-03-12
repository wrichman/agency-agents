import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://wrichman.github.io',
  base: '/agency-agents',
  integrations: [
    starlight({
      title: 'The Agency',
      description: '128 specialized AI agents ready to transform your workflow — from frontend wizards to compensation analysts.',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/wrichman/agency-agents' },
      ],
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        { label: '👔 Executive', autogenerate: { directory: 'executive' } },
        { label: '💻 Engineering', autogenerate: { directory: 'engineering' } },
        { label: '🎨 Design', autogenerate: { directory: 'design' } },
        { label: '📢 Marketing', autogenerate: { directory: 'marketing' } },
        { label: '💰 Paid Media', autogenerate: { directory: 'paid-media' } },
        { label: '💼 Sales', autogenerate: { directory: 'sales' } },
        { label: '📦 Product', autogenerate: { directory: 'product' } },
        { label: '📋 Project Management', autogenerate: { directory: 'project-management' } },
        { label: '🧪 Testing', autogenerate: { directory: 'testing' } },
        { label: '🤝 Support', autogenerate: { directory: 'support' } },
        { label: '👥 People & HR', autogenerate: { directory: 'hr' } },
        { label: '🎮 Game Development', autogenerate: { directory: 'game-development' } },
        { label: '🥽 Spatial Computing', autogenerate: { directory: 'spatial-computing' } },
        { label: '🎯 Specialized', autogenerate: { directory: 'specialized' } },
      ],
    }),
  ],
});
