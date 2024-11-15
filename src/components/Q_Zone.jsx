import swim from '../assets/swimming.png'
import classImage from "../assets/class.png"
import play from '../assets/playground.png'

const Q_Zone = () => {
    return (
        <div className="bg-[#F3F3F3] py-[15px] mb-5">
            <h2 className='text-[#403F3F] text-xl font-semibold mb-5 ml-5'> Q-Zone</h2>
            <div className='flex flex-col gap-3'>
                <div ><img className='w-full' src={swim} alt="" /></div>
                <div><img className='w-full' src={classImage} alt="" /></div>
                <div><img className='w-full' src={play} alt="" /></div>
            </div>
        </div>
    )
};

export default Q_Zone;