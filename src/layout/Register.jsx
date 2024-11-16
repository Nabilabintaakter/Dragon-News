import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";


const Register = () => {
    const { createNewUser, setUser,updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        // get form data
        const form = new FormData(e.target);
        const name = form.get('name')
        const email = form.get('email')
        const photo = form.get('photo')
        const password = form.get('password')

        createNewUser(email, password)
            .then(res => {
                if (name.length < 5) {
                    toast.error('Name must be more than 5 characters or long');
                    setUser(null);
                    return;
                }
                else {
                    setUser(res.user);
                    updateUserProfile({displayName: name, photoURL: photo})
                    .then(res=>{
                        navigate('/')
                    })
                    .catch(err=>{
                        console.log(err.message);
                    })
                    toast.success('Successfully registered!');
                }
            })
            .catch(err => {
                toast.error(err.message);
                setUser(null)
            })
    }
    return (
        <div className='flex justify-center items-center min-h-[90vh]'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-14">
                <h2 className='text-3xl md:text-4xl font-bold text-[#403F3F] text-center mb-3'>Register your account</h2>
                <div className="divider"></div>
                <form onSubmit={handleSubmit} className="card-body p-0">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-[#403F3F] text-xl">Your Name</span>
                        </label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                            className="input bg-[#F3F3F3] border-none rounded-[5px]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-[#403F3F] text-xl">Photo URL</span>
                        </label>
                        <input
                            name="photo"
                            type="text"
                            placeholder="Enter your photo url"
                            className="input bg-[#F3F3F3] border-none rounded-[5px]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-[#403F3F] text-xl">Email</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Enter your email address"
                            className="input bg-[#F3F3F3] border-none rounded-[5px]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-[#403F3F] text-xl">Password</span>
                        </label>
                        <input
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            className="input bg-[#F3F3F3] border-none rounded-[5px]" required />
                    </div>
                    <div className="form-control">
                        <label className="label justify-start gap-3 cursor-pointer">
                            <input type="checkbox" className="checkbox checkbox-sm md:checkbox-md" />
                            <span className="label-text text-[#706F6F] font-semibold text-base">Accept Terms & Conditions</span>
                        </label>
                    </div>
                    <div className="form-control my-6">
                        <button className="btn btn-neutral rounded-[5px] font-semibold text-xl">Register</button>
                    </div>
                </form>
                <p className='text-[#706F6F] font-semibold text-center'>Already Have An Account ? Please <Link className='text-[#F9756F]' to='/auth/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;