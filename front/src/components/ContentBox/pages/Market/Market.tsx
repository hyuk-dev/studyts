import { BestItemList } from './BestItemList/BestItemList';
import  SellingItemList  from './SellingItemList/SellingItemList';
import { useEffect, useState } from 'react';

interface Props {
  userEnv: string;
  setPageFocus: React.Dispatch<React.SetStateAction<string>>;
  pageFocus: string;
}
const Market : React.FC<Props> = ({userEnv, setPageFocus, pageFocus}) => {
  const [order, setOrder] = useState<string>('recent');
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10); // 모바일: 4 , 태블릿: 6, 데스크탑: 10
  const [keyword, setKeyword] = useState<string>('');
  const [totalCount, setTotalCount] = useState<number>(1);

  useEffect(() => {
    if (userEnv === 'desktop') setPageSize(10);
    if (userEnv === 'tablet') setPageSize(6);
    if (userEnv === 'mobile') setPageSize(4);
  }, [userEnv]);

  useEffect(()=> {
    setPageFocus("market");
  },[])
  return (
    <div className={userEnv}>
      <SellingItemList
        order={order}
        setOrder={setOrder}
        page={page}
        setPage={setPage}
        pageSize={pageSize}
        setPageSize={setPageSize}
        keyword={keyword}
        setKeyword={setKeyword}
        totalCount={totalCount}
        userEnv={userEnv}
        setTotalCount={setTotalCount}
        pageFocus={pageFocus}
      />
    </div>
  );
}

export default Market