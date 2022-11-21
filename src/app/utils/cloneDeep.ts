export function cloneDeep<T>(array: T): T {
  return JSON.parse(JSON.stringify(array));
}
