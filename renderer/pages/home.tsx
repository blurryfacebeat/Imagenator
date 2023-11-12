import { type FC } from 'react';
import Head from 'next/head';
import FilePicker from '../features/file-picker/file-picker';

const HomePage: FC = () => {
  return (
    <>
      <Head>
        <title>Imagenator</title>
      </Head>

      <FilePicker />
    </>
  );
};

export default HomePage;
