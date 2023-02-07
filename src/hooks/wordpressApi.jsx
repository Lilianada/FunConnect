import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const url = "https://funconnect.app/wp-json/wp/v2/posts";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setPosts(response.data);
        setLoading(true);
      })
      .catch((err) => {
        setError(err);
        setLoading(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);
  return { posts, error, loading };
}
