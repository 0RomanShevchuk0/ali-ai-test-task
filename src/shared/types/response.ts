export const ResponseStatuses = {
  success: "success",
  error: "error",
} as const

export type ResponseStatus = keyof typeof ResponseStatuses
