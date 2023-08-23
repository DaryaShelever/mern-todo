import React  from 'react'
import { BrowserRouter, Switch , Route, Link } from 'react-router-dom' 
import './AuthPage.scss'


const AuthPage = () => {
    return (
       <BrowserRouter>
            <Switch >
                <React.Fragment>
                    <div className="container">
                        <div className="auth-page">
                            <Route path='/login'>
                                <h3>Authorization</h3>
                                <form className='form form-login'>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input 
                                            type="email" 
                                            name='email'
                                            className='validate'
                                            />
                                            <label htmlFor="email">Email</label>
                                        </div>
                                        <div className="input-field col s12">
                                            <input 
                                            type="password" 
                                            name='password'
                                            className='validate'
                                            />
                                            <label htmlFor="password">Password</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <button
                                            className='wawes-effect wawes-light btn blue'>
                                            LogIn
                                        </button>
                                      
                                        <Link to="/registration" className="btn-outline btn-reg">Don't have an account?</Link>
                                    
                                    </div>
                                </form>
                            </Route>

                            <Route path='/registration'>
                                <h3>Registration</h3>
                                <form className='form form-login'>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input 
                                            type="email" 
                                            name='email'
                                            className='validate'
                                            />
                                            <label htmlFor="email">Email</label>
                                        </div>
                                        <div className="input-field col s12">
                                            <input 
                                            type="password" 
                                            name='password'
                                            className='validate'
                                            />
                                            <label htmlFor="password">Password</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <button
                                            className='wawes-effect wawes-light btn blue'>
                                            Create
                                        </button>
                                        <Link to="/login" className="btn-outline btn-reg">Already have an account?</Link>
                                    </div>
                                </form>
                            </Route>
                        </div>
                    </div>
                </React.Fragment>
            </Switch >
       </BrowserRouter>
    )
}

export default AuthPage
