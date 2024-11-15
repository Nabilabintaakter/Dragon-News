import Advertise from "../Advertise";
import FindUs from "../FindUs";
import Q_Zone from "../Q_Zone";
import SocialLogin from "../SocialLogin";


const RightNavbar = () => {
    return (
        <div className="w-full px-4 md:px-0">
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <Q_Zone></Q_Zone>
            <Advertise></Advertise>
        </div>
    );
};

export default RightNavbar;