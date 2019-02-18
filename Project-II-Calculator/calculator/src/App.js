import React from 'react';
import './App.css';
import CalcDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import OperatorButton from './components/ButtonComponents/OperatorButton';


const App = () => {
  return (
    <div className="calcPackage">
        <CalcDisplay />
        <ButtonContainer className="topRow">
            <ActionButton className="actionB" text="clear" />
            <OperatorButton colors="ops" text="fas fa-divide" />
        </ButtonContainer>
        <ButtonContainer className="secondRow">
            <NumberButton colors="nums" text="7" />
            <NumberButton colors="nums" text="8" />
            <NumberButton colors="nums" text="9" />
            <OperatorButton colors="ops" text="fas fa-times" />
        </ButtonContainer>
        <ButtonContainer className="thirdRow">
            <NumberButton colors="nums" text="4" />
            <NumberButton colors="nums" text="5" />
            <NumberButton colors="nums" text="6" />
            <OperatorButton colors="ops" text="fas fa-minus" />
        </ButtonContainer>
        <ButtonContainer className="thirdRow">
            <NumberButton colors="nums" text="1" />
            <NumberButton colors="nums" text="2" />
            <NumberButton colors="nums" text="3" />
            <OperatorButton colors="ops" text="fas fa-plus" />
        </ButtonContainer>
        <ButtonContainer className="bottomRow">
            <ActionButton className="actionB" text="0" />
            <OperatorButton colors="ops" text="fas fa-equals" />
        </ButtonContainer>
    </div>
  );
};

export default App;
