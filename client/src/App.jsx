import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>ICSI 418Y PA2</h1>
      <SignupForm />
      <hr />
      <LoginForm />
    </div>
  );
}