import '../../../../styles/TagElement.css';
import imgX from '../../../../assets/ic_X.png';
import { JSX } from 'react';

interface Props {
  children: string;
  setTag: React.Dispatch<React.SetStateAction<string[]>>;
  tag: string[];
}
const TagElement : React.FC<Props> = ({ children, setTag, tag }) => {
    function handleDeleteClick (){
        setTag(tag.filter((element: string)=>element !== children));
    }
  return (
    <div className="tagElementDiv">
      <div>#{children}</div>
      <div>
        <img src={imgX} className="imgX" onClick={handleDeleteClick}/>
      </div>
    </div>
  );
}

export default TagElement;