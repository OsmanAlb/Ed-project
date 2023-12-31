import "./../Form.scss";
import { useState } from "react";
import FormLogo from "../FormLogo/FormLogo";
import { Link } from "react-router-dom";
import { useRef } from 'react';
import { IMaskInput } from 'react-imask';

function FormRegister() {
    const [show, setShow] = useState('text');
    const ref = useRef(null);
    const inputRef = useRef(null);

    const showPassword = () => {
        show === 'text' ? setShow('password') : setShow('text');
    }

    return ( 
        <div className="max-w-96 m-auto mt-[63px]">
            <FormLogo/>
            <h1 className="m-auto max-w-[200px] text-center text-[24px] mb-9 font-semibold">Hi, Let s Make a Journey with Us</h1>
            <form className="form max-w-[375px]" action="">
                <h1 className="mb-[25px] text-lg ml-[8px] font-medium">Register</h1>

                <label className="user__label">
                    <input className="form__user" type="Email" placeholder="Email" required/>
                </label>

                <label className="password__label">
                    <input className="form__password mb-[35px]" type={show} placeholder="Password" required minLength="8"/>
                        <div className={`password__btn ${show === 'text' ? 'active' : ''}`} onClick={() => showPassword()}>
                            <img className="h-[24px] w-[24px]" src="./../src/assets/imgs/eye.svg" alt="eye" />
                        </div>
                </label>

                <label className="user__label">
                    <IMaskInput
                        className="form__user"
                        mask={'+7(000)000-00-00'}
                        radix="."
                        value=""
                        unmask={true} 
                        ref={ref}
                        inputRef={inputRef} 
                        // onAccept={
                        //   (value, mask) => console.log(value)
                        // }
                        placeholder='Phone Number'
                        minLength="10"
                        required
                    />
                </label>

                <label className="ml-[8px] block">
                    <p className="mb-[10px]">Register As a?</p>
                    <div className="text-[12px] max-w-[195px] items-center flex">
                        <input className="register__radio" name="radio" type="radio" defaultChecked/>
                        <p className="mr-[40px]">Student</p>
                        <input className="register__radio" name="radio" type="radio"/>
                        <p>Teacher</p>
                    </div>
                </label>

                <button className="form__submit">Register</button>
                <p className="text-center text-[12px]">Don have an account? <Link className="text-[#4C6ED7]" to="/">Login</Link></p>
            </form>
        </div>
    );
}

export default FormRegister;