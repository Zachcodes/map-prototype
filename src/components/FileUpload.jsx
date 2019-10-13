import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { UploadButton } from '../styled/Button';
import axios from 'axios';

function FileUpload() {
  const onDrop = useCallback(async acceptedFiles => {
    const formData = new FormData();
    acceptedFiles.forEach(file => {
      formData.append('file', file, file.name);
      console.log('running multiple times', file);
    });
    const { data } = await axios.post('/api/files', formData);
    console.log(data);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <UploadButton>
        <input {...getInputProps()} />
        {isDragActive ? <p>Upload CSV data</p> : <p>Upload CSV data</p>}
      </UploadButton>
    </div>
  );
}

export default FileUpload;
