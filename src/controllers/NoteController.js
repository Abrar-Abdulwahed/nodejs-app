// const generator = require('@/utils/generator');
// const memStorage = require('@/utils/memory.storage');
// const Note = require('@/models/Note')

// exports.getAllNotes = async (req, res) => {
//     const seqId_1 = generator.generate(); 
//     memStorage.store.setItem(seqId_1, '1st note');

//     const seqId_2 = generator.generate(); 
//     memStorage.store.setItem(seqId_2, '1st note');

//     const keys = memStorage.getKeys(memStorage.store);
//     const values = memStorage.getValues(memStorage.store);
//     const note = new Note(seqId_1, '1st note', '1st note content', 'abrar', new Date());
//     // try {
//     //     const notes = await Note.find()
//     //     res.json(notes)
//     // } catch (error) {
//     //     res.status(500).json({ message: error.message })
//     // }
//     res.send('get all notes' + JSON.stringify(keys) + JSON.stringify(note));
// }

// exports