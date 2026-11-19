import { Metadata } from "next";
import AuthLayout from "../_components/AuthLayout";
import SignupForm from "./SignupForm";

export const metadata: Metadata = {
  title: "Đăng ký tài khoản - Mua sắm Online",
  description:
    "Đăng ký tài khoản và tận hưởng ưu đãi độc quyền với giá cả hấp dẫn trên HShop",
};

export default function SignUp() {
  return (
    <AuthLayout>
      <SignupForm />
    </AuthLayout>
  );
}
