import { type DragEvent, type FC, useState } from 'react';

const FilePicker: FC = () => {
  const [previewImage, setPreviewImage] = useState<null | string>(null);

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();
    console.log(123, event);

    const file = event.dataTransfer.files[0];

    console.log('file: ', file);

    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();
  };

  return (
    <>
      <div
        style={{
          height: '50vh',
          width: '50%',
          border: '1px solid black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        Drop your image here
      </div>
      {previewImage && (
        <img
          style={{ width: '200px', height: 'auto' }}
          src={previewImage}
          alt="Preview image"
        />
      )}
    </>
  );
};

export default FilePicker;
