import { FileUploader } from './components/FileUploader'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Preview} from './components/Preview';
import {useState} from "react";

function App() {
  const [files, setFiles] = useState([]);

  const onSuccess = (files) => {
    setFiles(files);
  };

  return (
      <div className="App">
        <FileUploader onSuccess={onSuccess}/>
        <Preview files={files}/>
        <ToastContainer />
      </div>
  );
}

export default App;
