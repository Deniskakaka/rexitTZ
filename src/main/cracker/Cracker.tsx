import React from 'react';

interface state {
    soybean: number;
    sesame: number;
    wheat: number;
    corn: number;
}

class Cracker extends React.PureComponent<any, state>{
    constructor(props) {
        super(props);
        this.state = {
            soybean: 0,
            sesame: 0,
            wheat: 0,
            corn: 100,
        },
        this.onChangeSoybean = this.onChangeSoybean.bind(this);
        this.onChangeSesame = this.onChangeSesame.bind(this);
        this.onChangeWheat = this.onChangeWheat.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState !== this.state) {
            let count = 100 - (this.state.soybean + this.state.sesame + this.state.wheat)
            count <= 0 ? this.setState({ corn: 0 }) : this.setState({ corn: count })
        }
        if(this.state.soybean + this.state.sesame + this.state.wheat > 100) {
            this.setState( {
                soybean: this.state.soybean > 0 ? this.state.soybean - 1 : 0,
                sesame: this.state.sesame > 0 ? this.state.sesame - 1 : 0,
                wheat: this.state.wheat > 0 ? this.state.wheat - 1 : 0,
            })
        }
    }
    
    onChangeSoybean(event: React.ChangeEvent<HTMLInputElement>): void | null {
        if (+event.target.value > this.state.soybean && this.state.corn === 0) return null
        this.setState({ soybean: +event.target.value })
    }

    onChangeSesame(event: React.ChangeEvent<HTMLInputElement>): void | null {
        if (+event.target.value > this.state.sesame && this.state.corn === 0) return null
        this.setState({ sesame: +event.target.value })
    }

    onChangeWheat(event: React.ChangeEvent<HTMLInputElement>): void | null {
        if (+event.target.value > this.state.wheat && this.state.corn === 0) return null
        this.setState({ wheat: +event.target.value })
    }

    onChangeCorn(event: React.ChangeEvent<HTMLInputElement>): null {
        return null;
    }

    render() {
        const whatIsIt = require('../../img/whatIsIt.png').default;
        const soybean = require('../../img/soybean.png').default;
        const sesame = require('../../img/sesame.png').default;
        const wheat = require('../../img/wheat.png').default;
        const corn = require('../../img/corn.png').default;
        const pacage = require('../../img/pacage.png').default;
        
        return (
            <section className='cracer-page'>
                <div className='cracer-page__white'>
                    <div className='cracer-page__white-about'>
                        <img src={whatIsIt} alt='whatIsIt'/>
                        <h2>About Cracker</h2>
                        <div className='cracer-page__white-about__pink'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat, 
                                sunt in culpa qui officia deserunt mollit anim id est laborum. 
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                                architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est,
                                qui dolorem ipsum quia dolor sit amet, consectetur, 
                                adipisci velit,
                                sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                            </p>
                            <span>Cracker</span>
                        </div>
                    </div>
                    <div className='cracer-page__white-constructor'>
                        <h2>Cracker constructor</h2>
                        <span>current value:143 €</span>
                        <div className='cracer-page__white-constructor__soybean'>
                            <img src={soybean} alt='soybean'/>
                            <input className='soybean' type='range' value={this.state.soybean} onChange={this.onChangeSoybean}/>
                            <span>{`${this.state.soybean}%`}</span>
                        </div>
                        <div className='cracer-page__white-constructor__sesame'>
                            <img src={sesame} alt='sesame'/>
                            <input className='seasmean' type='range' value={this.state.sesame} onChange={this.onChangeSesame}/>
                            <span>{`${this.state.sesame}%`}</span>
                        </div>
                        <div className='cracer-page__white-constructor__wheat'>
                            <img src={wheat} alt='wheat'/>
                            <input className='wheat' type='range' value={this.state.wheat} onChange={this.onChangeWheat}/>
                            <span>{`${this.state.wheat}%`}</span>
                        </div>
                        <div className='cracer-page__white-constructor__corn'>
                            <img src={corn}/>
                            <input type='range' value={this.state.corn} onChange={this.onChangeCorn}/>
                            <span>{`${this.state.corn}%`}</span>
                        </div>
                        <div className='cracer-page__white-constructor__pacage'>
                            <img src={pacage} alt='pacage'/>
                            <select>
                                <option>Choose your pack</option>
                                <option>Lorem</option>
                                <option>Lorem</option>
                            </select>
                            
                        </div>
                        <button>+</button>
                    </div>
                </div>
            </section>
        );
    }
};

export default Cracker;