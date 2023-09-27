export class DateRangeError extends Error {
  constructor(message:string) {
    super(message)
    this.name = 'DateRangeError'
  }
}

export class MissingOrInvalidData extends Error {
  constructor(message:string) {
    super(message)
    this.name = 'MisingOrInvalidData'
  }
}