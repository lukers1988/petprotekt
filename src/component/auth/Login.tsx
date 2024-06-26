import { auth } from "@appConfig/firebase";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginFailure, loginStart, loginSuccess } from "@appStore/UserReducer";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";

const Login = () => {
    const [user, setUser] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const dispatch = useDispatch();
    const status = useSelector((state: any) => state.user.status);
    const navigate = useNavigate();

    const handleGoogleLogin = async(): Promise<void> => {
      dispatch(loginStart());

      try {
        const provider = new GoogleAuthProvider();

        provider.setCustomParameters({
          prompt: 'select_account',
        });

        const userCredentials = await signInWithPopup(auth, provider);

        dispatch(loginSuccess(userCredentials.user));
        navigate('/');

      } catch (error: any) {
        console.log(error.message);
        dispatch(loginFailure(error.message));
      }
    }

    const handleLogin = async (): Promise<void> => {
      dispatch(loginStart());

      try { 
        const userCredentials = await signInWithEmailAndPassword(auth, user, password);

        dispatch(loginSuccess(userCredentials.user));
        navigate('/');

      } catch (error: any) {
        console.log(error.message);
        dispatch(loginFailure(error.message))
      }
    }

    return <div className="login-container">
      <Card title="Login" className="p-shadow-24">
        <div className="p-fluid">
          <div className="p-field">
              <label htmlFor="username">Username</label>
              <InputText id="username" value={user} onChange={(e) => setUser(e.target.value)} />
          </div>
          <div className="p-field">
              <label htmlFor="password">Password</label>
              <Password id="password" value={password} onChange={(e) => setPassword(e.target.value)} feedback={false} />
          </div>
          <Button disabled={status === 'loading'} label="Login" icon="pi pi-user" onClick={handleLogin} className="p-mt-2" style={{marginTop: '20px'}} />
          <Divider />
            <div className="d-flex justify-content-center text-center mt-4 pt-1">
              <i className="pi pi-google" onClick={handleGoogleLogin} style={{marginRight: '20px'}} />
              <i className="pi pi-facebook" style={{marginRight: '20px'}} />
            </div>
          <Divider />
          Not have account yet? <Link to={'/auth/register'}>Create account</Link>
        </div>
      </Card>
  </div>
}

export default Login;
