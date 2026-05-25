import { NextResponse } from 'next/server'
import { execSync } from 'child_process'
import { readFileSync, existsSync } from 'fs'
import { join } from 'path'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const projectDir = process.cwd()

    // Create a tar.gz archive excluding unnecessary files
    const excludeList = [
      'node_modules',
      '.next',
      '.git',
      '*.log',
      'db/*.db',
      'db/*.db-journal',
      'upload',
      '.vercel',
      '.env',
      'local-*',
      '.claude',
      '.z-ai-config',
      'test',
      'prompt',
      'skills',
      '.zscripts',
    ]

    const excludeArgs = excludeList.map(e => `--exclude='${e}'`).join(' ')

    const outputPath = join('/tmp', 'wameed-store.tar.gz')

    // Remove old archive if exists
    if (existsSync(outputPath)) {
      execSync(`rm -f "${outputPath}"`)
    }

    // Create tar.gz archive
    execSync(`tar -czf "${outputPath}" ${excludeArgs} -C "${projectDir}" .`, {
      cwd: projectDir,
      stdio: 'pipe',
    })

    // Read the file
    const fileBuffer = readFileSync(outputPath)

    // Clean up
    execSync(`rm -f "${outputPath}"`)

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/gzip',
        'Content-Disposition': 'attachment; filename="wameed-store.tar.gz"',
        'Content-Length': fileBuffer.length.toString(),
      },
    })
  } catch (error: any) {
    console.error('Download error:', error)
    return NextResponse.json(
      { error: 'Failed to create download package', details: error.message },
      { status: 500 }
    )
  }
}
