import { Metadata } from "next";
import { LoginForm } from "./LoginForm";
import AuthLayout from "../_components/AuthLayout";

export const metadata: Metadata = {
  title: "Đăng nhập tài khoản - Mua sắm Online",
  description:
    "Đăng nhập tài khoản và tận hưởng ưu đãi độc quyền với giá cả hấp dẫn trên HShop",
};

export default function Login() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
