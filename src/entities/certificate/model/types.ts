export type CertificateCategory = 'software' | 'cloud' | 'ai' | 'security';

export interface SubCertificate {
  title: string;
  certId: string;
}

export interface Certificate {
  id: string;
  thumbnail: string;
  isSpecialization: boolean;
  issuer: string;
  title: string;
  date: string;
  description: string;
  skills: string[];
  credentialUrl: string;
  category: CertificateCategory;
  subCertificates?: SubCertificate[];
}