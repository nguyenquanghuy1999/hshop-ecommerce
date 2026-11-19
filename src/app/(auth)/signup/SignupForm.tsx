import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/src/components/ui/field";
import AuthCard from "../_components/AuthCard";
import { Input } from "@/src/components/ui/input";
import PasswordInput from "../_components/PasswordInput";
import { AuthSubmitButton } from "../_components/AuthSubmitButton";
import { GoogleAuthButton } from "../_components/GoogleAuthButton";
import AuthTerms from "../_components/AuthTerms";
import Link from "next/link";

export default function SignupForm() {
  return (
    <div className="flex flex-col gap-6">
      <AuthCard title="Đăng ký">
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="username">Tên đăng nhập</FieldLabel>
              <Input
                id="username"
                type="text"
                placeholder="Nhập tên đăng nhập"
                required
              />
            </Field>
            <PasswordInput
              id="password"
              label="Mật khẩu"
              placeholder="Nhập mật khẩu của bạn"
            />
            <PasswordInput
              id="confirm_password"
              label="Nhập lại mật khẩu"
              placeholder="Nhập lại mật khẩu của bạn"
            />
            <AuthSubmitButton>Đăng ký</AuthSubmitButton>
            <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
              Hoặc
            </FieldSeparator>
            <GoogleAuthButton />
            <AuthTerms />
            <Field>
              <FieldDescription className="text-center">
                Bạn đã có tài khoản?{" "}
                <Link href="/login" className="text-primary no-underline!">
                  Đăng nhập
                </Link>
              </FieldDescription>
            </Field>
          </FieldGroup>
        </form>
      </AuthCard>
    </div>
  );
}
