export interface IAttachTaskRequest {
  id: string;
  userId: string;
  difficulty: number;
  document: ArrayBuffer | undefined;
  description?: string;
}
