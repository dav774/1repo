export type IntegrationService = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  apiEndpoint: string | null;
  apiKey: string | null;
  description: string | null;
  name: string | null;
};
