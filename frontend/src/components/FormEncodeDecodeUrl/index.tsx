import { FormEvent } from 'react';
import { FiGlobe } from 'react-icons/fi';
import { Form } from '@unform/web';
import Input from '../Input';

import { FormEncodeDecodeUrlStyles } from './styles';

interface IFormEncodeDecodeUrlProps {
  handleEncodeUrl: (event: FormEvent<HTMLFormElement>) => Promise<void>;
  handleDecodeUrl: (event: FormEvent<HTMLFormElement>) => Promise<void>;
  setNewInputLongUrl: React.Dispatch<React.SetStateAction<string>>;
  setNewInputShortUrl: React.Dispatch<React.SetStateAction<string>>;   
  newInputLongUrl: string;
  newInputShortUrl: string;
  inputError: string;  
}

export function FormEncodeDecodeUrl({
  handleEncodeUrl,
  handleDecodeUrl,
  setNewInputLongUrl,
  setNewInputShortUrl,
  newInputLongUrl,
  newInputShortUrl,
}: IFormEncodeDecodeUrlProps) {

  return (
    <>
      <FormEncodeDecodeUrlStyles>
        <Form onSubmit={handleEncodeUrl}>
          <Input 
            name="longUrl"
            icon={FiGlobe}
            value={newInputLongUrl}
            onChange={(e) => setNewInputLongUrl(e.target.value)}
            placeholder="Paste the long Url"
          />

          <button type="submit">Encode</button>
        </Form>

        <Form onSubmit={handleDecodeUrl}>
          <Input 
            name="shortUrl"
            icon={FiGlobe}
            value={newInputShortUrl}
            onChange={(e) => setNewInputShortUrl(e.target.value)}
            placeholder="Paste the short Url"
          />

          <button type="submit">Decode</button>
        </Form>
      </FormEncodeDecodeUrlStyles>
    </>
  );
};