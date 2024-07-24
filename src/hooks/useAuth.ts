import {
  getAuth,
  signInWithEmailAndPassword
} from 'firebase/auth'
import {useEffect, useState} from "react";

export const useAuth = () => {
  const [error, setError] = useState<Error | null | string>(null);

  //cleanup
  //deal with memory leak
  const [cancelled, setCancelled] = useState<boolean>(false);

  const auth = getAuth();

  function checkIfIsCancelled() {
    if (cancelled) return
  }

  const logIn = async(data:any) => {
    checkIfIsCancelled();

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      console.log('deu certo')
    } catch (error: any) {
      let systemErrorMessage;

      if (error.message.includes('user-not-found')) {
        systemErrorMessage = 'Usuario não encontrado'
      } else if (error.message.includes('wrong-password')) {
        systemErrorMessage = 'Senha errada.'
      } else if (error.message.includes('invalid-login-credentials')) {
        systemErrorMessage = 'Voce não possui cadastro'
        console.log("Voce não possui cadastro")
      } else {
        systemErrorMessage = 'Ocorreu um erro'
      }
      setError(systemErrorMessage);
      console.log(systemErrorMessage)
    }
  }

  useEffect(() => {
    return() => setCancelled(true)
  },[]);

  return {
    auth,
    logIn,
    error
  }
}