import FormLogo from "../../components/Form/FormLogo/FormLogo";
import FormTitle from "../../components/Form/FormTitle/FormTitle";

import "./Form.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

function Form() {

    const [show, setShow] = useState('text');
   
    const showPassword = () => {
        show === 'text' ? setShow('password') : setShow('text');
    }

    return (
        <div className="max-w-96 m-auto mt-[63px]">
            <FormLogo/>
            <FormTitle/>
            <form className="form max-w-[375px]" action="">
                <h1 className="mb-[25px] text-lg ml-[8px] font-medium">Login</h1>

                <label className="user__label">
                    <input className="form__user" type="input" placeholder="Username/Email" required minLength="8"/>
                </label>

                <label className="password__label">
                    <input className="form__password" type={show} placeholder="Password" required minLength="8"/>
                        <div className={`password__btn ${show === 'text' ? 'active' : ''}`} onClick={() => showPassword()}>
                            <img className="h-[24px] w-[24px]" src="./../src/assets/imgs/eye.svg" alt="eye" />
                        </div>
                </label>

                <a className="text-[14px] text-[#4F4F4F] ml-[224px]" href="/">Forgot password?</a>
                <button className="form__submit">Login</button>
                <p className="text-center text-[12px]">Don have an account? <Link className="text-[#4C6ED7]" to="/Register">Register</Link></p>
            </form>
        </div>
    );
}

export default Form;