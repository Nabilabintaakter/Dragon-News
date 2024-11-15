import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex justify-center items-center min-h-[90vh]'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-14">
                <h2 className='text-3xl md:text-4xl font-bold text-[#403F3F] text-center mb-3'>Login your account</h2>
                <div className="divider"></div>
                <form className="card-body p-0">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-[#403F3F] text-xl">Email Address</span>
                        </label>
                        <input type="email" placeholder="Enter your email address" className="input bg-[#F3F3F3] border-none rounded-[5px]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-[#403F3F] text-xl">Password</span>
                        </label>
                        <input type="password" placeholder="Enter your password" className="input bg-[#F3F3F3] border-none rounded-[5px]" required />
                    </div>
                    <div className="form-control my-6">
                        <button className="btn btn-neutral rounded-[5px] font-semibold text-xl">Login</button>
                    </div>
                </form>
                <p className='text-[#706F6F] font-semibold text-center'>Dont’t Have An Account ? Please <Link className='text-[#F9756F]' to='/auth/register'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;