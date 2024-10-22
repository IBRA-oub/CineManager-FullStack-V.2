import dotenv from "dotenv";
dotenv.config();
import mongoose from 'mongoose';
import request from 'supertest';
import app from '../app';
import FilmModel from '../models/Film.mjs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5vbSI6ImFkbWluIiwiZW1haWwiOiJzdXBlcmFkbWluQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlkIjoiNjZmNmJhOGY1N2IzZjgwMzRmYjEwMTBhIiwiYmFubmVkIjpmYWxzZX0sImlhdCI6MTcyOTYwMTYzMSwiZXhwIjoxNzI5NjEyNDMxfQ.1nFqHgOHdkjqppVfZIJQenw7F778PPeRNfRW9BLZt7w";
let filmId;


beforeAll(async () => {
  try {
    
    await mongoose.connect("mongodb://localhost:27017/cinéManager_test", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
});

afterAll(async () => {
  try {
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
  } catch (error) {
    console.error('Error closing MongoDB connection:', error);
  }
});


// describe('POST /api/film/createFilm', () => {
//   test('devrait créer un film avec succès, y compris une image', async () => {
//     const filmData = {
//       titre: "Film Test avec Image et video",
//       description: "Description du film test avec image",
//       genre: "Action",
//       duree: 120,
//       annee: "2024-01-01"
//     };

//     const imagePath = path.resolve(__dirname, 'uploads/1728329205626-img1.jpeg');
//     const videoPath = path.resolve(__dirname, 'uploads/1728841234965-Marvel-Studios-Avengers_ Infinity-War-Official-railer.mp4');

//     const res = await request(app)
//       .post('/api/film/createFilm')
//       .set('Authorization', `Bearer ${token}`)
//       .attach('image', imagePath)
//       .attach('video', videoPath)
//       .field('titre', filmData.titre)
//       .field('description', filmData.description)
//       .field('genre', filmData.genre)
//       .field('duree', filmData.duree)
//       .field('annee', filmData.annee)
//       .expect(201);


//     expect(res.body).toHaveProperty('titre', filmData.titre);
//     expect(res.body).toHaveProperty('image');
//     filmId = res.body._id;
//   });
// });

it('devrait créer un film avec succès, y compris une image', async () => {
  const filmData = {
    titre: "Film Test avec Image et video",
    description: "Description du film test avec image",
    genre: "Action",
    duree: 120,
    annee: "2024-01-01",
  };

  const res = await request(app)
      .post('/api/film/createFilm')
      .set('Authorization', `Bearer ${token}`)
      .attach('image', 'uploads/1728329205626-img1.jpeg') 
      .attach('video', 'uploads/1728841234965-Marvel-Studios-Avengers_ Infinity-War-Official-railer.mp4') 
      .field('titre', filmData.titre)
      .field('description', filmData.description)
      .field('genre', filmData.genre)
      .field('duree', filmData.duree)
      .field('annee', filmData.annee)
      .expect(201); 

  expect(res.body).toHaveProperty('_id');
  
});



describe('GET /api/film/allFilm', () => {
  test('devrait récupérer tous les films, y compris les images', async () => {
    const res = await request(app)
      .get('/api/film/allFilm')
      .expect(200)
      .expect('Content-Type', /json/);


    expect(res.body).toBeInstanceOf(Array);

    res.body.forEach(film => {
      expect(film).toHaveProperty('image');
      expect(film).toHaveProperty('video');
    });
  });
});


describe('GET /api/film/getFilm/:id', () => {
  test('devrait récupérer un film par ID avec une image', async () => {
    const res = await request(app)
      .get(`/api/film/getFilm/${filmId}`)
      .expect(200)
      .expect('Content-Type', /json/);

    expect(res.body).toHaveProperty('_id', filmId);
    expect(res.body).toHaveProperty('image');
    expect(res.body).toHaveProperty('video');
  });
});


describe('PUT /api/film/updateFilm/:id', () => {
  test('devrait mettre à jour un film', async () => {
    const updatedData = {
      titre: "Film Test Modifié avec Image",
      description: "Description modifiée"
    };

    const res = await request(app)
      .put(`/api/film/updateFilm/${filmId}`)
      .set('Authorization', `Bearer ${token}`)
      .send(updatedData)
      .expect(200);


    expect(res.body).toHaveProperty('titre', updatedData.titre);
    expect(res.body).toHaveProperty('description', updatedData.description);
  });
});


describe('DELETE /api/film/deleteFilm/:id', () => {
  test('devrait supprimer un film par ID', async () => {
    const res = await request(app)
      .delete(`/api/film/deleteFilm/${filmId}`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(res.body).toHaveProperty('message', 'film delete seccessfuly');
  });
});
