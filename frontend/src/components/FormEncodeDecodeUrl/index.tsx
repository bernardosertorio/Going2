import { FormEvent } from 'react';
import { FiGlobe } from 'react-icons/fi';
import { Form } from '@unform/web';
import Input from '../Input';

import { FormEncodeDecodeUrlStyles } from './styles';

export function FormEncodeDecodeUrl() {
  return (
    <>
      <FormEncodeDecodeUrlStyles>
        <Form onSubmit={ () => {} }>
          <Input 
            name="longUrl"
            icon={FiGlobe}
            placeholder="Paste the long Url"
          />

          <button type="submit">Encode</button>
        </Form>

        <Form onSubmit={ () => {} }>
          <Input 
            name="shortUrl"
            icon={FiGlobe}
            placeholder="Paste the short Url"
          />

          <button type="submit">Decode</button>
        </Form>
      </FormEncodeDecodeUrlStyles>
    </>
  );
};