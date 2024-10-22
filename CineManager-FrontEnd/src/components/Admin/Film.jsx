import React, { useEffect, useState } from 'react'
import { creatFilm } from '../../services/filmApi/createFilmApi';
import { getAllFilms } from '../../services/filmApi/getAllFilmApi';
import { updateFilm } from '../../services/filmApi/updateFilmApi';
import { deleteFilmApi } from '../../services/filmApi/deleteFilmApi';

export default function Film() {

    const [film, setFilm] = useState([]);
    const [fetchTrigger, setFetchTrigger] = useState(false);


    const filmDataFunction = (async () => {

        const filmDataAllFilm = await getAllFilms();

        setFilm(filmDataAllFilm)
    })
    useEffect(() => {

        filmDataFunction();
        setFetchTrigger(false);


    }, [fetchTrigger])

    const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
    const [isUpdatePopupOpen, setIsUpdatePopupOpen] = useState(false);
    const openAddPopup = () => setIsAddPopupOpen(true);
    const closeAddPopup = () => setIsAddPopupOpen(false);
    const closeUpdatePopup = () => setIsUpdatePopupOpen(false);

    const [titleField, setTitleField] = useState('');
    const [descriptionField, setDescriptionField] = useState('');
    const [genreField, setGenreField] = useState('');
    const [durationField, setDurationField] = useState('');
    const [yearField, setYearField] = useState('');
    const [imageField, setImageField] = useState('');
    const [videoField, setVideoField] = useState('');
    const [selectedFilm, setSelectedFilm] = useState(null);
    const [showConfirmPopup, setShowConfirmPopup] = useState(false);

    // ==============================create====================
    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('titre', titleField);
        data.append('description', descriptionField);
        data.append('genre', genreField);
        data.append('duree', durationField);
        data.append('annee', yearField);
        data.append('image', imageField);
        data.append('video', videoField);

        const filmData = await creatFilm(data);
        if (filmData) {
            setFilm(prevFilms => [...prevFilms, filmData]);
        }
        setIsAddPopupOpen(false)
        setFetchTrigger(true);


    }
    // =================================updte===============
    const UpdateFilm = (filmId) => {
        setSelectedFilm(filmId);
        setIsUpdatePopupOpen(true);
    };

    const handleUpdateSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('titre', titleField);
        data.append('description', descriptionField);
        data.append('genre', genreField);
        data.append('duree', durationField);
        data.append('annee', yearField);
        data.append('image', imageField);
        data.append('video', videoField);

        const filmData = await updateFilm(selectedFilm, data);
        if (filmData) {
            setFilm(prevFilms => [...prevFilms, filmData]);
        }
        setIsUpdatePopupOpen(false)
        setFetchTrigger(true);


    }
    // ============================delete========================
    const confirmDeleteFilm = (filmId) => {
        setSelectedFilm(filmId);
        setShowConfirmPopup(true);
    };

    const handleDeleteFilm = async () => {
        const filmData = await deleteFilmApi(selectedFilm);
        if (filmData) {
            setFilm(prevFilms => [...prevFilms, filmData]);
        }
        setShowConfirmPopup(false)
        setFetchTrigger(true);
    };

    const cancelDelete = () => {
        setShowConfirmPopup(false);
        selectedFilm(null);
    };
    // ==============================handel file=================

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageField(file);


        }
    };
    const handleVideoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setVideoField(file);


        }
    };
    return (
        <>
            <div className='pt-10 '>
                <div className='h-12 w-full  flex justify-end'>
                    <button onClick={openAddPopup} className='px-12 rounded-md font-bold mr-40 bg-[#e5e5e5]'>Add</button>
                </div>
                <div className="flex  min-h-screen  justify-center ">
                    <div className="p-6 w-[80%] min-h-screen bg-white">
                        <table className="w-full min-w-max table-auto text-left ">
                            <thead className='bg-[#e5e5e5] '>
                                <tr>
                                    <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 ">
                                        <p className="block antialiased font-sans text-sm text-black  leading-none font-semibold">Image</p>
                                    </th>
                                    <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                        <p className="block antialiased font-sans text-sm text-black  leading-none font-semibold">Titre</p>
                                    </th>
                                    <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                        <p className="block antialiased font-sans text-sm text-black  leading-none font-semibold">Duration</p>
                                    </th>
                                    <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                        <p className="block antialiased font-sans text-sm text-black  leading-none font-semibold">Genre</p>
                                    </th>
                                    <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                        <p className="block antialiased font-sans text-sm text-black  leading-none font-semibold">Year</p>
                                    </th>

                                    <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                        <p className="block antialiased font-sans text-sm text-black  leading-none font-semibold"></p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {film.map((film) => (

                                    <tr key={film._id}>
                                        <td className="p-4 border-b border-blue-gray-50">
                                            <div className="flex items-center gap-3">
                                                <img src={film.image} alt="Spotify" className="inline-block relative object-center w-12 h-12 rounded-lg border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1" />
                                                <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold"></p>
                                            </div>
                                        </td>
                                        <td className="p-4 border-b border-blue-gray-50">
                                            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">{film.titre}</p>
                                        </td>
                                        <td className="p-4 border-b border-blue-gray-50">
                                            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">{film.duree} Min</p>
                                        </td>
                                        <td className="p-4 border-b border-blue-gray-50">
                                            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">{film.genre}</p>
                                        </td>
                                        <td className="p-4 border-b border-blue-gray-50">
                                            <div className="w-max">
                                                <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-green-500/20 text-green-900 py-1 px-2 text-xs rounded-md" >
                                                    <span className="">{film.annee}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className=" border-b border-blue-gray-50">
                                            <button onClick={() => UpdateFilm(film._id)} className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20" type="button">
                                                <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#1bff0a" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" /></svg>
                                                </span>
                                            </button>
                                            <button onClick={() => confirmDeleteFilm(film._id)} className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20" type="button">
                                                <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 448 512"><path fill="#ff0a0a" d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>                                            </span>
                                            </button>

                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>

                    </div>

                </div>
            </div>

            {isUpdatePopupOpen && (
                <div className='fixed top-0 left-0 w-full min-h-screen bg-[#00000069]'>
                    <div className='w-full h-screen flex items-center justify-center'>
                        <div className='w-1/3 bg-white p-6 rounded-md relative'>
                            <button onClick={closeUpdatePopup} className='font-bold text-red-600 absolute top-2 right-5'>X</button>
                            <h2 className='text-center font-bold mb-4'>Update film</h2>
                            <form onSubmit={handleUpdateSubmit}>
                                <div className='mb-4'>
                                    <label>Titre</label>
                                    <input
                                        type='text'
                                        value={titleField}
                                        onChange={(e) => setTitleField(e.target.value)}
                                        className='w-full border border-gray-300 rounded-md p-2'
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label>Description</label>
                                    <textarea
                                        value={descriptionField}
                                        onChange={(e) => setDescriptionField(e.target.value)}
                                        className='w-full border border-gray-300 rounded-md p-2'
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label>Genre</label>
                                    <input
                                        type='text'
                                        value={genreField}
                                        onChange={(e) => setGenreField(e.target.value)}
                                        className='w-full border border-gray-300 rounded-md p-2'
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label>Durée</label>
                                    <input
                                        type='number'
                                        value={durationField}
                                        onChange={(e) => setDurationField(e.target.value)}
                                        className='w-full border border-gray-300 rounded-md p-2'
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label>Année</label>
                                    <input
                                        type='date'
                                        value={yearField}
                                        onChange={(e) => setYearField(e.target.value)}
                                        className='w-full border border-gray-300 rounded-md p-2'
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label>Image (URL)</label>
                                    <input
                                        type='file'
                                        onChange={handleImageChange}
                                        className='w-full border border-gray-300 rounded-md p-2'
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label>Vidéo (URL)</label>
                                    <input
                                        type='file'
                                        onChange={handleVideoChange}
                                        className='w-full border border-gray-300 rounded-md p-2'
                                    />
                                </div>
                                <div className='flex justify-end'>
                                    <button
                                        type='submit'
                                        className='w-full px-4 py-2 bg-green-600 text-white rounded-md'
                                    >
                                        Update
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
            {isAddPopupOpen && (
                <div className='fixed top-0 left-0 w-full min-h-screen bg-[#00000069]'>
                    <div className='w-full h-screen flex items-center justify-center'>
                        <div className='w-1/3 bg-white p-6 rounded-md relative'>

                            <button onClick={closeAddPopup} className='font-bold text-red-600 absolute top-2 right-5'>
                                X
                            </button>
                            <h2 className='text-center font-bold mb-4'>Add new film</h2>
                            <form onSubmit={handleSubmit} >
                                <div className='mb-4'>
                                    <label>Titre</label>
                                    <input
                                        type='text'
                                        name='titre'
                                        onChange={(e) => setTitleField(e.target.value)}
                                        className='w-full border border-gray-300 rounded-md p-2'
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label>Description</label>
                                    <textarea
                                        name='description'
                                        onChange={(e) => setDescriptionField(e.target.value)}
                                        className='w-full border border-gray-300 rounded-md p-2'
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label>Genre</label>
                                    <input
                                        type='text'
                                        name='genre'
                                        onChange={(e) => setGenreField(e.target.value)}
                                        className='w-full border border-gray-300 rounded-md p-2'
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label>Duration</label>
                                    <input
                                        type='number'
                                        name='duree'
                                        onChange={(e) => setDurationField(e.target.value)}
                                        className='w-full border border-gray-300 rounded-md p-2'
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label>Year</label>
                                    <input

                                        type='date'
                                        name='annee'
                                        onChange={(e) => setYearField(e.target.value)}
                                        className='w-full border border-gray-300 rounded-md p-2'
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label>Image (URL)</label>
                                    <input
                                        type='file'
                                        name='image'
                                        onChange={handleImageChange}
                                        className='w-full border border-gray-300 rounded-md p-2'
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label>Vidéo (URL)</label>
                                    <input
                                        type='file'
                                        name='video'
                                        onChange={handleVideoChange}
                                        className='w-full border border-gray-300 rounded-md p-2'
                                    />
                                </div>
                                <div className='flex justify-end'>
                                    <button
                                        type='submit'
                                        className=' w-full px-4 py-2 bg-green-600 text-white rounded-md'
                                    >
                                        Ajouter
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {showConfirmPopup && (
                <div className="fixed inset-0  flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="text-center p-5 flex-auto justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 -m-1 flex items-center text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 flex items-center text-red-500 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            <h2 className="text-xl font-bold py-4 ">Are you sure?</h2>
                            <p className="text-sm text-gray-500 px-8">Do you really want to delete this Film?
                                This process cannot be undone</p>
                        </div>

                        <div className="p-3  mt-2 text-center space-x-4 md:block">
                            <button onClick={cancelDelete} className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                                Cancel
                            </button>
                            <button onClick={handleDeleteFilm} className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">Delete</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
