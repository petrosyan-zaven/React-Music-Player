import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const MusicUploadForm = ({ onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      setUploading(true);

      setTimeout(() => {
        setUploading(false);
        console.log(`File "${selectedFile.name}" uploaded successfully.`);
        // onUpload(selectedFile);
      }, 2000);
    }
  };

  return (
    <UploadFormContainer>
      <input
        type="file"
        accept=".mp3, .wav"
        onChange={handleFileChange}
        ref={fileInputRef}
        style={{ display: 'none' }}
      />
      <Button onClick={() => fileInputRef.current.click()} disabled={uploading}>
        {selectedFile ? `Selected: ${selectedFile.name}` : 'Choose File'}
      </Button>
      <Button onClick={handleUpload} disabled={!selectedFile || uploading}>
        {uploading ? 'Uploading...' : 'Upload'}
      </Button>
    </UploadFormContainer>
  );
};

const UploadFormContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const Button = styled.button`
  margin-right: 10px;
  padding: 10px;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default MusicUploadForm;
