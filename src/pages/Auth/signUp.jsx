import React, { useState } from 'react';
import classes from './sign.module.css'
const SignUp = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Logging in with:', formData.username, formData.password);
    } else {
      console.log('Registering with:', formData.username, formData.email, formData.password);
    }
  };

  return (
    <div className={classes.container}>
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleSubmit} className={classes.form}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
          className={classes.input}
        />
        {!isLogin && (
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className={classes.input}
          />
        )}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className={classes.input}
        />
        <button type="submit" className={classes.button}>
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>
      <p onClick={() => setIsLogin(!isLogin)} className={classes.toggle}>
        {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
      </p>
    </div>
  );
};


export default SignUp;