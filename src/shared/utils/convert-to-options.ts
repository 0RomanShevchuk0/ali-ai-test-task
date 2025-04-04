export interface Option {
  value: string
  label: string
}

export function convertToOptions(data: string[]): Option[] {
  return data.map((item) => ({
    value: item,
    label: item.charAt(0).toUpperCase() + item.slice(1).toLowerCase(),
  }))
}
