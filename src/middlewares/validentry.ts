import { NextFunction, Request, Response } from "express";
import { MissingOrInvalidData } from "../errors";
import { Entry, RangeDate } from "../types";

export function validEntry(req:Request, _res:Response, next:NextFunction) {
  const { title, description, date } = req.body
  if (!title || !description || !date) {
    next(new MissingOrInvalidData('Some data is missing'))
  }

  const entry:Entry = {
    title,
    description,
    date: new RangeDate()
  }

  if(typeof date == 'string') {
    try {
      entry.date = new RangeDate(new Date(date), new Date(date))
    } catch (error) {
      next(error)
    }
  } else {
    try {
      if(!date.startDate || !date.endDate) 
        next(new MissingOrInvalidData('Some data is missing'))
      entry.date = new RangeDate(new Date(date.startDate), new Date(date.endDate))
    } catch (error) {
      next(error)
    }
  }

  req.body.entry = entry
  next()
}