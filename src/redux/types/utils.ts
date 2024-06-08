import { Action } from 'redux';

// Utility function to generate a union type of all action types
export type ActionTypesUnion<T extends { [key: string]: Action }> = T[keyof T];
