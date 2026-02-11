export interface Profile {
  Username: string;
  Name: string;
  Bio: string;
  Company: string;
  Location: string;
  Email: string;
  Blog: string;
  'Public Repos': number;
  Followers: number;
  Following: number;
  'Created At': string;
  'Profile URL': string;
  LinkedIn: string;
}

export interface Repository {
  'Repository Name': string;
  Description: string;
  URL: string;
  Stars: number;
  Forks: number;
  Language: string;
  'Created At': string;
  'Updated At': string;
  'README Content': string;
}

export interface GitHubData {
  profile: Profile;
  repositories: Repository[];
}
