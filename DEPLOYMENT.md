# Cloudflare Pages Deployment Guide

## Build Configuration

For Cloudflare Pages deployment, use these settings:

### Build Settings
- **Build command**: `npm run build`
- **Build output directory**: `out`
- **Root directory**: `/` (leave empty)
- **Node.js version**: `18` or `20`

### Environment Variables
None required for basic deployment.

### Build Process
1. The build process will:
   - Install dependencies with `npm install`
   - Run `npm run build` which executes Next.js static export
   - Output static files to the `out` directory
   - Create a `.nojekyll` file for proper routing

### Configuration Files
- `.npmrc` - Handles dependency resolution for Three.js packages
- `next.config.js` - Configured for static export with `output: 'export'`

### Troubleshooting
If you encounter dependency issues:
1. Clear build cache in Cloudflare Pages
2. Ensure Node.js version is set to 18 or 20
3. The `.npmrc` file should handle peer dependency conflicts automatically

## Local Testing
To test the build locally:
```bash
npm run build
# Check the 'out' directory for generated files
```
