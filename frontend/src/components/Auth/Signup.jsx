import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import './Auth.css'; // Import the CSS file

const Signup = ({ setAlert, register, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        if (password !== password2) {
            setAlert('Passwords do not match', 'danger');
        } else {
            register({ name, email, password });
        }
    };

    if (isAuthenticated) {
        return <Redirect to="/" />;
    }

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h1 className="auth-title">Create an Account</h1>
                <p className="auth-subtitle">Start tracking your expenses today!</p>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input type="text" placeholder="Name" name="name" value={name} onChange={onChange} required />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Email" name="email" value={email} onChange={onChange} required />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Password" name="password" value={password} onChange={onChange} required />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Confirm Password" name="password2" value={password2} onChange={onChange} required />
                    </div>
                    <input type="submit" className="auth-button" value="Register" />
                </form>
                <p className="auth-link">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Signup);
