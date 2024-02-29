import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import Pagination from "../components/Pagination";

function Travels() {
  const [list, setList] = useState([]);
  const [found, setFoundValue] = useState("");

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPag] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => setList(data.splice(0, 10)));
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
    setLoading(false);
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber, e) => {
    e.preventDefault();
    setCurrentPag(pageNumber);
  };

  const showMe = (value) => setFoundValue(value);
  const searching = (data, value) =>
    data.filter((i) => i.title.toLowerCase().includes(value.toLowerCase()));
  const final = searching(list, found);

  return (
    <div>
      <h2>Travels</h2>
      <Search
        placeholder="Знайти країну"
        showBtn={false}
        onSearchChange={showMe}
      />
      <section
        style={{
          display: "grid",
          gap: 20,
          gridTemplateColumns: "repeat(2,1fr)",
        }}
      >
        {final.map((i) => (
          <div key={i.id}>
            <div style={{ aspectRatio: 1, height: 50 }}>
              <img src={i.url} alt={i.id} />
            </div>
            <h2>{i.title}</h2>
          </div>
        ))}
      </section>
      <hr style={{ marginBottom: 30 }} />
      <section>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <ul style={{ marginBottom: 30 }}>
            {currentPost.map((i) => (
              <li key={i.id}>
                {i.id}
                {" - "}
                {i.title}
              </li>
            ))}
          </ul>
        )}
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </section>
    </div>
  );
}

export default Travels;
