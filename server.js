const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors());

let characters = {
  luffy: {
    age: 17,
    birthName: 'Monkey D. Luffy',
    birthdate: 'May 5',
    residence: 'Foosha Village',
    origin: 'East Blue',
    occupation: 'Captain',
    imgURL:
      'https://freepngimg.com/thumb/one_piece/23457-1-one-piece-luffy-transparent-background.png',
  },
  zoro: {
    age: 19,
    birthName: 'Roronoa Zoro',
    birthdate: 'November 11',
    residence: 'Shimotsuki Village',
    origin: 'East Blue',
    occupation: 'Swordsman',
    imgURL:
      'https://freepngimg.com/thumb/one_piece/23175-5-one-piece-zoro-transparent-image.png',
  },
  usopp: {
    age: 17,
    birthName: 'Ussop',
    birthdate: 'April 1',
    residence: 'Syrup Village',
    origin: 'East Blue',
    occupation: 'Sniper',
  },
  nami: {
    age: 18,
    birthName: 'Nami',
    birthdate: 'July 3',
    residence: 'Cocoyasi Village',
    origin: 'East Blue',
    occupation: 'Navigator',
  },
  sanji: {
    age: 19,
    birthName: 'Sanji',
    birthdate: 'March 2',
    residence: 'Baratie',
    origin: 'North Blue',
    occupation: 'Cook',
    imgURL:
      'https://freepngimg.com/thumb/one_piece/22997-4-one-piece-sanji-photos.png',
  },
  chopper: {
    age: 15,
    birthName: 'Tony Tony Chopper',
    birthdate: 'December 24',
    residence: 'Drum Kingdom',
    origin: 'Grand Line',
    occupation: 'Doctor',
  },
  franky: {
    age: 34,
    birthName: 'Franky',
    birthdate: 'March 9',
    residence: 'Water 7',
    origin: 'South Blue',
    occupation: 'Shipwright',
  },
  robin: {
    age: 28,
    birthName: 'Nico Robin',
    birthdate: 'February 6',
    residence: 'Ohara',
    origin: 'West Blue',
    occupation: 'Archaeologist',
  },
  brook: {
    age: 88,
    birthName: 'Brook',
    birthdate: 'April 3',
    residence: 'Florian Triangle',
    origin: 'West Blue',
    occupation: 'Musician',
    imgURL:
      'https://freepngimg.com/thumb/one_piece/87811-monkey-usopp-character-brook-fictional-costume-luffy.png',
  },
};

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/api/:name', (req, res) => {
  const charName = req.params.name.toLowerCase();
  if (characters[charName]) {
    res.json(characters[charName]);
  } else {
    res.json(characters['unknown']);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
