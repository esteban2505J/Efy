import * as React from "react";
import {
  Html,
  Button,
  Preview,
  Text,
  Hr,
  Img,
  Tailwind,
} from "@react-email/components";

export const Welcome = ({ url, username }) => {
  return (
    <Tailwind>
      <Html lang="en">
        <Preview>Estas listo para usar nuestra tienda Efy!!</Preview>
        <Container className="p-5 mb-5">
          <Section>
            <Img
              width="49"
              height="21"
              src="https://react-email-demo-ijnnx5hul-resend.vercel.app/static/linear-logo.png"
              alt="EFy logo enterprise"
            />
            <Hr />
            <Text className="font-bold">
              Gracias {username} por registrarte en nuestra tienda, ahora puedes
              comprar y disfrutar de nuestros productos.
            </Text>
            <Button
              className="w-full text-white bg-emerald-500 rounded hover:bg-emerald-700"
              href={url}
            >
              Click para entrar a la tienda
            </Button>
          </Section>
        </Container>
      </Html>
    </Tailwind>
  );
};
