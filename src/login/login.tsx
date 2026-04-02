const LoginComp = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  if (!isLoggedIn) {
    return <p>Please login</p>;
  }

  return <h2>Welcome User!</h2>;
};

export default LoginComp;
