export interface Todo {
  id: string;
  text: string;
  done: boolean;
}


export interface CreateTodoInput {
  text: string;
}


export interface UpdateTodoInput {
  text: string;
  done: boolean;
}

export interface ApiErrorResponse {
  error: string;
  details?: Record<string, string[]>;
}