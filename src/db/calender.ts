import { ResultSetHeader, RowDataPacket } from "mysql2";
import { connectionPool } from ".";
import { Entry } from "../types";

export async function getAll() {
  const result = await connectionPool.query<RowDataPacket[]>('SELECT * FROM entries;')
  return result
}

export async function getOne(id:number) {
  const result = await connectionPool.query<RowDataPacket[]>('SELECT * FROM entries WHERE id = ?;',
  [id])
  return result
}

export async function save(entry:Entry) {
  const result = await connectionPool.query<ResultSetHeader[]>('INSERT INTO entries VALUES(0, ?, ?, ?, ?)',
  [entry.title, entry.description, entry.date.startDate, entry.date.endDate])
  return result
}

export async function update(id:number, entry:Entry) {
  const result = await connectionPool.query<ResultSetHeader[]>('UPDATE entries SET title = ?, description = ?, start_date = ?, end_date = ? WHERE id = ?',
  [entry.title, entry.description, entry.date.startDate, entry.date.endDate, id])
  return result
}

export async function remove(id:number) {
  const result = await connectionPool.query<ResultSetHeader[]>('DELETE FROM entries WHERE id = ?', 
  [id])
  return result
}