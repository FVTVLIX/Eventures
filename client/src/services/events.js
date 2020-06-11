import api from './api-helper';



export const getAllEvents = async () => {
  const response = await api.get('/events');
  return response.data;
}

export const getOneEvent = async (id) => {
  const response = await api.get(`/events/${id}`);
  return response.data;
}

export const createEvent = async (eventData) => {
  const response = await api.post('/events', { event: eventData });
  return response.data;
}

export const updateEvent = async (id, eventData) => {
  const response = await api.put(`/events/${id}`, { event: eventData });
  return response.data;
}

export const deleteEvent = async (id) => {
  const response = await api.delete(`/events/${id}`);
  return response;
}

export const eventToCategory = async (eventId, categoryId) => {
  const response = await api.get(`/categories/${categoryId}/events/${eventId}`);
  return response.data;
}