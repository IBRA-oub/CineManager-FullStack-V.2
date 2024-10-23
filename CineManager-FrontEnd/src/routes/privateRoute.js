import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

function PrivateRoute({ children, role }) {
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/login');
    } else {
      try {
        const decodedToken = jwtDecode(token);
        const userRole = decodedToken?.user?.role;
        

        if (userRole === role) {
          setIsAuthorized(true); 
        } else {
          
            navigate('/PageNotFound');
          
        }
      } catch (error) {
        console.error('Erreur lors de la décodage du token', error);
        navigate('/login'); 
      }
    }
  }, [navigate, role]);

  return isAuthorized ? children : null; 
}

export default PrivateRoute;
