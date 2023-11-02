import express from 'express'
import { createEntry, getAllEntries, removeEntry, updateEntry, getOneEntry } from '../services/calender'
import { validEntry } from '../middlewares/validentry'

const router = express.Router()

router.get('/', (_req, res) => {
  getAllEntries()
    .then(data => {
      res.send(data)
    })
    .catch(_err => {
      res.sendStatus(500)
    })
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  getOneEntry(id)
    .then(data => {
      res.send(data)
    })
    .catch(_err => {
      res.sendStatus(500)
    })
})

router.post('/', validEntry, (req, res) => {
  const { entry } = req.body
  createEntry(entry)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(500)
    })
})

router.patch('/:id', validEntry, (req, res) => {
  const id = Number(req.params.id)
  const { entry } = req.body
  updateEntry(id, entry)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(500)
    })
})

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  removeEntry(id)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(500)
    })
})

export default router