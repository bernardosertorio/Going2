import { UrlContentsStyles } from './styles';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

interface IUrl {
  id?: string;
  longUrl?: string;
  shortUrl?: string;
};

interface IUrlSearcherProps {
  getUrl: IUrl | undefined;      
}

export function UrlSearcher({ 
  getUrl
}: IUrlSearcherProps) {

  return (
    <> 
      <UrlContentsStyles>
        <Link key={getUrl?.id} to={`/:${getUrl?.shortUrl}`}>
          <div>
            <strong>Short Url</strong>
            <p>{getUrl?.shortUrl}</p> 
          </div>
          <FiChevronRight size={20} /> 
        </Link>
      </UrlContentsStyles>
    </>
  );
};