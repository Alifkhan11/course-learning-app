export type TErrorSources = {
    path: string | number;
    message: string;
  }[];
  
  export type TGeneriteErrorResponse = {
    statusCode: number;
    message: string;
    errorSource: TErrorSources;
  };