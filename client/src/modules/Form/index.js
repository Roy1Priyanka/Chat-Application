import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { useState } from "react";

const Form = ({ isSignInPage = true }) => {
  const [data, setData] = useState({
    ...(!isSignInPage && {
      fullName: "",
    }),
    email: "",
    password: "",
  });

  return (
    <div className="bg-white w-[600px] h-[650px] shadow-lg rounded-lg flex flex-col justify-center items-center">
      <div className="text-4xl font-extrabold">Welcome {isSignInPage && "Back"}</div>
      <div className="text-xl font-light mb-14">{isSignInPage ? "Sign in to get explored" : "Sign up to get started"}</div>
      <form className="w-full flex flex-col items-center" onSubmit={() => console.log('Submitted')}>
      {!isSignInPage && <Input label="Full name" name="fullName" placeholder="Enter your full name" className="mb-6" value={data.fullName}
      onChange={(e) => setData({ ...data, fullName: e.target.value })}/>}
      <Input label="Email address" name="email" placeholder="Enter your email" className="mb-6" value={data.email}
      onChange={(e) => setData({ ...data, email: e.target.value })}/>
      <Input label="Password" type="password" name="password" placeholder="Enter your password" className="mb-14"
      value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })}/>
      <Button label={isSignInPage ? "Sign in" : "Sign up"} type="submit" className="w-[300px] mb-2"/>
      </form>
      <div>{isSignInPage ? "Didn't have an account?" : "Already have an account?"}{" "}<span className="text-primary 
      cursor-pointer underline">{isSignInPage ? "Sign up" : "Sign in"}</span></div>
    </div>
  );
};

export default Form;

