import Head from 'next/head'
/*import Link from 'next/link'*/
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import {userLogOut} from '../src/reducers';


export default function Home() {
  const router = useRouter()
  const dispatch = useDispatch();
  /*const userState = useSelector(state => state.user);*/
  const user = useSelector(state => state.user.user);


  //userState.setCnt

  const moveToSignin = (e) => {
    router.push("/user/signin");
}
  
  const moveToLogin = (e) => {
      router.push("/user/login");
  }



  const logout = () => {
    dispatch(userLogOut());
  }

  return (
    <div className="container">
      <Head>
        <title>name of your app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      {user ?
      <div>
        <div onClick={e => logout()}>GOOGLE FORM</div>
      </div>
      :
      <div>

      <div onClick={e => moveToSignin(e)}>
        SIGN IN 
      </div>
      
      <div onClick={e => moveToLogin(e)}>
        LOG IN
      </div>

      <div onClick={e => userLogOut(e)}>
        LOG OUT
      </div>

      </div>
      }

    </div>
  )
}
