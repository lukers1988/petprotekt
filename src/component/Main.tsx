import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Main = () => {
    const loggedInUser = useSelector((state: any) => state.user.user);

    return (
        <div className="dashboard">
            {!loggedInUser && (
                <>
                    <Link to={'/auth/login'}>Login</Link>
                    <br />
                    <Link to={'/auth/register'}>Register</Link>
                </>
            )}
        </div>
    );
};

export default Main;
