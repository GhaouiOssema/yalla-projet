// apiService.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // Set your base URL here
  headers: {
    'Content-Type': 'application/json',
    // Add other headers if needed, like authorization tokens
  },
});

// GET request
export const getData = async (url, params = {}) => {
  try {
    const response = await axiosInstance.get(url, { params });
    return response.data;
  } catch (error) {
    console.error('Error in GET request:', error);
    throw error;
  }
};

// POST request
export const postData = async (url, data) => {
  try {
    const response = await axiosInstance.post(url, data); // Send POST request
    return response.data;  // Return response data
  } catch (error) {
    // Check if the error has a response (i.e., server responded with an error status)
    if (error.response) {
      console.error('Server responded with error:', error.response.data);  // Log server-side error message
    } else if (error.request) {
      console.error('No response from server:', error.request);  // Request made but no response
    } else {
      console.error('Error setting up request:', error.message);  // General error in setting up the request
    }

    // Optionally rethrow the error if you want to handle it in the calling function
    throw error;
  }
};

// PUT request
export const putData = async (url, data) => {
  try {
    const response = await axiosInstance.put(url, data);
    return response.data;
  } catch (error) {
    console.error('Error in PUT request:', error);
    throw error;
  }
};

// DELETE request
export const deleteData = async (url) => {
  try {
    const response = await axiosInstance.delete(url);
    return response.data;
  } catch (error) {
    console.error('Error in DELETE request:', error);
    throw error;
  }
};
