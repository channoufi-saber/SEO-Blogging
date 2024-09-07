


import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import Link from 'next/link';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { authenticate, isAuth, loginWithGoogle } from '../../actions/auth';
import { GOOGLE_CLIENT_ID } from '../../config';


const LoginGoogle = () => {
	const credentialResponse = response => {
		console.log(response);
		const credential = response.credential;
		const user = { credential };

		loginWithGoogle(user).then(data => {
			if (data.error) {
				console.log(data.error);
			} else {
				authenticate(data, () => {
					if (isAuth() && isAuth().role === 1) {
						Router.push(`/admin`);
					} else {
						Router.push(`/user`);
					}
				});
			}
		});
	};

	return (
		<div className="pb-3">
			<GoogleOAuthProvider clientId={`${GOOGLE_CLIENT_ID}`}>


				<GoogleLogin
					onSuccess={credentialResponse}
					onError={() => {
						console.log('Login Failed');
					}}
				/>

			</GoogleOAuthProvider>

		</div>
	);
};

export default LoginGoogle;


