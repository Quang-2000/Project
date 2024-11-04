import React from "react";

const RegisterPage = () => {
  return (
    <div className="register">
      <h2>Đăng Ký tài khoản</h2>
      <form action="">
        <input type="text" placeholder="Tên đăng nhập" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Mật khẩu" required />
        <button type="submit">Đăng Ký</button>
        <p>
          Đã có tài khoản? <a href="/">Đăng Nhập</a>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
