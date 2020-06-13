import React from 'react';

// sempre inserir dentro do component Head do 'next/head'
// always insert inside the Head component from 'next/head'

const Meta: React.FC = () => {
  return (
    <>
      <title>Cuby Digital</title>
      <meta
        name="description"
        content="Novo website da agência Cuby Digital"
      />
      <meta 
        name="viewport" 
        content="width=device-width, initial-scale=1.0" 
      />
    </>
  );
}

export default Meta;