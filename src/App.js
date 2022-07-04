import { useContext } from "react";

import { AppContext } from "./context/Context";

import Modal from "./components/Modal";
import Sidebar from "./components/Sidebar";
import { GiHeartBeats } from "react-icons/gi";

const App = () => {
  //sidebar props
  const { sidebarState, setSidebarState, toggleORS } = useContext(AppContext);

  //Modal props
  const { modalState, setModalState } = useContext(AppContext);

  return (
    <>
      <nav>
        <button
          className="btn-burger"
          onClick={() => toggleORS(sidebarState, setSidebarState)}
        >
          <GiHeartBeats />
          <span>{sidebarState ? "CLOSE" : "OPEN"}</span>
        </button>
      </nav>
      <main>
        <section>
          <button
            className="modal-btn"
            onClick={() => toggleORS(modalState, setModalState)}
          >
            <span className="text">SHOW FUTURE</span>
          </button>
        </section>
      </main>
      <Sidebar />
      <Modal />
    </>
  );
};

export default App;
