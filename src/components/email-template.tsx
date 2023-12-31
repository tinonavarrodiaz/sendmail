import * as React from 'react';

interface EmailTemplateProps {
  name: any;
  email: any;
  phone: any;
  msg: any;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,email,phone, msg,
}) => (
  <div>
    <h1>Correo Recibido desde tinonavarro.nh-digital.dev</h1>
    <p>Nombre: {name}</p>
    <p>Email: {email}</p>
    <p>Teléfono: {phone}</p>
    <p>Mensaje: {msg}</p>
  </div>
);
