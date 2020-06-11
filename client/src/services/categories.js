import api from './api-helper'


export const getAllCategories = async () => {
  const response = await api.get('/categories')
  return response.data;
}