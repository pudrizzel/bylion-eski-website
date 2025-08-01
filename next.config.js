const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DISCORD_BOT_TOKEN: process.env.DISCORD_BOT_TOKEN || '',
    DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID || '',
    DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET || '',
    DASHBOARD_TITLE: process.env.DASHBOARD_TITLE || 'ByLion Dashboard',
    DASHBOARD_DESCRIPTION: process.env.DASHBOARD_DESCRIPTION || 'Discord Bot Management Dashboard',
    BRAND_COLOR: process.env.BRAND_COLOR || '#eab308',
    ACCENT_COLOR: process.env.ACCENT_COLOR || '#facc15',
  },
};

module.exports = withNextIntl(nextConfig);