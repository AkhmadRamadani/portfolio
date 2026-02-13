import * as XLSX from 'xlsx';
import type { GitHubData, Profile, Repository } from '@/types/github';
import path from 'path';
import { promises as fs } from 'fs';

export async function loadGitHubData(): Promise<GitHubData> {
  let arrayBuffer: ArrayBuffer;
  const googleSheetUrl = process.env.GOOGLE_SHEET_URL;

  if (googleSheetUrl) {
    const response = await fetch(googleSheetUrl, { next: { revalidate: 60 } });
    if (!response.ok) {
      throw new Error('Failed to fetch data from Google Sheet');
    }
    arrayBuffer = await response.arrayBuffer();
  } else {
    const filePath = path.join(process.cwd(), 'public', 'data', 'akhmadramadani_github_data.xlsx');
    const buffer = await fs.readFile(filePath);
    // Convert Buffer to ArrayBuffer
    arrayBuffer = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
  }

  const workbook = XLSX.read(arrayBuffer, { type: 'array' });

  const profileSheet = workbook.Sheets['Profile'];
  const reposSheet = workbook.Sheets['Repositories'];

  if (!profileSheet || !reposSheet) {
    throw new Error('Missing "Profile" or "Repositories" sheet in the Excel file');
  }

  const profileData = XLSX.utils.sheet_to_json<Profile>(profileSheet);
  const repositoriesData = XLSX.utils.sheet_to_json<Repository>(reposSheet);

  // Helper to safely convert Date objects to strings
  const sanitize = (obj: any): any => {
    if (!obj) return obj;
    const newObj = { ...obj };
    Object.keys(newObj).forEach((key) => {
      const value = newObj[key];
      if (value instanceof Date) {
        newObj[key] = value.toISOString();
      }
    });
    return newObj;
  };

  return {
    profile: sanitize(profileData[0]),
    repositories: repositoriesData.map(sanitize),
  };
}
