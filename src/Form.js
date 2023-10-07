import React from "react";
import styled from "styled-components";

const Form = () => {
  const Form = styled.form`
    html {
      height: 100%;
    }
    body {
      margin: 0;
      padding: 0;
      font-family: sans-serif;
      /* background: linear-gradient(360deg, transparent, red); */
      background: linear-gradient(transparent, #243c55);
    }

    .login-box {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 400px;
      padding: 40px;
      transform: translate(-50%, -50%);
      background: #333333;
      box-sizing: border-box;
      box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
      border-radius: 10px;
    }

    .login-box h2 {
      margin: 0 0 30px;
      font-weight: bold;
      padding: 0;
      color: white;
      text-align: center;
      font-variant-caps: normal;
    }

    .login-box .user-box {
      position: relative;
    }

    .login-box .user-box input {
      width: 100%;
      padding: 10px 0;
      font-size: 16px;
      color: black;
      margin-bottom: 30px;
      border: none;
      border-bottom: 1px solid #fff;
      outline: none;
      background: transparent;
      font-variant-caps: all-small-caps;
    }
    .login-box .user-box label {
      position: absolute;
      top: 0;
      left: 0;
      padding: 10px 0;
      font-size: 16px;
      color: white;
      pointer-events: none;
      transition: 0.5s;
    }

    .login-box .user-box input:focus ~ label,
    .login-box .user-box input:valid ~ label {
      top: -20px;
      left: 0;
      color: white;
      font-size: 18px;
      font-weight: bold;
      text-transform: uppercase;
      font-variant-caps: all-small-caps;
      /* background: linear-gradient(90deg, transparent, red); */
    }

    .login-box form a {
      position: relative;
      text-align: center;
      display: inline-block;
      padding: 10px 20px;
      color: white;
      font-size: 20px;
      text-decoration: none;
      text-transform: uppercase;
      overflow: hidden;
      transition: 0.5s;
      margin-top: 30px;
      letter-spacing: 4px;
      font-variant-caps: all-small-caps;
    }

    .login-box a:hover {
      background: white;
      color: black;
      border-radius: 5px;
      box-shadow: 0 0 5px white, 0 0 25px white, 0 0 50px white, 0 0 100px white;
    }

    .login-box a span {
      position: absolute;
      display: block;
    }

    .login-box a span:nth-child(1) {
      top: 0;
      left: -100%;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, transparent, white);
      animation: btn-anim1 1s linear infinite;
    }

    @keyframes btn-anim1 {
      0% {
        left: -100%;
      }
      50%,
      100% {
        left: 100%;
      }
    }

    .login-box a span:nth-child(2) {
      top: -100%;
      right: 0;
      width: 2px;
      height: 100%;
      background: linear-gradient(180deg, transparent, white);
      animation: btn-anim2 1s linear infinite;
      animation-delay: 0.25s;
    }

    @keyframes btn-anim2 {
      0% {
        top: -100%;
      }
      50%,
      100% {
        top: 100%;
      }
    }

    .login-box a span:nth-child(3) {
      bottom: 0;
      right: -100%;
      width: 100%;
      height: 2px;
      background: linear-gradient(270deg, transparent, white);
      animation: btn-anim3 1s linear infinite;
      animation-delay: 0.5s;
    }

    @keyframes btn-anim3 {
      0% {
        right: -100%;
      }
      50%,
      100% {
        right: 100%;
      }
    }

    .login-box a span:nth-child(4) {
      bottom: -100%;
      left: 0;
      width: 2px;
      height: 100%;
      background: linear-gradient(360deg, transparent, white);
      animation: btn-anim4 1s linear infinite;
      animation-delay: 0.75s;
    }

    @keyframes btn-anim4 {
      0% {
        bottom: -100%;
      }
      50%,
      100% {
        bottom: 100%;
      }
    }
  `;
  return (
    <Form>
      <div class="login-box">
        <h2>Login</h2>
        <form>
          <div class="user-box">
            <input
              placeholder="Enter Username"
              type="text"
              name=""
              required=""
            />
            <label>Username</label>
          </div>

          <div class="user-box">
            <input
              placeholder="Enter Password"
              type="password"
              name=""
              required=""
            />
            <label>Password</label>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div>
    </Form>
  );
};

export default Form;
