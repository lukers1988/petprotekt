import { auth } from "@appConfig/firebase";
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginFailure, loginStart, loginSuccess } from "@appStore/UserReducer";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";
import { useState } from "react";

const Register = () => {
    const [user, setUser] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const dispatch = useDispatch();
    const status = useSelector((state: any) => state.user.status);
    const navigate = useNavigate();

    const handleGoogleRegister = async(): Promise<void> => {
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

    const handleRegister = async (): Promise<void> => {
      dispatch(loginStart());

      try { 
        await createUserWithEmailAndPassword(auth, user, password);
        navigate('/');

      } catch (error: any) {
        console.log(error.message);
        dispatch(loginFailure(error.message))
      }
    }

    return <div className="login-container">
      <Card title="Create account" className="p-shadow-24">
        <div className="p-fluid">
          <div className="p-field">
              <label htmlFor="username">Username</label>
              <InputText id="username" onChange={(e) => setUser(e.target.value)}/>
          </div>
          <div className="p-field">
              <label htmlFor="password">Password</label>
              <Password id="password" onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <Button disabled={status === 'loading'} label="Login" icon="pi pi-user" className="p-mt-2" style={{marginTop: '20px'}} onClick={handleRegister}/>
          <Divider />
            <div className="d-flex justify-content-center text-center mt-4 pt-1">
              <i className="pi pi-google" onClick={handleGoogleRegister} style={{marginRight: '20px'}} />
              <i className="pi pi-facebook" style={{marginRight: '20px'}} />
            </div>
          <Divider />
          Have you account? <Link to={'/auth/login'}>Login to your account</Link>
        </div>
      </Card>
    </div>
}

export default Register;
