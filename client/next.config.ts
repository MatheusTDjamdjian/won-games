import fs from 'fs';
import gracefulFs from 'graceful-fs';

gracefulFs.gracefulify(fs);

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true
  },
  experimental: {
  }
};

export default nextConfig;
