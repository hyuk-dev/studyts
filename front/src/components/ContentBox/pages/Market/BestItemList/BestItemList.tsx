import { useState, useEffect } from 'react';
import '../../../../../styles/BestItemList.css';
import BestItem from './BestItem';
import { Product } from '../types/product';

interface Props {
  pageSize: number;
  keyword: string;
  page: number;
  userEnv: string;
  width: number;
}
const BestItemList: React.FC<Props> = ({
  pageSize,
  keyword,
  page,
  userEnv,
  width,
}) => {
  const [bestPageSize, setBestPageSize] = useState<number>(4);
  const [bestProducts, setBestProducts] = useState<Product[]>([]);
  const [bestOrder, setBestOrder] = useState<string>('favorite');
  const [bestPage, setBestPage] = useState<number>(1);

  function currentEnv(): string | undefined {
    if (width >= 1200) return 'bestItemList';
    if (width >= 744 && width < 1200) return 'tabletBestItemList';
    if (width < 744) return 'mobileBestItemList';
  }

  useEffect(() => {
    if (width >= 1200) setBestPageSize(4);
    if (width >= 865 && width < 1200) setBestPageSize(2);
    if (width < 865) setBestPageSize(1);
  }, [width]);

  async function getBestProducts(): Promise<void> {
    const response = await fetch(
      `https://panda-market-api.vercel.app/products?page=${bestPage}&pageSize=${bestPageSize}&orderBy=${bestOrder}&keyword=${keyword}`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }
    );
    const result: Product[] = await response.json();
    setBestProducts(result);
  }

  useEffect(() => {
    setTimeout(getBestProducts, 100);
  }, [keyword, bestPageSize]);

  return (
    <div>
      <h3 className="title">베스트 상품</h3>
      <div className={currentEnv()}>
        <BestItem bestProducts={bestProducts} />
      </div>
    </div>
  );
};
