import React, { Component } from "react";
import "../page/Register.css";
export class Register extends Component {
  render() {
    return (
      <div className="register">
        <div className="left">
          <div className="formRegis">
            <h1>Registrasi</h1>
            <p>vutyrcxtdfycgvhbjnkbhvgcfdxcfvgbhjnkmnjbhvgtc
              rxerctvbnjmkjnbyvtcrxecvtbynmknubyvtcrvtbnm</p>
            <form>
               
                  <input className="inputData" type="text" placeholder="Username" />

                  <input className="inputData" type="text" placeholder="Password" />

                  <input className="inputData" type="text" placeholder="Re-type Password" />

                  <input className="inputData" type="text" placeholder="No Handphone" />

                  <input className="inputData" type="text" placeholder="Email" />
             
              <input className="submitRegis" type="submit" value="Submit" />
            </form>
          </div>
        </div>
        <div className="right">
          <h1>right</h1>
        </div>
      </div>
    );
  }
}

export default Register;
