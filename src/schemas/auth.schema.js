import { z } from "zod";

export const registerSchema = z.object({
  fullName: z.string({
    required_error: "Username is required",
  }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      required_error: "Invalid email",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(8, { required_error: "Password must be  at least 8 characters" })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~]).*$/,
      "Password must contain at least one capital letter and one number and one especial character"
    ),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      required_error: "Invalid email",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, { required_error: "Password must be  at least 6 characters" })
    .regex(
      /^(?=.*[A-Z])(?=.*\d).*$/,
      "Password must contain at least one capital letter and one number"
    ),
});
