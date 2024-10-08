import Link from "next/link";
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { authenticate, isAuth, signin } from '../../actions/auth';
import LoginGoogle from "./LoginGoogle";

const SigninComponent = () => {
	const [values, setValues] = useState({

		email: '',
		password: '',
		error: '',
		loading: false,
		message: '',
		showForm: true
	});

	const { email, password, error, loading, message, showForm } = values;
	useEffect(() => {
		isAuth() && Router.push(`/`);
	}, []);
	const handleSubmit = e => {
		e.preventDefault();
		setValues({ ...values, loading: true, error: false });
		const user = { email, password }
		signin(user).then(data => {
			if (data.error) {
				setValues({ ...values, error: data.error, loading: false });
				console.log(data.error)
			} else {
				authenticate(data, () => {
					if (isAuth() && isAuth().role === 1) {
						Router.push(`/admin`)
					} else {
						Router.push(`/user`)
					}
					
				})
			}
		})


	}

	const handleChange = name => e => {
		setValues({ ...values, error: false, [name]: e.target.value })
	}
	const showLoading = () => (loading ? <div className="alert alert-info">Loading...</div> : '')
	const showError = () => (error ? <div className="alert alert-danger">{typeof error === 'string' ? error : error[0].msg}</div> : '')
	const showMessage = () => (message ? <div className="alert alert-info">{message}</div> : '')

	const signinForm = () => {
		return (
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<input
						value={email} 
						onChange={handleChange('email')}
						type="email"
						className="form-control"
						placeholder="Type your email"
					/>
				</div>
				<div className="form-group">
					<input
						value={password} 
						onChange={handleChange('password')}
						type="password"
						className="form-control"
						placeholder="Type your password"
					/>
				</div>
				<div>
					<button className="btn btn-primary">Signin</button>
				</div>
			</form>

		)

	}

	return (
		<>
			{showError()}
			{showLoading()}
			{showMessage()}
			<LoginGoogle />
			{signinForm && signinForm()}
			<br />
			<Link href="/auth/password/forgot">
				<a className='btn btn-outline-danger btn-sm'>Forgot password</a>
			</Link>
		</>
	)
}

export default SigninComponent;
