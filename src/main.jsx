import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from './context/AuthContext';

// 1. Yahan apni ID ko quotes (" ") ke andar likhein
const GOOGLE_CLIENT_ID = "789826047913-gfh69395p2k3udh01uvveascm7oapkis.apps.googleusercontent.com";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2. clientId mein wahi constant variable pass karein */}
<GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
    <AuthProvider>
  <App />
    </AuthProvider>
</GoogleOAuthProvider>
  </StrictMode>,
)