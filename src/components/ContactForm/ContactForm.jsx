import { useEffect, useRef, useState } from 'react';
import './ContactForm.css'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from 'axios';

export default function ContactForm() {
    const [phone, setPhone] = useState("");
    const [selectedCountry, setSelectedCountry] = useState("in");
    const first_name = useRef(null);
    const last_name = useRef(null);
    const email = useRef(null);
    const message = useRef(null);
    const [responseMessage, setResponseMessage] = useState("");
    const [showToast, setShowToast] = useState(false);
    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => setShowToast(false), 4000);
            return () => clearTimeout(timer);
        }
    }, [showToast]);

    const sendData = (event) => {
        event.preventDefault();
        axios.post("https://api2-test.leoron.eu/api/contact-us", {
            first_name: first_name.current?.value,
            last_name: last_name.current?.value,
            email: email.current?.value,
            phone_number: phone,
            message: message.current?.value,

        },

            {
                headers: {
                    Accept: "application/json",
                }
            })
            .then(res => {
                setResponseMessage(res?.data?.message);
                console.log(res.data);
                setShowToast(true);
            })
            .catch(err => console.log(err))

    }



    return (
        <form className='ContactForm Flex-Column' onSubmit={sendData}>
            <div className='RowInput Flex-Row'>
                < div className='InputContainer Flex-Column'>
                    <label >First Name</label>
                    <input type="text" placeholder='Enter First Name' ref={first_name} required />
                </div>
                <div className='InputContainer Flex-Column'>
                    <label >Last Name</label>
                    <input type="text" placeholder='Enter Last Name' ref={last_name} required />
                </div>
            </div>
            <div className='RowInput Flex-Row'>
                <div className='InputContainer Flex-Column'>
                    <label >Email</label>
                    <input type="email" placeholder='Enter your Email' ref={email} required />
                </div>
                <div className='InputContainer  Flex-Column'>
                    <label >Phone Number</label>
                    <div className="PhoneWrapper Flex-Row">
                        <div className="PhoneIconContainer Flex-Row">
                            <img
                                src={`https://flagcdn.com/w40/${selectedCountry}.png`}
                                alt="Flag"
                                className="flag-icon"
                            />
                            <button className="arrow-button-flag" disabled>
                                <img src="/images/Common/Bottom Arrow.svg" alt="Expand" />
                            </button>
                        </div>
                        <PhoneInput
                            defaultCountry=""
                            value={phone || ""}
                            required
                            onChange={(phone, country) => {
                                setPhone(phone);
                                if (country?.countryCode) {
                                    setSelectedCountry(country.countryCode);
                                }
                            }}
                            containerClass="phone-input-container"
                            inputClass="phone-input-field"
                            buttonStyle={{ display: "none" }}
                            inputProps={{
                                placeholder: "Enter your number"
                            }}

                        />
                    </div>

                </div>

            </div>
            <div className='InputContainer Flex-Column'>
                <label >Message</label>
                <textarea placeholder='Enter your Message' ref={message} required></textarea>
            </div>
            <div className='ContactFormBottom Flex-Row'>
                <div className='AgreeCheckBox Flex-Row'>
                    <input type='checkbox' required></input>
                    <p>I agree with Terms of Use and Privacy Policy</p>
                </div>
                <button className='BtnDigitalSection Flex-Row' type='submit'>Send Your Message<img src="/images/Common/Arrow icon Image.svg" /></button>
            </div>
            {showToast && (
                <div className="ToastNotification">{responseMessage}</div>
            )}
        </form>

    )
}
