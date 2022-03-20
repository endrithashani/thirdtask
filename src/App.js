import Modal from './components/Modal'
import {useState} from 'react'

function App() {
  const [openModal,setOpenModal] = useState(false);
  return (
    <div className="App">
    <button onClick={()=>{setOpenModal(true);}} className='btn-modal'>MODAL</button>
    {openModal && <Modal closeModal={setOpenModal}/>}
    </div>
  );
}

export default App;
