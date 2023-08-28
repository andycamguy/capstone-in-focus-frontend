  -=================
  const { state, dispatch } = useGlobalState();

  useEffect(() => {
    // Function to retrieve user data from local storage
    const getUserFromLocalStorage = () => {
      const userData = localStorage.getItem('user');
      if (userData) {
        const user = jwtDecode(userData);
        console.log('User data:', user); 
        dispatch({
            type: 'SET_USER',
            payload: user
        });
      }
    };

    getUserFromLocalStorage();
    
  }, []);
  ================