import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { updateViews } from '../../apis/postDetail';

interface ViewsProps {
  pid: string;
  view: number;
}

const Views = ({ pid, view }: any) => {
  const [countViews, setCountViews] = useState(view);

  const { mutate: viewMutation } = useMutation(() =>
    updateViews(pid, countViews),
  );
  useEffect(() => {
    setCountViews(countViews + 1);
  }, []);

  useEffect(() => {
    viewMutation(pid, countViews);
  }, [countViews]);

  return <div>조회 {countViews}</div>;
};

export default Views;
