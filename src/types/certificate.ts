export interface SubModule {
  id: string;
  title: string;
  date: string;
  credentialId?: string | null;
  credentialUrl: string;
}

export interface UmbrellaCert {
  id: string;
  title: string;
  issuer: string;
  category: "Infrastructure" | "Development" | "Cloud" | "Productivity";
  date: string;
  thumbnail: string;
  description: string;
  skills: string[]; // <-- Crisp, high-leverage skill chips
  credentialId?: string | null;
  credentialUrl?: string | null;
  isSpecialization: boolean;
  status?: "Completed" | "Core Curriculum Completed";
  modules?: SubModule[];
}
