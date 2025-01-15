import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  const jsonDirectory = path.join(process.cwd(), 'src/lib/shared/data');
  const fileContents = await fs.readFile(path.join(jsonDirectory, 'resume.json'), 'utf8');
  return NextResponse.json(JSON.parse(fileContents));
}
