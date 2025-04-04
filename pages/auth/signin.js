import { signIn, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function SignIn() {
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const loadProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    loadProviders();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black flex flex-col justify-center items-center p-4">
      <Head>
        <title>Accedi - Cosmos Platform</title>
      </Head>
      
      <div className="bg-slate-800 p-8 rounded-xl shadow-2xl max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-white mb-8">
          Accedi a Cosmos Platform
        </h1>
        
        <div className="space-y-4">
          {providers &&
            Object.values(providers).map((provider) => (
              <div key={provider.name} className="text-center">
                <button
                  onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                  className="flex items-center justify-center w-full px-4 py-3 space-x-2 
                             transition-colors bg-indigo-600 hover:bg-indigo-700 
                             rounded-lg text-white font-medium"
                >
                  {provider.name === "Discord" && (
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path fill="currentColor" d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.419c0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.419c0 1.334-.946 2.419-2.157 2.419z"/>
                    </svg>
                  )}
                  <span>Accedi con {provider.name}</span>
                </button>
              </div>
            ))}
          
          <p className="text-center text-gray-400 text-sm mt-6">
            Accedendo, accetti i Termini di Servizio e l'Informativa sulla Privacy
          </p>
        </div>
      </div>
    </div>
  );
} 