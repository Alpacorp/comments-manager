import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import { Helmet } from "react-helmet";

import { useForm } from "../../hooks/useForm";
import transformText from "../../utils/transformText";
import { validateEmail } from "../../utils/validateEmail";

import "./CreateComments.css";

const CreateComments = (): any => {
  const [formValues, handleInputChange, reset] = useForm({
    username: "",
    useremail: "",
    userweb: "",
    usercomment: "",
  });

  const { username, useremail, userweb, usercomment } = formValues;

  const commentList: string = "comments";
  let recoveredData: string | null = localStorage.getItem(commentList) || "[]";
  let data = JSON.parse(recoveredData);

  const pushComments = (formValues: any): void => {
    if (recoveredData === null) {
      localStorage.setItem("comments", JSON.stringify(formValues));
    } else {
      let newData = { ...formValues };
      data.push(newData);
      localStorage.setItem(commentList, JSON.stringify(data));
    }
  };

  const handleSubmit = (event: any): void => {
    event.preventDefault();
    if (validateEmail(useremail)) {
      alert(
        "El email registrado ya existe y no puedes generar más comentarios"
      );
    } else {
      pushComments(formValues);
      reset();
      alert(
        "Comentario enviado exitosamente, puedes verlo en la pestña 'Lista Comentarios'"
      );
    }
  };

  return (
    <section className="create-form" onSubmit={handleSubmit}>
      <Helmet>
        <title>Create Comments Page</title>
        <meta name="description" content="Create Comments Page" />
      </Helmet>
      <h1>Crear Comentario</h1>
      <form>
        <TextField
          id="username"
          name="username"
          label="Nombre"
          value={transformText(username)}
          helperText="Digita tu nombre completo"
          type="text"
          size="small"
          onChange={handleInputChange}
          required
        />
        <TextField
          id="useremail"
          name="useremail"
          label="Email"
          value={useremail}
          helperText="Digita tu email"
          type="email"
          size="small"
          onChange={handleInputChange}
          required
        />
        <TextField
          id="userweb"
          name="userweb"
          label="Página Web"
          value={userweb}
          helperText="Digita la url de tu página web"
          type="url"
          size="small"
          onChange={handleInputChange}
          required
        />
        <label className="label-textarea">Comentario</label>
        <TextareaAutosize
          id="usercomment"
          className="textarea-zone"
          name="usercomment"
          aria-label="comentario"
          placeholder="Escríbe tu comentario"
          value={usercomment}
          onChange={handleInputChange}
          required
          maxRows={3}
          maxLength={100}
        />
        <Button variant="contained" color="primary" type="submit">
          Guardar
        </Button>
      </form>
    </section>
  );
};

export default CreateComments;
