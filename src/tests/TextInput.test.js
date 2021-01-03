import React from "react";
import {act, fireEvent, render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TextInput from "../components/Atoms/TextInput/TextInput";


test('Should render TextInput', () => {
    const {getByDisplayValue} = render(<TextInput onChange={() => 'test'} type={'text'} name={'test'} defaultValue={'Test'}/>)
    expect(getByDisplayValue('Test')).toBeInTheDocument()
});

test('Should enter text into the text input', () => {
    let result = null;
    const {getByDisplayValue} = render(<TextInput onChange={e => result = e.target.value} type={'text'} name={'Test'} defaultValue={'Input'}/>)
    const input = getByDisplayValue('Input');
    act(() => {
        fireEvent.change(input, {target: {value: 'Success message'}})
    })
    expect(result).toBe('Success message');
})