import styled from 'styled-components'

const Input = styled.input.attrs((props) => {
    const assignedProps = Object.entries(props)
    return assignedProps
})`
    box-sizing: outline-box;
    border: 0;
    border-radius: 0;
    padding: 2px 4px;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    outline: none;
    &[type='text']:focus {
    }
`

export default Input
