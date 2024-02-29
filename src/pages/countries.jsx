import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function Countries() {
  const [activeTab, setActiveTab] = useState("tab1");

  const [post, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({ q: "" });
  const q = searchParams.get("q");

  const handleTab = (select) => setActiveTab(select);
  const colors = {
    tab1: "red",
    tab2: "yellow",
    tab3: "green",
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  const filtered = post.filter((i) =>
    i.title.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div>
      <nav style={{ display: "flex", marginTop: 30, cursor: "pointer" }}>
        <h3
          style={{
            backgroundColor: colors.tab1,
            width: "100%",
            textAlign: "center",
            padding: 10,
          }}
          onClick={() => handleTab("tab1")}
        >
          Tab #1
        </h3>
        <h3
          style={{
            backgroundColor: colors.tab2,
            width: "100%",
            textAlign: "center",
            padding: 10,
          }}
          onClick={() => handleTab("tab2")}
        >
          Tab #2
        </h3>
        <h3
          style={{
            backgroundColor: colors.tab3,
            width: "100%",
            textAlign: "center",
            padding: 10,
          }}
          onClick={() => handleTab("tab3")}
        >
          Tab #3
        </h3>
      </nav>
      {activeTab === "tab1" && (
        <div style={{ backgroundColor: colors.tab1 }}>
          <h3>Some content for #1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
            aperiam unde voluptatibus natus officia minus obcaecati nulla,
            expedita sed hic tempora rerum saepe, ad, mollitia ipsum. Recusandae
            quae enim voluptatem!
          </p>
        </div>
      )}
      {activeTab === "tab2" && (
        <div style={{ backgroundColor: colors.tab2 }}>
          <h3>Some content for #2</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
            aperiam unde voluptatibus natus officia minus obcaecati nulla,
            expedita sed hic tempora rerum saepe, ad, mollitia ipsum. Recusandae
            quae enim voluptatem!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
            aperiam unde voluptatibus natus officia minus obcaecati nulla,
            expedita sed hic tempora rerum saepe, ad, mollitia ipsum. Recusandae
            quae enim voluptatem!
          </p>
        </div>
      )}
      {activeTab === "tab3" && (
        <div style={{ backgroundColor: colors.tab3 }}>
          <h3>Some content for #3</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
            aperiam unde voluptatibus natus officia minus obcaecati nulla,
            expedita sed hic tempora rerum saepe, ad, mollitia ipsum. Recusandae
            quae enim voluptatem!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
            aperiam unde voluptatibus natus officia minus obcaecati nulla,
            expedita sed hic tempora rerum saepe, ad, mollitia ipsum. Recusandae
            quae enim voluptatem!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
            aperiam unde voluptatibus natus officia minus obcaecati nulla,
            expedita sed hic tempora rerum saepe, ad, mollitia ipsum. Recusandae
            quae enim voluptatem!
          </p>
        </div>
      )}
      <input
        type="search"
        onChange={(e) =>
          setSearchParams(
            (prev) => {
              prev.set("q", e.target.value);
              return prev;
            },
            { replace: true }
          )
        }
        value={q}
      />
      {filtered.map((i) => (
        <li key={i.id}>{i.title}</li>
      ))}
    </div>
  );
}

export default Countries;
