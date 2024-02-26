export interface Task {
  id: number;
  name: string;
  completed: boolean;
}

export enum Filter {
  All = 'all',
  Active = 'active',
  Completed = 'completed',
}

export enum Sort {
  Name = 'name',
  Status = 'status',
}
