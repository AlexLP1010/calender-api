import { getAll, getOne, remove, save, update } from "../db/calender";
import { Entry } from "../types";

export async function createEntry(entry:Entry) {
  const result = await save(entry)
  return result[0]
}

export async function updateEntry(id:number, entry:Entry) {
  const result = await update(id, entry)
  return result[0]
}

export async function getAllEntries() {
  const result = await getAll()
  return result[0]
}

export async function getOneEntry(id:number) {
  const result = await getOne(id)
  return result[0]
}

export async function removeEntry(id:number) {
  const result = await remove(id)
  return result[0]
}