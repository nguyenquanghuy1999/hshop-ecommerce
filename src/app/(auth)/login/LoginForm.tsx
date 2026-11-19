import { cn } from "cn";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/src/components/ui/field";
import { Input } from "@/src/components/ui/input";
import Link from "next/link";
import AuthCard from "../_components/AuthCard";
import { AuthSubmitButton } from "../_components/AuthSubmitButton";
import AuthTerms from "../_components/AuthTerms";
import { GoogleAuthButton } from "../_components/GoogleAuthButton";
import PasswordInput from "../_components/PasswordInput";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <AuthCard title="Đăng nhập">
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
              forgotPassword
            />
            <AuthSubmitButton>Đăng nhập</AuthSubmitButton>
            <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
              Hoặc
            </FieldSeparator>
            <GoogleAuthButton />
            <AuthTerms />
            <Field>
              <FieldDescription className="text-center">
                Bạn chưa có tài khoản?{" "}
                <Link href="/signup" className="text-primary no-underline!">
                  Đăng ký ngay
                </Link>
              </FieldDescription>
            </Field>
          </FieldGroup>
        </form>
      </AuthCard>
    </div>
  );
}
