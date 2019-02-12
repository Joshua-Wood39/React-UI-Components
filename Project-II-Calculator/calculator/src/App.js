import React from 'react';
import './App.css';
import CalcDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';


const App = () => {
  return (
    <div className="calcPackage">
        <CalcDisplay />
        <ButtonContainer className="topRow">
            <ActionButton className="actionB" text="clear" />
            <NumberButton colors="ops" text="/" />
        </ButtonContainer>
        <ButtonContainer className="secondRow">
            <NumberButton colors="nums" text="7" />
            <NumberButton colors="nums" text="8" />
            <NumberButton colors="nums" text="9" />
            <NumberButton colors="ops" text="X" />
        </ButtonContainer>
        <ButtonContainer className="thirdRow">
            <NumberButton colors="nums" text="4" />
            <NumberButton colors="nums" text="5" />
            <NumberButton colors="nums" text="6" />
            <NumberButton colors="ops" text="-" />
        </ButtonContainer>
        <ButtonContainer className="thirdRow">
            <NumberButton colors="nums" text="1" />
            <NumberButton colors="nums" text="2" />
            <NumberButton colors="nums" text="3" />
            <NumberButton colors="ops" text="+" />
        </ButtonContainer>
        <ButtonContainer className="bottomRow">
            <ActionButton className="actionB" text="0" />
            <NumberButton colors="ops" text="=" />
        </ButtonContainer>
    </div>
  );
};

let divide = '<i class="fas fa-divide"></i>';

export default App;
