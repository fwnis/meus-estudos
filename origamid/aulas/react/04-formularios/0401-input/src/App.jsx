import React from "react";

// const App = () => {
//   const [nome, setNome] = React.useState("");
//   const [email, setEmail] = React.useState("");

//   function handleSubmit(event) {
//     event.preventDefault();
//     console.log(event);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="nome">Nome</label>
//       <input
//         id="nome"
//         type="text"
//         name="nome"
//         value={nome}
//         onChange={(event) => setNome(event.target.value)}
//       />
//       <label htmlFor="email">Email</label>
//       <input
//         id="email"
//         type="email"
//         name="email"
//         value={email}
//         onChange={(event) => setEmail(event.target.value)}
//       />
//       <button>Enviar</button>
//     </form>
//   );
// };

// const App = () => {
//   const [form, setForm] = React.useState({
//     nome: "",
//     email: "",
//   });

//   function handleSubmit(event) {
//     event.preventDefault();
//     console.log(event);
//   }

//   function handleChange({ target }) {
//     const { id, value } = target;
//     setForm({...form, [id]: value });
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="nome">Nome</label>
//       <input
//         id="nome"
//         type="text"
//         name="nome"
//         value={form.nome}
//         onChange={handleChange}
//       />
//       <label htmlFor="email">Email</label>
//       <input
//         id="email"
//         type="email"
//         name="email"
//         value={form.email}
//         onChange={handleChange}
//       />
//       <button>Enviar</button>
//     </form>
//   );
// };

const App = () => {
  const formFields = [
    {
      id: "nome",
      label: "Nome",
      type: "text",
    },
    {
      id: "email",
      label: "Email",
      type: "email",
    },
    {
      id: "senha",
      label: "Senha",
      type: "password",
    },
    {
      id: "cep",
      label: "Cep",
      type: "text",
    },
    {
      id: "rua",
      label: "Rua",
      type: "text",
    },
    {
      id: "numero",
      label: "Número",
      type: "text",
    },
    {
      id: "bairro",
      label: "Bairro",
      type: "text",
    },
    {
      id: "cidade",
      label: "Cidade",
      type: "text",
    },
    {
      id: "estado",
      label: "Estado",
      type: "text",
    },
  ];

  const [form, setForm] = React.useState(
    formFields.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: "",
      };
    }, {})
  );

  const [response, setResponse] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://ranekapi.origamid.dev/json/api/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // form é o objeto com os dados do formulário
      body: JSON.stringify(form),
    }).then((response) => {
      setResponse(response);
    });
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map(({ id, label, type }) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input id={id} type={type} value={form[id]} onChange={handleChange} />
        </div>
      ))}
      {response && response.ok && <p>Usuário Criado</p>}
      <button>Enviar</button>
    </form>
  );
};

export default App;
