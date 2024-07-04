import React, { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

export default function Input({
  className,
  required,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex-1 relative">
      {required && (
        <span className="absolute top-1 right-1 text-red-500">*</span>
      )}
      <input
        type="text"
        required={required}
        className={
          className +
          " border-2 border-neutral-800 bg-dark text-neutral-300 py-3 px-4 rounded-md w-full"
        }
        {...props}
      />
    </div>
  );
}

export function InputTextarea({
  className,
  required,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div className="flex-1 relative">
      {required && (
        <span className="absolute top-1 right-1 text-red-500">*</span>
      )}
      <textarea
        required={required}
        className={
          className +
          " border-2 border-neutral-800 bg-dark text-neutral-300 py-3 px-4 rounded-md w-full resize-none min-h-40"
        }
        {...props}
      />
    </div>
  );
}
