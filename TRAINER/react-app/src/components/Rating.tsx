import React from 'react';

interface IRatingProps {
    starsAmount: number;
}

export const Rating = (properties: IRatingProps) => {
    return (
        <> {/* Ein leeres JSX-Element ist auch als Elternelement für Template möglich */}
            <div>
                {'*'.repeat(properties.starsAmount)}
            </div>
            <label htmlFor="amountInp">Geben Sie neue Zahl von Sternen an: </label>
            <input id="amountInp" type="text" />
        </>
    )
}

/* interface IRating2State {
    newStarsAmount: number
} */
export class Rating2 extends React.Component<IRatingProps, {newStarsAmount: number}> {
    constructor(props: IRatingProps) {
        super(props);
        this.state = {
            newStarsAmount: this.props.starsAmount
        }
    }
    handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        this.setState(prevState => {
            console.log(prevState);
            return {newStarsAmount: Number(ev.target.value)}
        })
        console.log('this.state :>> ', this.state);
    }
    render(){
        return (
            <>
                <div>this.props: {'*'.repeat(this.props.starsAmount)}</div>
                <div>this.state: {'*'.repeat(this.state.newStarsAmount)}</div>
                <label htmlFor="amountInp">Geben Sie neue Zahl von Sternen an: </label>
                <input id="amountInp" type="number" placeholder={String(this.props.starsAmount)}
                onChange={this.handleChange}/>
            </>)
    }
}