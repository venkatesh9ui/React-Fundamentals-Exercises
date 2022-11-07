import React from "react";

function MoviesInfo({ users, userWithFavMovie, moviesInfo }) {
  return (
    <div>
      {moviesInfo.map((movieInfo) => {
        return (
          <div>
            <h2>{movieInfo.name}</h2>
            <p>
              <strong>Liked By:</strong>
            </p>
            <ul>
              {userWithFavMovie[movieInfo.id] ? (
                userWithFavMovie[movieInfo.id].map((id) => (
                  <li>{users[id].name}</li>
                ))
              ) : (
                <li>
                  <p>None of the current users liked this movie</p>
                </li>
              )}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default MoviesInfo;
