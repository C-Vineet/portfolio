import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.join(__dirname, '..')

// Copy directory recursively
function copyDirRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true })
  }

  const items = fs.readdirSync(src)

  for (const item of items) {
    const srcPath = path.join(src, item)
    const destPath = path.join(dest, item)
    const stat = fs.statSync(srcPath)

    if (stat.isDirectory()) {
      copyDirRecursive(srcPath, destPath)
    } else {
      // Skip certain files
      if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.css')) {
        let content = fs.readFileSync(srcPath, 'utf-8')

        // Remove React Router imports and replace with Next.js
        content = content.replace(/from 'react-router-dom'/g, "from 'next/link'")
        content = content.replace(/import { Link, useLocation } from/g, "import Link from 'next/link';\nimport { usePathname } from 'next/navigation';\nimport { useLocation }")
        content = content.replace(/useLocation\(\)/g, "usePathname()")
        content = content.replace(/location\.pathname/g, "pathname")

        // Add 'use client' directive for client components
        if ((content.includes('useState') || content.includes('useEffect') || content.includes('Router')) && !content.startsWith("'use client'")) {
          content = "'use client'\n\n" + content
        }

        fs.writeFileSync(destPath, content, 'utf-8')
      }
    }
  }
}

// Copy src/app/components to components
console.log('Copying components...')
const srcComponentsDir = path.join(projectRoot, 'src/app/components')
const destComponentsDir = path.join(projectRoot, 'components')

if (fs.existsSync(srcComponentsDir)) {
  copyDirRecursive(srcComponentsDir, destComponentsDir)
  console.log('✓ Components copied')
}

// Copy src/app/pages to app/pages (route groups)
console.log('Copying pages...')
const srcPagesDir = path.join(projectRoot, 'src/app/pages')
const destPagesDir = path.join(projectRoot, 'app/pages')

if (fs.existsSync(srcPagesDir)) {
  if (!fs.existsSync(destPagesDir)) {
    fs.mkdirSync(destPagesDir, { recursive: true })
  }

  const pages = fs.readdirSync(srcPagesDir)

  for (const page of pages) {
    const srcPath = path.join(srcPagesDir, page)
    const destPath = path.join(destPagesDir, page)
    let content = fs.readFileSync(srcPath, 'utf-8')

    // Remove React Router imports
    content = content.replace(/from 'react-router-dom'/g, "from 'next/link'")
    content = content.replace(/import { Link }/g, "import Link from 'next/link'")
    content = content.replace(/<Link\s+to=/g, '<Link href=')

    // Add 'use client' for client-side pages
    if (!content.startsWith("'use client'")) {
      content = "'use client'\n\n" + content
    }

    // Make it a named export compatible with new structure
    content = content.replace(/export function (\w+)\(\)/, 'export default function $1()')

    fs.writeFileSync(destPath, content, 'utf-8')
  }

  console.log('✓ Pages copied')
}

console.log('\n✓ Migration complete!')
