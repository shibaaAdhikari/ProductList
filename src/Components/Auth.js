import Login from "@/pages/Login";

const withAuth = Component => {
    const Auth = (props) => {
      const isLoggedIn= (typeof window !== 'undefined' && window.localStorage)&& localStorage.getItem("accessToken");
      if (!isLoggedIn) {
        return (
          <Login />
        );
      }
      return (
        <Component {...props} />
      );
    };

    if (Component.getInitialProps) {
      Auth.getInitialProps = Component.getInitialProps;
    }
  
    return Auth;
  };
  
  export default withAuth;