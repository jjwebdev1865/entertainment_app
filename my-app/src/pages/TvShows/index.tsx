import React, { useState } from 'react';
import { Navbar } from '../../common';
import Modal from "react-modal";
import { shows } from '../../config/shows';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    width: 400,
  },
};

const TvShows = (): JSX.Element => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <Navbar />
      <h1 data-testid="tv-show-header">TV Shows</h1>

      <div className="App">
        <section data-testid="shows-section">
          <ul>
            {shows.map(show => {

              return (
                <li key={show.id}>
                  <p>{show.title}</p>
                  <button onClick={() => setModalOpen(!modalOpen)}>Open Modal</button>

                  <Modal
                    isOpen={modalOpen}
                    onRequestClose={() => setModalOpen(false)}
                    style={customStyles}
                  >
                    <div><strong>Seasons:</strong> {show.seasons}</div>
                    <div><strong>TV Rating:</strong> {show.rating}</div>
                    <div><strong>Runtime:</strong> {show.releaseDate} - {show.endDate}</div>

                    <button onClick={() => setModalOpen(false)}>Close Modal</button>
                  </Modal>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TvShows;
