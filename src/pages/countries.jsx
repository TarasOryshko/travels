import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function Countries() {
  const [activeTab, setActiveTab] = useState("tab1");
  const [victor, setVictor] = useState(false);
  // const [chan, setChan] = useState({});

  const [post, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({ q: "" });
  const q = searchParams.get("q");

  const handleTab = (select) => setActiveTab(select);
  const colors = {
    tab1: "red",
    tab2: "yellow",
    tab3: "green",
  };

  // const change = (e) => {
  //   const { name, checked } = e.target;
  //   setChan({ ...chan, [name]: checked });
  // };
  // const list = [];
  // for (let key in chan) {
  //   if (chan[key] === true) {
  //     list.push(key);
  //     console.log(list);
  //   }
  // }
  // const product = ["watch", "some", "title", "small"];
  // const filt = (arr, items) => arr.filter((i) => items.includes(i));
  // const fiv = filt(product, list);
  // console.log("filetred", fiv);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  const subject = ["name", "username", "email", "phone"];

  const filtered = post.filter((i) => {
    if (victor && q)
      return (
        i.address.street.toLowerCase().includes("victor") ||
        i.name.toLowerCase().includes(q.toLowerCase())
      );
    if (victor) return i.address.street.toLowerCase().includes("victor");

    return subject.some((key) =>
      i[key].toLowerCase().includes(q.toLowerCase())
    );
  });

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
      <div>
        <input
          type="search"
          placeholder="Type something"
          value={q}
          onChange={(e) =>
            setSearchParams(
              (prev) => {
                prev.set("q", e.target.value);
                return prev;
              },
              { replace: true }
            )
          }
        />
        <button value="victor" onClick={() => setVictor(!victor)}>
          Victor
        </button>
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>SurName</th>
              <th>Email</th>
              <th>Phone</th>
              <th>City</th>
              <th>Street</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((i) => (
              <tr key={i.id}>
                <td>{i.id}</td>
                <td>{i.name}</td>
                <td>{i.username}</td>
                <td>{i.email}</td>
                <td>{i.phone}</td>
                <td>{i.address.city}</td>
                <td>{i.address.street}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <div>
        <input type="checkbox" name="watch" id="watch" onChange={change} />
        <label htmlFor="watch">Watch</label>
        <input type="checkbox" name="some" id="some" onChange={change} />
        <label htmlFor="some">Some</label>
      </div> */}
    </div>
  );
}

export default Countries;
