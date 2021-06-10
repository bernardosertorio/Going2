import { 
  createContext, 
  ReactNode, 
  useContext,  
  useState, 
  FormEvent
} from 'react';

  import api from '../services/api';

  interface IPropsFormEncodeDecodeUrl {
    children: ReactNode;
  };

  interface IUrlData {
    id?: string; 
    longUrl?: string;
    shortUrl?: string
    urlCode?: string
  };

  interface ContextDataFormEncodeDecodeUrl {
    handleEncodeUrl: (event: FormEvent<HTMLFormElement>) => Promise<void>;
    data: IUrlData | undefined;
    // handleDecodeUrl: (event: FormEvent<HTMLFormElement>) => Promise<void>;
    setNewInputLongUrl: React.Dispatch<React.SetStateAction<string>>;
    setNewInputShortUrl: React.Dispatch<React.SetStateAction<string>>;
    newInputLongUrl: string;
    newInputShortUrl: string;
    inputError: string;
  };

  const FormEncodeDecodeUrlContext = createContext<ContextDataFormEncodeDecodeUrl>(
    {} as ContextDataFormEncodeDecodeUrl
  );

  export function FormEncodeDecodeUrlProvider({ children }: IPropsFormEncodeDecodeUrl) {
    const [newInputLongUrl, setNewInputLongUrl] = useState('');
    const [newInputShortUrl, setNewInputShortUrl] = useState('');
    const [data, setData] = useState<IUrlData | undefined>({});
    const [inputError, setInputError] = useState('');

    async function handleEncodeUrl(event: FormEvent<HTMLFormElement>): Promise<void> {
      if(!newInputLongUrl) {
        setInputError('Digite ou cole a Url que deseja encurtar')
        return;
      }

      try {
        const response = await api.post<IUrlData>('/encode', {
          ...event,
          newInputLongUrl,
          });

          const { shortUrl } = response.data;

          setData({ shortUrl });
          setInputError('');
      } catch (err) {
        setInputError('Erro ao encurtar a url. Verifique se a url está correta')
      }
    };

    return (
      <FormEncodeDecodeUrlContext.Provider value={{
        handleEncodeUrl,
        data,
        inputError,
        newInputLongUrl,
        newInputShortUrl,
        setNewInputLongUrl,
        setNewInputShortUrl
      }}>
        {children}
      </FormEncodeDecodeUrlContext.Provider>
    )
  };

  export function useFormEncodeDecodeUrl() {
    const context = useContext(FormEncodeDecodeUrlContext);

    return context;
  }