import { useState } from "react";
import { Link } from "react-router-dom";

const Captainlogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captain, setCaptain] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptain({ email:email, password:password });
    console.log(captain);
    setEmail('');
    setPassword('');
  }

  return (
    <div className="p-8 h-screen flex flex-col justify-between">
    <div>
      <img
        className="w-20 mb-10"
        src="https://www.svgrepo.com/show/505031/uber-driver.svg"
        alt=""
      />

      <form 
      // pass the event and receive it in the function
      onSubmit={(e) => submitHandler(e)}>
        <h3 className="text-lg font-medium mb-2">Enter Email</h3>
        <input
          required
          className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@example.com"
        />

        <h3 className="text-lg font-medium mb-2">Enter Password</h3>
        <input
          className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />

        <button className="bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base">
          Login
        </button>
      </form>
      <p className="text-center">
        New here?{" "}
        <Link to="/captain-signup" className="text-blue-600">
          Register as a captain
        </Link>
      </p>
    </div>


    <div>
      <Link
        to="/login"
        className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base"
      >
        Login as User
      </Link>
    </div>
  </div>
  )
}

export default Captainlogin