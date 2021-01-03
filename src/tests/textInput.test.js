import React from "react";
import {render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TextInput from "../components/Atoms/TextInput/TextInput";


test('Should render TextInput', () => {
    const {getByDisplayValue} = render(<TextInput onChange={() => 'test'} type={'text'} name={'test'} defaultValue={'Test'}/>)
    expect(getByDisplayValue('Test')).toBeInTheDocument()
});