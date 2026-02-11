import * as XLSX from 'xlsx';
import type { GitHubData, Profile, Repository } from '@/types/github';

export async function loadGitHubData(): Promise<GitHubData> {
  const response = await fetch('/data/akhmadramadani_github_data.xlsx');
  const arrayBuffer = await response.arrayBuffer();
  const workbook = XLSX.read(arrayBuffer, { type: 'array' });

  const profileSheet = workbook.Sheets['Profile'];
  const reposSheet = workbook.Sheets['Repositories'];

  const profileData = XLSX.utils.sheet_to_json<Profile>(profileSheet);
  const repositoriesData = XLSX.utils.sheet_to_json<Repository>(reposSheet);

  return {
    profile: profileData[0],
    repositories: repositoriesData,
  };
}
