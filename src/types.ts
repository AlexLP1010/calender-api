import { DateRangeError } from "./errors"

export class RangeDate {
  private _startDate:Date
  private _endDate:Date

  constructor(startDate?:Date, endDate?:Date) {
    if(!startDate || !endDate) {
      this._startDate = new Date()
      this._endDate = new Date()
    } else {
      this.validateDates(startDate, endDate)
      this._startDate = startDate
      this._endDate = endDate
    }
  }

  private validateDates(first:Date, second:Date) {
    if(first >= second)
      throw new DateRangeError('The first date must be before the second date')
  }

  public set startDate(newDate:Date) {
    this.validateDates(newDate, this._endDate)
    this._startDate = newDate
  }

  public set endDate(newDate:Date) {
    this.validateDates(this._startDate, newDate)
    this._endDate = newDate
  }
  
  
  public get startDate() : Date {
    return this._startDate
  }
  
  public get endDate() : Date {
    return this._endDate
  }
}

export interface Entry {
  title: string
  description: string
  date: RangeDate
}
