import { Header } from '../../components/Header'; 
import { FormEncodeDecodeUrl } from '../../components/FormEncodeDecodeUrl';
import { UrlSearcher } from '../../components/UrlEncodeDecodeContents';

import { useFormEncodeDecodeUrl } from '../../hooks/useEncodeDecodeUrl';



export function Dashboard() {
  const {
    handleEncodeUrl, 
    newInputLongUrl,
    setNewInputLongUrl,
    inputError,
    data,
  } = useFormEncodeDecodeUrl();
  return (
    <>
      <Header />
      <FormEncodeDecodeUrl 
        handleEncodeUrl={handleEncodeUrl} 
        newInputLongUrl={newInputLongUrl}
        setNewInputLongUrl={setNewInputLongUrl}
        inputError={inputError}
      />
      <UrlSearcher getUrlData={data}/>
    </>
  )
};