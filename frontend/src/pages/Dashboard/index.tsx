import { Header } from '../../components/Header'; 
import { FormEncodeDecodeUrl } from '../../components/FormEncodeDecodeUrl';

import { useFormEncodeDecodeUrl } from '../../hooks/useEncodeDecodeUrl';

export function Dashboard() {
  const {
    handleEncodeUrl, 
    newInputLongUrl,
    setNewInputLongUrl,
    inputError
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
    </>
  )
};