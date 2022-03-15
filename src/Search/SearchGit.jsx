import { useEffect, useState } from "react";

export default function SearchGit() {
  const [commitsList, setCommitsList] = useState(() => []);
  const [makeRequest, setMakeRequestValue] = useState(() => false);
  const [searchRepoValue, setRepoName] = useState(() => "");
  const [searchUserValue, setUserName] = useState(() => "");

  function setRepoValues(e) {
    setRepoName(() => e.target.value);
  }

  function setUserValues(e) {
    setUserName(() => e.target.value);
  }

  useEffect(() => {
    window
      .fetch(
        `https://api.github.com/repos/${searchUserValue}/${searchRepoValue}/commits?per_page=100&page=1`
      )
      .then((data) => {
        return data.json();
      })
      .then((response) => {
        if (response.message) {
          console.log(response.message, ">>>");
          setCommitsList([]);
        } else {
          console.log("?????", response);
          setCommitsList(response);
        }
      })
      .catch((e) => {
        setCommitsList([]);
      });
  }, [makeRequest]);

  function handleSubmitValues(e) {
    setMakeRequestValue(() => true);
  }
  return (
    <div>
      {/* <form onSubmit={handleSubmitValues}> */}
      <label htmlFor="">username </label>
      <input type="text" onChange={setUserValues} />
      <br />
      <label htmlFor="">repository name </label>
      <input type="text" onChange={setRepoValues} />
      <button onClick={handleSubmitValues}>search</button>
      {commitsList.length && (
        <ul>
          {commitsList.map((item, index) => {
            return (
              <li key={{ index }}>
                <span>{item.commit?.author?.name}</span>
                <span>{item.commit?.message}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
