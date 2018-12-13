import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/'
})

export const loadGenres = () => api.get('genres')
export const saveSeries = (newSeries) => api.post('series', newSeries)
export const loadSeriesByGenres = (genre) => api.get('series?genre='+genre)
export const deleteSeries = (id) => api.delete('series/'+id)

const  apis = {
    loadGenres: loadGenres,
    saveSeries: saveSeries,
    loadSeriesByGenres: loadSeriesByGenres,
    deleteSeries: deleteSeries
}

export default apis