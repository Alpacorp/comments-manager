import MaterialTable from "@material-table/core";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "./TableComments.css";

const TableComments = () => {
  const [data, setData] = useState([]);
  const columns: any = [
    { title: "Nombre", field: "username", type: "string" },
    { title: "Email", field: "useremail", type: "string" },
    { title: "Página Web", field: "userweb", type: "string" },
    { title: "Comentario", field: "usercomment", type: "string" },
  ];

  const getComments = (): void => {
    const comments: any | null = JSON.parse(
      localStorage.getItem("comments") || "[]"
    );
    setData(comments);
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <section className="comments-table">
      <Helmet>
        <title>Table Comments View</title>
        <meta name="description" content="Table Comments View" />
      </Helmet>
      <MaterialTable
        title="Tabla de Comentarios"
        columns={columns}
        data={data}
        editable={{
          onRowUpdate: (newData: never, oldData: any) =>
            new Promise((resolve: any, reject): void => {
              setTimeout(() => {
                const dataUpdate: never[] = [...data];
                const index: any = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);
                localStorage.setItem("comments", JSON.stringify(dataUpdate));
                resolve();
                alert("Comentario actualizado con éxito");
              }, 1000);
            }),
        }}
      />
    </section>
  );
};

export default TableComments;
