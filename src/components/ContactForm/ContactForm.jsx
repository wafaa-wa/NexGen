import { useState } from 'react';
import './ContactForm.css'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function ContactForm() {
    const [phone, setPhone] = useState("");
    const [selectedCountry, setSelectedCountry] = useState("in");
    return (
        <div className='ContactForm Flex-Column'>
            <div className='RowInput Flex-Row'>
                < div className='InputContainer Flex-Column'>
                    <label >First Name</label>
                    <input type="text" placeholder='Enter First Name' />
                </div>
                <div className='InputContainer Flex-Column'>
                    <label >Last Name</label>
                    <input type="text" placeholder='Enter Last Name' />
                </div>
            </div>
            <div className='RowInput Flex-Row'>
                <div className='InputContainer Flex-Column'>
                    <label >Email</label>
                    <input type="email" placeholder='Enter your Email' />
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
                <textarea placeholder='Enter your Message'></textarea>
            </div>
            <div className='ContactFormBottom Flex-Row'>
                <div className='AgreeCheckBox Flex-Row'>
                    <input type='checkbox'></input>
                    <p>I agree with Terms of Use and Privacy Policy</p>
                </div>
                <button className='BtnDigitalSection Flex-Row'>Send Your Message<img src="/images/Common/Arrow icon Image.svg" /></button>
            </div>
        </div>
    )
}
