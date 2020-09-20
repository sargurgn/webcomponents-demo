import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PropsExample from './props-example';
import { fireEvent, render, screen } from '@testing-library/react';

Enzyme.configure({adapter: new Adapter() });

const newColor = 'blue';

describe('Testing PropsExample - Using testing-library', () => {
    let handleButtonClick;
    let onLoadChange;

    beforeEach(() => {
        handleButtonClick = jest.fn();
        onLoadChange = jest.fn();
        render(<PropsExample color="red" label="change color" printMsg={handleButtonClick} onLoadChange={onLoadChange} />).container;
    });

    it("Renders Component as expected ", () => {
        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
        expect(onLoadChange).toBeCalledTimes(1);
    });

    it("Shows default color ", () => {
        expect(screen.getByRole('textbox').value).toBe('red');
        expect(screen.getByRole('button').textContent).toBe('Click Here to change color')
        expect(screen.getByRole('button')).toBeEnabled();
    });

    it("Change to new color ", () => {
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: newColor } })
        expect(screen.getByRole('textbox').value).toBe(newColor);
        expect(onLoadChange).toBeCalledTimes(2);
    });

    it("Submit the new color ", () => {
        const input = screen.getByRole('textbox');
        const button = screen.getByRole('button');
        fireEvent.change(input, { target: { value: newColor } })
        fireEvent.click(button);
        expect(handleButtonClick).toBeCalledTimes(1);
    });
});

describe('Testing PropsExample - Using enzyme', () => {
    let wrapper;
    let handleButtonClick;
    let onLoadChange;

    beforeEach(() => {
        handleButtonClick = jest.fn();
        onLoadChange = jest.fn();
        wrapper = mount(<PropsExample color="red" label="hello" printMsg={handleButtonClick} onLoadChange={onLoadChange} />);
    })

    it('Renders component as expected', () => {
        expect(wrapper).not.toBeNull;
        expect(onLoadChange).toBeCalledTimes(1);
    })

    it('Shows default color', () => {
        expect(wrapper.find('input').instance().value).toEqual("red");
    })

    it('Change to new color', () => {
        wrapper.find('input').simulate('change', {target: {value: newColor}});
        expect(onLoadChange).toBeCalledTimes(2);
    })

    it('submit color change', () => {
        wrapper.find('input').simulate('change', {target: {value: newColor}});
        wrapper.find('button').simulate('click');
        expect(handleButtonClick).toBeCalledTimes(1);
    })
});