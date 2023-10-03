import { setUpDatabase } from "."
import readline from 'readline'

const readInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

readInterface.question(`Caution: This action errase all data of table 
"entries" of database. Are you surly to proced?(N/y) `, answare => {
  const afirmative = ['y', 'Y', 'yes', 'YES', 'Yes']
  if(afirmative.includes(answare)) {
    setUpDatabase().then(() => process.exit())
  } else {
    process.exit()
  }
})