import './style.css';
import {useState} from "react";
import axios from 'axios';
import { toast } from 'react-toastify';

export const FileUploader = ({onSuccess}) => {
  const [files, setFiles] = useState(null);

  const onInputChange = (e) => {
    console.log(e.target.files);
    setFiles(e.target.files);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    for(let i=0; i<files.length; i++) {
      data.append('files', files[i]);
    }

    axios.post('//localhost:8000/upload', data)
        .then((response) => {
          // console.log('File uploaded');
          toast.success('Upload Success');
          onSuccess(response.data);
        })
        .catch((error) => {
          // console.error('Error', e);
          toast.error('Upload Error');
        });
  }

  return (
      <form method="post" action="#" id="#">
        <div className="form-group files">
          <label>Upload Your File </label>
          <input type="file"
                 onChange={onInputChange}
                 className="form-control"
                 multiple/>
        </div>
        <button onClick={onSubmit}>Submit</button>
      </form>
  );
}