import fs from 'fs';
import gracefulFs from 'graceful-fs';

gracefulFs.gracefulify(fs);

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
  }
};

module.exports = {
  compiler: {
    styledComponents: true,
  },
}

export default nextConfig;
