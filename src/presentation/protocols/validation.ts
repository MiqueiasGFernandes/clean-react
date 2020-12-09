export default interface Validation {
  validate(input: Record<string, unknown>): string
}
