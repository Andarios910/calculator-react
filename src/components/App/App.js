import React from 'react'
import { useState } from 'react'
import Button from '../Button/Button';

import './App.css'

export default function App() {
    const [value, setValue] = useState("0");
    const [memory, setMemory] = useState(null);
    const [operator, setOperator] = useState(null);

    const handleButtonPress = content => () => {
        const num = parseFloat(value);
        if (content === "AC") {
            setValue("0");
            setMemory(null);
            setOperator(null)
            return;
        }
        
        if (content === '+') {
            setMemory(parseFloat(value));
            setValue("0");
            return
        }

        if (content === '-') {
            setMemory(parseFloat(value));
            setValue("0");
            return
        }

        if (content === 'x') {
            setMemory(parseFloat(value));
            setValue("0");
            return
        }

        if (content === '/') {
            setMemory(parseFloat(value));
            setValue("0");
            return
        }

        if (content === '=') {

            setMemory(null);
            return;
        }


        setValue(parseFloat(num + content).toString());
    };

    return (
        <div className='App'>
            <div className="content">
                <div className="display">{value}</div>
                <div className="buttons">
                    <Button onButtonClick={handleButtonPress} content='AC' type='function' />
                    <Button onButtonClick={handleButtonPress} content='+/-' type='function' />
                    <Button onButtonClick={handleButtonPress} content='%' type='function' />
                    <Button onButtonClick={handleButtonPress} content='/' type='operator' />
                    <Button onButtonClick={handleButtonPress} content='7' />
                    <Button onButtonClick={handleButtonPress} content='8' />
                    <Button onButtonClick={handleButtonPress} content='9' />
                    <Button onButtonClick={handleButtonPress} content='x' type='operator' />
                    <Button onButtonClick={handleButtonPress} content='4' />
                    <Button onButtonClick={handleButtonPress} content='5' />
                    <Button onButtonClick={handleButtonPress} content='6' />
                    <Button onButtonClick={handleButtonPress} content='-' type='operator' />
                    <Button onButtonClick={handleButtonPress} content='1' />
                    <Button onButtonClick={handleButtonPress} content='2' />
                    <Button onButtonClick={handleButtonPress} content='3' />
                    <Button onButtonClick={handleButtonPress} content='+' type='operator' />
                    <Button onButtonClick={handleButtonPress} content='0' />
                    <Button onButtonClick={handleButtonPress} content='.' />
                    <Button onButtonClick={handleButtonPress} content='=' type='operator' />
                </div>
            </div>
        </div>
    )
}
