const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/youtube-video', {
    //useMongoClient: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB has started ...'))
    .catch(e => console.log(e))

require('./person.model')

const Person = mongoose.model('persons')

const person = new Person({
    name: 'WebForMySelf',
    age: 24,
    phones: [4697171]
})

Person
    .find({name: 'WebForMySelf'})
    .limit(2)
    .then(persons => {
        console.log(JSON.stringify(persons, null, 2))
        // const p = persons[0]
        //
        // Person.find({_id: p._id}).remove().then(_ => console.log('Removed!'))
    })

