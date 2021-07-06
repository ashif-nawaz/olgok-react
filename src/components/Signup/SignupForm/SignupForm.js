import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import Button from "../../UI/Button/Button";
import ErrorFeed from "../../UI/ErrorFeed/ErrorFeed";
import Input from "../../UI/Input/Input";
import SelectInput from "../../UI/SelectInput/SelectInput";
import Styles from "./SignupForm.module.css";

const DEFAULT_STATE = {
  firstName: "",
  isFirstNameTouched: false,
  isFirstNameValid: false,
  lastName: "",
  isLastNameTouched: false,
  isLastNameValid: false,
  email: "",
  isEmailTouched: false,
  isEmailValid: false,
  phone: "",
  isPhoneTouched: false,
  isPhoneValid: false,
  dob: "",
  isDOBTouched: false,
  isDOBValid: false,
  gender: "",
  isGenderTouched: false,
  isGenderValid: false,
  password: "",
  isPasswordTouched: false,
  isPasswordValid: false,
  confirmPassword: "",
  isConfirmPasswordTouched: false,
  isConfirmPasswordValid: false,
  isFormValid: false,
};

const reducer = (prevState, action) => {
  if (action.type === "fname") {
    if (action.fieldValue === "") {
      return {
        ...prevState,
        firstName: action.fieldValue,
        isFirstNameTouched: true,
        isFirstNameValid: false,
        isFormValid: false,
      };
    }
    return {
      ...prevState,
      firstName: action.fieldValue,
      isFirstNameTouched: true,
      isFirstNameValid: true,
      isFormValid:
        prevState.isLastNameValid &&
        prevState.isEmailValid &&
        prevState.isPhoneValid &&
        prevState.isDOBValid &&
        prevState.isGenderValid &&
        prevState.isPasswordValid &&
        prevState.isConfirmPasswordValid,
    };
  }

  if (action.type === "lname") {
    if (action.fieldValue === "") {
      return {
        ...prevState,
        lastName: action.fieldValue,
        isLastNameTouched: true,
        isLastNameValid: false,
        isFormValid: false,
      };
    }
    return {
      ...prevState,
      lastName: action.fieldValue,
      isLastNameTouched: true,
      isLastNameValid: true,
      isFormValid:
        prevState.isFirstNameValid &&
        prevState.isEmailValid &&
        prevState.isPhoneValid &&
        prevState.isDOBValid &&
        prevState.isGenderValid &&
        prevState.isPasswordValid &&
        prevState.isConfirmPasswordValid,
    };
  }

  if (action.type === "email") {
    if (action.fieldValue === "") {
      return {
        ...prevState,
        email: action.fieldValue,
        isEmailTouched: true,
        isEmailValid: false,
        isFormValid: false,
      };
    }
    return {
      ...prevState,
      email: action.fieldValue,
      isEmailTouched: true,
      isEmailValid: true,
      isFormValid:
        prevState.isFirstNameValid &&
        prevState.isLastNameValid &&
        prevState.isPhoneValid &&
        prevState.isDOBValid &&
        prevState.isGenderValid &&
        prevState.isPasswordValid &&
        prevState.isConfirmPasswordValid,
    };
  }

  if (action.type === "phone") {
    if (action.fieldValue === "") {
      return {
        ...prevState,
        phone: action.fieldValue,
        isPhoneTouched: true,
        isPhoneValid: false,
        isFormValid: false,
      };
    }
    return {
      ...prevState,
      phone: action.fieldValue,
      isPhoneTouched: true,
      isPhoneValid: true,
      isFormValid:
        prevState.isFirstNameValid &&
        prevState.isLastNameValid &&
        prevState.isEmailValid &&
        prevState.isDOBValid &&
        prevState.isGenderValid &&
        prevState.isPasswordValid &&
        prevState.isConfirmPasswordValid,
    };
  }

  if (action.type === "dob") {
    if (action.fieldValue === "") {
      return {
        ...prevState,
        dob: action.fieldValue,
        isDOBTouched: true,
        isDOBValid: false,
        isFormValid: false,
      };
    }
    return {
      ...prevState,
      dob: action.fieldValue,
      isDOBTouched: true,
      isDOBValid: true,
      isFormValid:
        prevState.isFirstNameValid &&
        prevState.isLastNameValid &&
        prevState.isEmailValid &&
        prevState.isPhoneValid &&
        prevState.isGenderValid &&
        prevState.isPasswordValid &&
        prevState.isConfirmPasswordValid,
    };
  }

  if (action.type === "gender") {
    if (action.fieldValue === "Gender" || action.fieldValue === "") {
      return {
        ...prevState,
        gender: action.fieldValue,
        isGenderTouched: true,
        isGenderValid: false,
        isFormValid: false,
      };
    }
    return {
      ...prevState,
      gender: action.fieldValue,
      isGenderTouched: true,
      isGenderValid: true,
      isFormValid:
        prevState.isFirstNameValid &&
        prevState.isLastNameValid &&
        prevState.isEmailValid &&
        prevState.isPhoneValid &&
        prevState.isDOBValid &&
        prevState.isPasswordValid &&
        prevState.isConfirmPasswordValid,
    };
  }

  if (action.type === "password") {
    if (action.fieldValue === "") {
      return {
        ...prevState,
        password: action.fieldValue,
        isPasswordTouched: true,
        isPasswordValid: false,
        isFormValid: false,
      };
    }
    return {
      ...prevState,
      password: action.fieldValue,
      isPasswordTouched: true,
      isPasswordValid: true,
      isFormValid:
        prevState.isFirstNameValid &&
        prevState.isLastNameValid &&
        prevState.isEmailValid &&
        prevState.isPhoneValid &&
        prevState.isDOBValid &&
        prevState.isGenderValid &&
        prevState.isConfirmPasswordValid,
    };
  }

  if (action.type === "confirmPassword") {
    if (action.fieldValue !== prevState.password) {
      return {
        ...prevState,
        confirmPassword: action.fieldValue,
        isConfirmPasswordTouched: true,
        isConfirmPasswordValid: false,
        isFormValid: false,
      };
    }
    return {
      ...prevState,
      confirmPassword: action.fieldValue,
      isConfirmPasswordTouched: true,
      isConfirmPasswordValid: true,
      isFormValid:
        prevState.isFirstNameValid &&
        prevState.isLastNameValid &&
        prevState.isEmailValid &&
        prevState.isPhoneValid &&
        prevState.isDOBValid &&
        prevState.isGenderValid &&
        prevState.isPasswordValid,
    };
  }

  if (action.type === "FORM_NOT_VALID") {
    return {
      ...prevState,
      isFirstNameTouched: true,
      isLastNameTouched: true,
      isEmailTouched: true,
      isPhoneTouched: true,
      isDOBTouched: true,
      isGenderTouched: true,
      isPasswordTouched: true,
      isConfirmPasswordTouched: true,
    };
  }
  return DEFAULT_STATE;
};

const SignupForm = (props) => {
  const [formState, dispatchState] = useReducer(reducer, DEFAULT_STATE);

  const inputChangeHandler = (e) => {
    const name = e.target.name;
    const type = e.target.type;
    const value = type === "checkbox" ? e.target.checked : e.target.value;
    dispatchState({ type: name, fieldName: name, fieldValue: value });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!formState.isFormValid) {
      return dispatchState({ type: "FORM_NOT_VALID" });
    }
    const userData = {
      firstName: formState.firstName,
      lastName: formState.lastName,
      email: formState.email,
      phone: formState.phone,
      dob : formState.dob,
      gender : formState.gender,
      password : formState.password,
      confirmPassword : formState.confirmPassword
    };
    props.dataHandler(userData);
  };

  return (
    <form className={Styles.SignupForm} onSubmit={formSubmitHandler}>
      <div className={Styles.Row}>
        <div className={Styles.Col}>
          <Input
            title="First Name"
            titleColor="whitesmoke"
            input={{
              id: "fname",
              name: "fname",
              type: "text",
              onBlur: inputChangeHandler,
              onChange: inputChangeHandler,
              value: formState.firstName,
            }}
          />
          {formState.isFirstNameTouched && !formState.isFirstNameValid && (
            <ErrorFeed>Pelase enter a valid First Name</ErrorFeed>
          )}
        </div>
        <div className={Styles.Col}>
          <Input
            title="Last Name"
            titleColor="whitesmoke"
            input={{
              id: "lname",
              name: "lname",
              type: "text",
              onBlur: inputChangeHandler,
              onChange: inputChangeHandler,
              value: formState.lastName,
            }}
          />
          {formState.isLastNameTouched && !formState.isLastNameValid && (
            <ErrorFeed>Pelase enter a valid Last Name</ErrorFeed>
          )}
        </div>
      </div>

      <div className={Styles.Row}>
        <div className={Styles.Col}>
          <Input
            title="Email"
            titleColor="whitesmoke"
            input={{
              id: "email",
              name: "email",
              type: "text",
              onBlur: inputChangeHandler,
              onChange: inputChangeHandler,
              value: formState.email,
            }}
          />
          {formState.isEmailTouched && !formState.isEmailValid && (
            <ErrorFeed>Pelase enter a valid Email</ErrorFeed>
          )}
        </div>
        <div className={Styles.Col}>
          <Input
            title="Phone"
            titleColor="whitesmoke"
            input={{
              id: "phone",
              name: "phone",
              type: "text",
              onBlur: inputChangeHandler,
              onChange: inputChangeHandler,
              value: formState.phone,
            }}
          />
          {formState.isPhoneTouched && !formState.isPhoneValid && (
            <ErrorFeed>Pelase enter a valid Phone</ErrorFeed>
          )}
        </div>
      </div>

      <div className={Styles.Row}>
        <div className={Styles.Col}>
          <Input
            title="DOB"
            titleColor="whitesmoke"
            input={{
              id: "dob",
              name: "dob",
              type: "date",
              onBlur: inputChangeHandler,
              onChange: inputChangeHandler,
              value: formState.dob,
            }}
          />
          {formState.isDOBTouched && !formState.isDOBValid && (
            <ErrorFeed>Pelase enter a valid DOB</ErrorFeed>
          )}
        </div>
        <div className={Styles.Col}>
          <SelectInput
            title="Gender"
            titleColor="whitesmoke"
            select={{
              id: "gender",
              name: "gender",
              onBlur: inputChangeHandler,
              onChange: inputChangeHandler,
              value: formState.gender,
            }}
          />
          {formState.isGenderTouched && !formState.isGenderValid && (
            <ErrorFeed>Pelase select gender</ErrorFeed>
          )}
        </div>
      </div>

      <div className={Styles.Row}>
        <div className={Styles.Col}>
          <Input
            title="Password"
            titleColor="whitesmoke"
            input={{
              id: "password",
              name: "password",
              type: "password",
              onBlur: inputChangeHandler,
              onChange: inputChangeHandler,
              value: formState.password,
            }}
          />
          {formState.isPasswordTouched && !formState.isPasswordValid && (
            <ErrorFeed>Pelase enter a valid password</ErrorFeed>
          )}
        </div>
        <div className={Styles.Col}>
          <Input
            title="Confirm-Password"
            titleColor="whitesmoke"
            input={{
              id: "confirmPassword",
              name: "confirmPassword",
              type: "password",
              onBlur: inputChangeHandler,
              onChange: inputChangeHandler,
              value: formState.confirmPassword,
            }}
          />
          {formState.isConfirmPasswordTouched &&
            !formState.isConfirmPasswordValid && (
              <ErrorFeed>Password must match</ErrorFeed>
            )}
        </div>
      </div>

      <div>
        <Button
        style={{backgroundColor : 'var(--primary-color)'}}
        >Signup</Button>
      </div>
      <div className={Styles.Actions}>
        <Link to="/login">Already have an account?</Link>
      </div>
    </form>
  );
};

export default SignupForm;
