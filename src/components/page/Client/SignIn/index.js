import FormSignIn from "./Form";
import HeroImage from "../HeroImage";

const SignInPage = () => {
        return(
            <div className="d-flex flex-column flex-lg-row flex-xl-row">
                <FormSignIn />
                <HeroImage />
            </div>
        );
};

export default SignInPage;