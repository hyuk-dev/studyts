import { useEffect, useState } from 'react';
import leftImg from '../../../../../assets/arrow_left.png';
import rightImg from '../../../../../assets/arrow_right.png';
import '../../../../../styles/SelectPage.css';

interface Props {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  pageSize: number;
  totalCount: number;
  pageFocus: string;
}

const SelectPage : React.FC<Props> = ({ page, setPage, pageSize, totalCount, pageFocus}) => {
  const [totalPages, setTotalPages] = useState<number>(1);
  const [startPage, setStartPage] = useState<number>(page);
  const [endPage, setEndPage] = useState<number>(page + 4);

  useEffect(()=> {
    setPage(1);
    setStartPage(1);
    setEndPage(page+4);
  }, [totalPages,pageFocus])

  useEffect(() => {
  
    setTotalPages(Math.ceil(totalCount / pageSize));
  }, [totalCount, pageSize]);

  function handleMovePage (e : React.MouseEvent) {
    const target = e.target as HTMLElement;
    setPage(Number(target.innerText));
  }

  function handleRightClick (e : React.MouseEvent) {
    setStartPage(startPage + 5);
    setEndPage(endPage + 5);
  }

  function handleLeftClick (e : React.MouseEvent) {
    setStartPage(startPage - 5);
    setEndPage(endPage - 5);
  }

  return (
    <div className="selectPage">
      {!(startPage === 1) && (
        <div className="pageClickBox" onClick={handleLeftClick}>
          <img src={leftImg} />
        </div>
      )}

      {[...Array(5)].map((_, key) => {
        key = key + startPage - 1;
        if (key + 1 <= totalPages)
          return (
            <div className={key+1 === page?"pageClickedBox":"pageClickBox"} key={key + 1} onClick={handleMovePage}>
              {key + 1}
            </div>
          );
      })}

      {!(startPage+5 >= totalPages) && <div className="pageClickBox" onClick={handleRightClick}>
        <img src={rightImg} />
      </div>}
    </div>
  );
}

export default SelectPage;