import React, { useState } from "react";
import axios from "axios";
import './FileUploader.scss';

function FileUploader() {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const uploadFile = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);
    try {
      const res = await axios.post(
        "http://localhost:3002/upload",
        formData
      );
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div className="File">
      <input className="input-file" type="file" onChange={saveFile} />
      {/* <p>Drag your files here or click in this area.</p> */}
      <button className="button-file" onClick={uploadFile}>Upload</button>  
    </div>
  );
}

export default FileUploader;