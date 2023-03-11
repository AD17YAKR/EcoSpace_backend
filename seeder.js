const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//Load env vars
dotenv.config({ path: './config/config.env' });

//Load Models
// const User = require('./models/User');
const Item = require('./models/Item');

//Connect to db
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI);

//Read JSON files
const items = JSON.parse(
    fs.readFileSync(`${__dirname}/_data/items.json`, 'utf-8')
);

//Import to db
const importData = async () => {
    try {
        await Item.create(items);
        // await User.create(users);
        console.log('Data Imported');
        process.exit;
    } catch (err) {
        console.log(err);
    }
};

//Delete data
const deleteData = async () => {
    try {
        // await User.deleteMany();
        await Item.deleteMany();

        console.log('Data Destroyed');
        process.exit;
    } catch (err) {
        console.log(err);
    }
};

if (process.argv[2] === '-i') {
    importData();
} else if (process.argv[2] === '-d') {
    deleteData();
}
