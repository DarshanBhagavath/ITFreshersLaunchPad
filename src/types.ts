export interface UserDetails {
  fullName: string;
  phoneNumber: string;
  emailId: string;
  address: string;
  highestEducation: string;
  stream: string;
  skills: string;
  projects: string;
  certifications: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  tags: string[];
  applyUrl?: string;
}
