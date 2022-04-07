import { Box } from "@mui/material";

const CreateComments = () => {
  return (
    <>
      <section>
        <h1>Create Comments</h1>
        {/* <Box className="create-form" sx={{ width: "100%" }}> */}
        <form>
          <label>
            <span>Nombre</span>
            <input type="text" />
          </label>
          <label>
            <span>Correo Electrónico</span>
            <input type="text" />
          </label>
          <label>
            <span>Página Web</span>
            <input type="text" />
          </label>
          <label>
            <span>Comentario</span>
            <textarea />
          </label>
          <button>Enviar</button>
        </form>
        {/* </Box> */}
      </section>
    </>
  );
};

export default CreateComments;
