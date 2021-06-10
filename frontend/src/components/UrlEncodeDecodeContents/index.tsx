import { UrlContentsStyles } from './styles';
import { FiChevronRight } from 'react-icons/fi';

interface IUrlData {
  id?: string;
  longUrl?: string;
  shortUrl?: string;
  urlCode?: string
};

interface IUrlDataSearcherProps {
  getUrlData: IUrlData | undefined;      
}

export function UrlSearcher({ 
  getUrlData
}: IUrlDataSearcherProps) {

  return (
    <> 
      <UrlContentsStyles>
        <a key={getUrlData?.id} href={getUrlData?.shortUrl}>
          <div>
            <strong>Url</strong>
            <p>{getUrlData?.shortUrl}</p> 
          </div>
          <FiChevronRight size={20} /> 
        </a>
      </UrlContentsStyles>
    </>
  );
};