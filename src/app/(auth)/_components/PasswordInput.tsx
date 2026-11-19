"use client";

import { useState } from "react";
import { Input } from "@/src/components/ui/input";
import { Field, FieldLabel } from "@/src/components/ui/field";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import Link from "next/link";

interface PasswordInputProps {
  id: string;
  label: string;
  forgotPassword?: boolean;
  required?: boolean;
  placeholder?: string
}

export default function PasswordInput({
  id,
  label,
  forgotPassword = false,
  placeholder,
  required = true,
}: PasswordInputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <Field>
      <div className="flex items-center">
        <FieldLabel htmlFor={id}>{label}</FieldLabel>
        {forgotPassword && (
          <Link
            href="#"
            className="ml-auto text-sm underline-offset-4 hover:underline"
          >
            Quên mật khẩu?
          </Link>
        )}
      </div>
      <div className="focus-within:border-ring focus-within:ring-ring/50 flex items-center rounded-lg border focus-within:ring-3">
        <Input
          id={id}
          name={id}
          placeholder={placeholder}
          type={isPasswordVisible ? "text" : "password"}
          required={required}
          className="border-none focus-visible:border-none focus-visible:ring-transparent"
        />
        <button
          type="button"
          className="flex w-10 cursor-pointer justify-center"
          onClick={() => setIsPasswordVisible((prev) => !prev)}
          aria-label={isPasswordVisible ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
        >
          {isPasswordVisible ? <IoEyeSharp /> : <FaEyeSlash />}
        </button>
      </div>
    </Field>
  );
}
