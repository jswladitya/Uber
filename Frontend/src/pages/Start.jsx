import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
      <div className="bg-cover bg-[url(https://images.pexels.com/photos/2422270/pexels-photo-2422270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] h-screen flex pt-2 justify-between flex-col">
        <img className="w-24 ml-64" src="https://logospng.org/download/uber/logo-uber-4096.png" alt="uber-logo" />
        <div className="bg-white pb-7 py-4 px-4">
          <h2 className="text-2xl font-bold">Get Started with Uber</h2>

          {/* Link is not block element so make it inline block or do this*/}
          <Link to={"/login"} className="flex justify-center items-center w-full bg-black text-white rounded py-3 mt-4 font-bold">Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start