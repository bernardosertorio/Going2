import { UrlContentsStyles } from './styles';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

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
        <Link key={getUrlData?.id} to={`/:${getUrlData?.shortUrl}`}>
          <div>
            <strong>Short Url</strong>
            <p>{getUrlData?.shortUrl}</p> 
          </div>
          <FiChevronRight size={20} /> 
        </Link>
      </UrlContentsStyles>
    </>
  );
};