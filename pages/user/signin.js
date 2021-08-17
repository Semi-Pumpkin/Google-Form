import React, { useState, } from "react"
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from 'next/router';
import { signin } from '../../src/reducers/userlist';

const Signin = () => {

  const router = useRouter()
  const dispatch = useDispatch();

  const moveToLogin = (e) => {
    router.push("/user/login");
  }


  const [textState1, setTextState1] = useState("ID");
  const [textState2, setTextState2] = useState("PW");
  const [checkState, setCheckState] = useState(false);
  const [selectState, setSelectState] = useState('blank');
  const [radioState, setRadioState] = useState('Male');

  const options = [
    {
      view: "M",
      value: 'Male',
    },
    {
      view: "F",
      value: 'Female',
    },

  ]

  const onTextareaChange1 = (evt) => {
    setTextState1(evt.target.value);
  }

  const onTextareaChange2 = (evt) => {
    setTextState2(evt.target.value);
  }

  const onCheckboxChange = (evt) => {
    setCheckState(evt.target.checked);
  }


  const onSelectChange = (evt) => {
    setSelectState(evt.target.value);
    if (evt.target.value === 'blank') {
      alert("Choose Grade");
    }
  }

  const onRadioChange = (evt) => {
    setRadioState(evt.target.value);
  }

  const validateUser = useSelector(state => state.userlist);

  const onSubmitChange = (evt) => {

    if (selectState === 'blank') {
      alert("Choose Grade");
    } else if (textState2.length < 6) {
      alert("Password is too short");
    } else if (checkState === false) {
      alert('Check Agree to Private Policy')
    } else {
      dispatch(signin(textState1, textState2));
    }
  }




  return (
    <div className="signin">
      <textarea
        onChange={onTextareaChange1}
        className="id"
        value={textState1} style={{ width: 200, height: 30, border: '1px solid black' }} />

      <textarea
        onChange={onTextareaChange2}
        className="password"
        value={textState2} style={{ width: 200, height: 30, border: '1px solid black' }} />

      <br />

      <span>개인정보 이용에 동의합니까?</span>
      <input type="checkbox"
        defaultChecked={checkState}
        onChange={onCheckboxChange}
      />

      <br />
      <span>학년을 선택하세요</span>
      <select name="grade" onChange={onSelectChange} value={selectState}>
        <option value="blank"></option>
        <option value="freshman">Freshman</option>
        <option value="sophomore" >Sophomore</option>
        <option value="junior">Junior</option>
        <option value="senior">Senior</option>
      </select>

      <br />
      <span>성별을 선택하세요</span>
      <div onChange={onRadioChange}>
        {
          options.map((option, index) => {
            return <>
              <input type="radio" value={option.value} name="gender"
                defaultChecked={option.value === radioState ? true : false} />
              {option.view
              }</>
          })
        }
      </div>

      <button onClick={onSubmitChange}> Sign In </button>

      <button onClick={moveToLogin}> Log In </button>



    </div>

    




  )
}

export default Signin;