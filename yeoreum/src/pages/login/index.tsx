import LoginContainer from '../../components/login/loginContainer';
import Banner from '../../components/login/banner';
import LoginBox from '../../components/login/loginBox';
import Header from '../../components/login/header';
import LoginForm from '../../components/login/loginForm';
import Social from '../../components/login/social';
import Footer from '../../components/login/footer';

const Login = () => (
  <LoginContainer>
    <Banner />
    <LoginBox>
      <Header />
      <LoginForm />
      <Social />
      <Footer />
    </LoginBox>
  </LoginContainer>
);

export default Login;
