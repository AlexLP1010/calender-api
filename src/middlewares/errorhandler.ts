import { NextFunction, Request, Response } from "express";

export function errorHandler(err:Error, _req:Request, res:Response, _next:NextFunction) {
  const clientErrors = [
    'DateRangeError',
    'MisingOrInvalidData'
  ]
  if(clientErrors.includes(err.name)) {
    res.status(400)
    res.send({ error: err.message })
  }
  res.status(500)
  res.send({ error: 'Something went wrong' })
}