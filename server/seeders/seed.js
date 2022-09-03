const db = require('../config/connection')
const {Character} = require('../models')
const characterSeeds = require('./characterSeeds')

db.once('open', async () => {
    try {
        await Character.deleteMany({})
        await Character.create(characterSeeds)
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
    
    console.log('all done!')
    process.exit(0)
})