export const session = {
  set<T>(key: string, value: T) {
    try {
      sessionStorage.setItem(key, JSON.stringify(value))
    } catch (err) {
      console.error(`Error saving session key "${key}":`, err)
    }
  },

  get<T>(key: string): T | null {
    try {
      const item = sessionStorage.getItem(key)
      return item ? (JSON.parse(item) as T) : null
    } catch (err) {
      console.error(`Error parsing session key "${key}":`, err)
      return null
    }
  },

  remove(key: string) {
    try {
      sessionStorage.removeItem(key)
    } catch (err) {
      console.error(`Error removing session key "${key}":`, err)
    }
  },

  clear() {
    try {
      sessionStorage.clear()
    } catch (err) {
      console.error("Error clearing session storage:", err)
    }
  },
}
