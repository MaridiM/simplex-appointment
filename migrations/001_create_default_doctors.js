module.exports = {
    async up(db, client) {
        await db.collection('doctors').insertMany([
            { name: 'Doctor 1', spec: 'Internist',  slots: [] },
            { name: 'Doctor 2', spec: 'Surgeon',  slots: [] },
            { name: 'Doctor 3', spec: 'Dentist',  slots: [] },
        ]);
    },

    async down(db, client) {
        await db.collection('doctors').deleteMany({
            username: { $in: ['Doctor 1', 'Doctor 2', 'Doctor 3'] }
        });
    }
};
