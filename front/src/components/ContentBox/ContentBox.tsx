import Navigation from '../layouts/Navigation';
import Footer from '../layouts/Footer';
import '../../styles/ContentBox.css';
import { JSX } from 'react';

interface Props {
  children: JSX.Element;
  userEnv: string;
  pageFocus: string;
}
const ContentBox: React.FC<Props> = ({
  children,
  userEnv,
  pageFocus,
}) => {
  return (
    <div>
      <Navigation userEnv={userEnv} pageFocus={pageFocus} />
      <div className="contentArea">{children}</div>
      <Footer userEnv={userEnv} />
    </div>
  );
};

export default ContentBox;
