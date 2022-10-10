import axios from "axios";

const baseAPI = axios.create({
  baseURL: "https://apievent2all.herokuapp.com",
  // headers: {
  //   "content-type" :"application/json",
  //   "accept": "*/*",
  //   "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTA0LCJpYXQiOjE2NjU0MjgxNjQsImV4cCI6MTY2NTQ1Njk2NH0.JXpbJ9s86z-oO5SujPzYwSNrgtKqZCgqn8Eb4HNaTzA"

  // }
});

export default baseAPI;