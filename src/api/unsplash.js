import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID K2TKhb7CDS4vA9pz1lhJFCdeVqKbCzb9jiYvnSn7Htg",
  },
});
