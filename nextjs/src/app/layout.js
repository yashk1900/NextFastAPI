import 'bootstrap/dist/css/bootstrap.min.css'
import "./globals.css";
import { AuthProvider } from './context/AuthContext';

export default function RootLayout({ children }) {
  return (
   <AuthProvider>
    <html lang="en">
      <body>
        {children}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
      </body>
    </html>
   </AuthProvider>
  );
}
