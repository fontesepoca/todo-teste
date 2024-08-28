import loadingStyle from 'fakestore/styles/components/loading.module.css';
import loadingGif from 'fakestore/images/10-11-02-622_512.gif';
import Image from 'next/image';

export default function Loading() {
  return (
    <section className={loadingStyle['fakestore_loading']}>
      <Image src={loadingGif} alt="loading_gif" width={200}/>
      <h2>Carregando...</h2>
    </section>
  )
};