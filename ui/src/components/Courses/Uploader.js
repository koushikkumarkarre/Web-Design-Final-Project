import { createReadStream } from 'fs';
import { createModel } from 'mongoose-gridfs';
import React from 'react';

class Uploader extends React.Component {
  
    writeData = (fileName) => {
        // use default bucket
        const Attachment = createModel();

        // write file to gridfs
        const writeStream = createReadStream(fileName);
        const options = ({ filename: fileName, contentType: 'text/plain' });
        Attachment.write(options, writeStream, (error, file) => {
            console.log("Write File")
            console.log(file)
            console.log(error)
            //=> {_id: ..., filename: ..., ...}
        });
    }

    readData = (id) => {
        // use default bucket
        const Attachment = createModel();

        // read larger file
        const readStream = Attachment.read({ id });
        console.log(readStream)
        
        // // read smaller file
        // Attachment.read({ id }, (error, buffer) => { 
        //     console.log("Read File")
        //     console.log(error)
        //     console.log(buffer)
        // });
    }

    deleteData = (id) => {
        // use default bucket
        const Attachment = createModel();

        // remove file and its content
        Attachment.unlink({ id }, (error) => { 
            console.log("Error")
            console.log(error)
        });
    }

    render() {
        return (
            <div className="File">
                <input className="input-file" type="file" onChange={saveFile} />
                <button className="button-file" onClick={uploadFile}>Upload</button>
            </div>
        );
    }
}

export default Uploader;