import { useSelector } from 'react-redux';

const getToken = () => useSelector((state: any) => state?.user?.user?.token);

export default getToken;
