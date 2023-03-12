import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useGlobalModal } from 'hooks';
import GlobalModal from 'components/common/modal/GlobalModal';
import ScrollToTop from 'components/common/scrollToTop';
import Header from 'components/Header';
import Footer from 'components/Footer';
import ScrollToTopButton from 'components/ScrollToTopButton';
import LoadingPage from './LoadingPage';

export default function Root() {
  const { closeModal } = useGlobalModal();
  const location = useLocation();

  // 페이지 이동 시 팝업 닫기
  useEffect(() => {
    closeModal();
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Suspense fallback={<LoadingPage />}>
        <ScrollToTop />
        <ScrollToTopButton />
        <GlobalModal />
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
}
