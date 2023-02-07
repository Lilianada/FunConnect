import axios from "axios";
import React, { useEffect, useState } from "react";

export default function PostTitles() {
   const [posts, setPosts] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const url = 'https://funconnect.app/wp-json/wp/v2/posts';
  
    useEffect (() => {
      axios.get(url).then((response) => {
        setPosts(response.data);
        setLoading(true);
      }).catch((err) => {
        setError(err);
        setLoading(true);
      }).finally(() => {
          setLoading(false);
      })
    }, [url]);
  //    return { posts, error, loading };
  // }
  return(
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
           <p>{post.title.rendered}</p>
           <p>{post.date}</p>
           <p>{post.link}</p>
           <p>{post.yoast_head_json.author}</p>
           <p>{
            Object.keys(post.yoast_head_json.twitter_misc).slice(1, 2).map((key) => (
              <i key={key}>{post.yoast_head_json.twitter_misc[key]}</i>
            ))
           }</p>
           <p>{post.categories[0]}</p>
          <img src={post.yoast_head_json.og_image[0].url} alt="blog cover" width="100px" height="100px" />
        </li>
      ))}
    </ul>
  )
}