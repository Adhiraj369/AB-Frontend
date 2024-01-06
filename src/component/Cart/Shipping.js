import React, { Fragment, useState } from "react";
import "./Shipping.css";
import { useSelector, useDispatch } from "react-redux";
import { saveShippingInfo } from "../../actions/cartAction";
import MetaData from "../layout/MetaData";
import PinDropIcon from "@material-ui/icons/PinDrop";
import HomeIcon from "@material-ui/icons/Home";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import PublicIcon from "@material-ui/icons/Public";
import PhoneIcon from "@material-ui/icons/Phone";
import TransferWithinAStationIcon from "@material-ui/icons/TransferWithinAStation";
import { Country, State } from "country-state-city";
import { useAlert } from "react-alert";
import CheckoutSteps from "./CheckoutSteps";
import EventContent from "../../assets/EventContent.json";
import logo from "../../assets/sponsors/sponsor1.svg";


const Shipping = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { shippingInfo, productInfo } = useSelector((state) => state.cart);

  const [collegeName, setcollegeName] = useState(shippingInfo.collegeName);
  const [email, setEmail] = useState(shippingInfo.email);
  const [teamName, setteamName] = useState(shippingInfo.teamName);
  const [leaderName, setleaderName] = useState(shippingInfo.leaderName);
  const [contactNo, setcontactNo] = useState(shippingInfo.contactNo);
  const [instrument, setinstrument] = useState(shippingInfo.instrument);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);
  const [extraRequirments, setextraRequirments] = useState(shippingInfo.extraRequirments);
  const [committeeOne, setcommitteeOne] = useState(shippingInfo.committeeOne);
  const [committeeTwo, setcommitteeTwo] = useState(shippingInfo.committeeTwo);
  const [committeeThree, setcommitteeThree] = useState(shippingInfo.committeeThree);
  const [accomodation, setaccomodation] = useState(shippingInfo.accomodation);

  const committee = [
    "CommitteeOne",
    "CommitteeTwo",
    "CommitteeThree",
    "CommitteeFour",
  ]

  const accom = [
    "Yes",
    "No"
  ]

  let roundRegex = /^[rR]ound [1-9]\d*/;

  let rules = EventContent.showstopper.rules;
  let regulations = EventContent.showstopper.regulations;

  const shippingSubmit = (e) => {
    e.preventDefault();

    //New Consts



    if (contactNo.length < 10 || contactNo.length > 10) {
      alert.error("Phone Number should be 10 digits Long");
      return;
    }
    dispatch(
      saveShippingInfo({ collegeName, email, teamName, leaderName, contactNo, instrument, extraRequirments, committeeOne, committeeTwo, committeeThree, accomodation }))
    history.push("/order/confirm");
  };

  return (
    <Fragment>
      <MetaData title="Shipping Details" />
      <div className='FormPage'>
        <div className='main'>
          <img src={logo}></img>
          <div className='formContent'>
            <div className='title'>
              {/* <h1>{props.name}</h1> */}
            </div>
            {/* <div className='rules'>
              <div>
                <ul>
                  {props.rules?.map((rule, index) => (

                    roundRegex.test(rule) ? <h3>{rule}</h3> : <li key={index}>{rule}</li>
                  ))}
                </ul>
              </div>
              <div>
                <ul>
                  {props.regulations?.map((regulation, index) => (
                    roundRegex.test(regulation) ? <h3>{regulation}</h3> : <li key={index}>{regulation}</li>
                  ))}
                </ul>
              </div>
            </div> */}
          </div>
        </div >
        <div className='lineVer'></div>

        <div className='formDiv'>
          <h1>Registration Form</h1>
          <form onSubmit={shippingSubmit} className='form'>
            {/* Team Name */}
            <div className='infoDiv'>
              <label>Team Name</label>
              <input
                type="text"

                value={teamName}
                onChange={(e) => setteamName(e.target.value)}
                required
                placeholder="Team Name"
                className="input" />
            </div>

            {/* Team Lead Name */}
            <div className='infoDiv'>
              <label>Team Lead Name</label>
              <input
                type="text"

                value={leaderName}
                onChange={(e) => setleaderName(e.target.value)}
                required
                placeholder="Team Lead"
                className="input" />
            </div>

            {/* Contact Number */}
            <div className='infoDiv'>
              <label>Contact Number</label>
              <input
                type="tel"

                value={contactNo}
                onChange={(e) => setcontactNo(e.target.value)}
                required
                placeholder="Enter your contact no."
                className="input" />
            </div>

            {/* Email ID */}
            <div className='infoDiv'>
              <label>Email ID</label>
              <input
                type="email"

                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your Email Id"
                className="input" />
            </div>

            {/* College Name */}
            <div className='infoDiv'>
              <label>College Name</label>
              <input
                type="text"

                value={collegeName}
                onChange={(e) => setcollegeName(e.target.value)}
                required
                placeholder="College/Institute Name"
                className="input" />
            </div>
            <div className='infoDiv'>
              <label>Instrument Requirements</label>
              <input
                type="text"
                value={instrument}
                onChange={(e) => setinstrument(e.target.value)}

                placeholder="Your text goes here"
              />
            </div>
            <div className='infoDiv'>
              <label>Extra Requirments</label>
              <input
                type="text"

                value={extraRequirments}
                onChange={(e) => setextraRequirments(e.target.value)}
                rows="4"
                cols="50"
                placeholder="Your text goes here"
              />
            </div>

            {/* Instruments Required */}
            <div className='infoDiv'>
              <label>Select Committee</label>

              <select
                value={committeeOne}
                onChange={(e) => setcommitteeOne(e.target.value)}
              >
                <option value="">Committee 1</option>
                {committee &&
                  committee.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
              </select>
            </div>
            <div className='infoDiv'>
              <label>Select Committee</label>
              <select

                value={committeeTwo}
                onChange={(e) => setcommitteeTwo(e.target.value)}
              >
                <option value="">Committee 2</option>
                {committee &&
                  committee.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
              </select>
            </div>

            <div className='infoDiv'>
              <label>Select Committee</label>

              <select

                value={committeeThree}
                onChange={(e) => setcommitteeThree(e.target.value)}
              >
                <option value="">Committee 3</option>
                {committee &&
                  committee.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
              </select>
            </div>

            <div className='infoDiv'>
              <label>Accomodation Required</label>

              <select
                required
                value={accomodation}
                onChange={(e) => setaccomodation(e.target.value)}
              >
                <option value="">Accomodation Required</option>
                {accom &&
                  accom.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
              </select>
            </div>



            {/* Questions Section */}
            {/* <div className='questionDiv'>
            {questionsData.questionsSection.questions.map((question) => (
              <div key={question.id} className='infoDiv'>
                <label>{question.label}</label>
                {question.type === 'radio' ? (
                  question.options.map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        name={question.id}
                        value={option}
                        onChange={() => handleRadioChange(question.id, option)}
                        className="input"
                      />
                      {option}
                    </label>
                  ))
                ) : (
                  <textarea
                    name={question.id}
                    value={extraRequirments}
                    onChange={(e) => setextraRequirments(e.target.value)}
                    rows="4"
                    cols="50"
                    placeholder="Your text goes here"
                  />
                )}
              </div>
            ))}
          </div> */}
            {/* <input
              type="submit"
              value="Register"
              className="shippingBtn"
            /> */}
            <button type="submit">Continue</button>
          </form>
        </div>








        {/* <div className="shippingContainer">
        <div className="shippingBox">
          <h2 className="shippingHeading">Registeration Details</h2>

          <form
            className="shippingForm"
            encType="multipart/form-data"
            onSubmit={shippingSubmit}
          >
            <div>
              <HomeIcon />
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <HomeIcon />
              <input
                type="text"
                placeholder="College Name"
                required
                value={collegeName}
                onChange={(e) => setcollegeName(e.target.value)}
              />
            </div>

            <div>
              <LocationCityIcon />
              <input
                type="text"
                placeholder="Team Name"
                required
                value={teamName}
                onChange={(e) => setteamName(e.target.value)}
              />
            </div>

            <div>
              <PinDropIcon />
              <input
                type="text"
                placeholder="Leader's Name"
                required
                value={leaderName}
                onChange={(e) => setleaderName(e.target.value)}
              />
            </div>

            <div>
              <PhoneIcon />
              <input
                type="number"
                placeholder="Contact Number"
                required
                value={contactNo}
                onChange={(e) => setcontactNo(e.target.value)}
                size="10"
              />
            </div>

            <div>
              <PinDropIcon />
              <input
                type="text"
                placeholder="Instruments Required"
                required
                value={instrument}
                onChange={(e) => setinstrument(e.target.value)}
              />
            </div>

            <div>
              <PinDropIcon />
              <input
                type="text"
                placeholder="Extra Required"
                required
                value={extraRequirments}
                onChange={(e) => setextraRequirments(e.target.value)}
              />
            </div>

            <div>
              <PublicIcon />

              <select
                required
                value={committeeOne}
                onChange={(e) => setcommitteeOne(e.target.value)}
              >
                <option value="">Committee 1</option>
                {committee &&
                  committee.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <PublicIcon />

              <select
                required
                value={committeeTwo}
                onChange={(e) => setcommitteeTwo(e.target.value)}
              >
                <option value="">Committee 2</option>
                {committee &&
                  committee.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <PublicIcon />

              <select
                required
                value={committeeThree}
                onChange={(e) => setcommitteeThree(e.target.value)}
              >
                <option value="">Committee 3</option>
                {committee &&
                  committee.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <PublicIcon />

              <select
                required
                value={accomodation}
                onChange={(e) => setaccomodation(e.target.value)}
              >
                <option value="">Accomodation Required</option>
                {accom &&
                  accom.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
              </select>
            </div>

            <input
              type="submit"
              value="Register"
              className="shippingBtn"
            />
          </form>
        </div>
      </div> */}
      </div>
    </Fragment>
  );
};

export default Shipping;
