import { firestorage, firestore } from './firebaseService';
import { doc, getDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

// 유저 프로필 기본정보 조회
export const getUserInfoData = async (params: any) => {
  const [_, uid] = params.queryKey;

  const docRef = doc(firestore, 'user', `${uid}`);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  }
};

/**
 * 스토리지에 프로필 파일 업로드 후 이미지 url을 반환받는 함수
 * @param file : 선택해서 올린 파일 객체 (ex. e.target.files[0])
 * @param uid : 유저 uid
 * @returns imgUrl : 스토리지에 업로드된 이미지 객체 Promise
 */
export const uploadProfileImg = async (file: any, uid: string) => {
  // TODO :: 업로드 이미지 용량 최적화
  await uploadBytes(ref(firestorage, `${uid}`), file);

  const imgUrl = await getDownloadURL(ref(firestorage, `${uid}`));
  return imgUrl;
};
