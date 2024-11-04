import React from "react";

const LoginPage = () => {
  return (
    <div className="login">
      <h2>Đăng Nhập</h2>
      <form action="">
        <input type="text" placeholder="Tên đăng nhập" required />
        <input type="password" placeholder="Mật khẩu" required />
        <button type="submit">Đăng Nhập</button>
        <p>
          Bạn chưa có tài khoản ? <a href="/register">Đăng Ký</a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
