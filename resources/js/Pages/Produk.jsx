import { useEffect, useMemo, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import MaterialReactTable from "material-react-table";
import { useFormik } from "formik";
import {
  ListItemIcon,
  MenuItem,
  Button,
  Modal,
  TextField,
  Box
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

export default function Produk(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [open, setOpen] = useState(false);
  const [produk, setProduk] = useState([]);

  const formik = useFormik({
    initialValues: {
      id: null,
      name: "",
      code: "",
      kategori: "",
      foto: ""
    },
    onSubmit: values => {
      if (isEdit) {
        axios.post("/api/editproduk", values).then(response => {
          if (response.data.success) {
            window.location.reload();
          }
        });
      } else {
        axios.post("/api/produk", values).then(response => {
          if (response.data.success) {
            window.location.reload();
          }
        });
      }
    }
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const columns = useMemo(
    () => [
      {
        accessorKey: "kode",
        header: "Kode"
      },
      {
        accessorKey: "name",
        header: "Name"
      },
      {
        accessorKey: "id_kategori",
        header: "Kategori"
      },
      {
        accessorKey: "foto",
        header: "Foto"
      }
    ],
    []
  );

  useEffect(() => {
    if (props.data) {
      setProduk(props.data);
    }
  });

  const handleEdit = (closeMenu, data) => {
    closeMenu();
    handleOpen();
    formik.setFieldValue("id", data.original.id);
    formik.setFieldValue("name", data.original.name);
    setIsEdit(true);
  };

  const handleDelete = (closeMenu, data) => {
    closeMenu();
    axios.delete(`/api/produk/${data.original.id}`).then(response => {
      if (response.data.success) {
        window.location.reload();
      }
    });
  };

  return (
    <AuthenticatedLayout auth={props.auth} errors={props.errors}>
      <Head title="produk" />

      <div className="py-12">
        <div className="flex flex-row-reverse">
          <div className="basis-1/5 mb-5">
            <Button variant="contained" onClick={handleOpen}>
              Add Produk
            </Button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <MaterialReactTable
              columns={columns}
              data={produk}
              enableRowActions
              muiTablePaginationProps={{
                rowsPerPageOptions: [5, 10, 15]
              }}
              initialState={{
                pagination: { pageSize: 5 }
              }}
              renderRowActionMenuItems={({ closeMenu, row }) => [
                <MenuItem
                  key={0}
                  onClick={() => {
                    handleEdit(closeMenu, row);
                  }}
                  sx={{ m: 0 }}
                >
                  <ListItemIcon>
                    <Edit />
                  </ListItemIcon>
                  Edit
                </MenuItem>,
                <MenuItem
                  key={0}
                  onClick={() => {
                    handleDelete(closeMenu, row);
                  }}
                  sx={{ m: 0 }}
                >
                  <ListItemIcon>
                    <Delete />
                  </ListItemIcon>
                  Delete
                </MenuItem>
              ]}
            />
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={formik.handleSubmit}
        >
          <input type="hidden" name="id" value={formik.values.id} />
          <TextField
            required
            label="Name"
            name="name"
            fullWidth
            onChange={formik.handleChange}
            value={formik.values.name}
            className="my-5"
          />
          <TextField
            required
            label="code"
            name="code"
            fullWidth
            onChange={formik.handleChange}
            value={formik.values.code}
            className="my-5"
          />
          <TextField
            required
            label="kategori"
            name="kategori"
            fullWidth
            onChange={formik.handleChange}
            value={formik.values.kategori}
            className="my-5"
          />
          <TextField
            required
            label="foto"
            name="foto"
            fullWidth
            onChange={formik.handleChange}
            value={formik.values.foto}
            className="my-5"
          />
          <Button type="submit">Submit</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </Box>
      </Modal>
    </AuthenticatedLayout>
  );
}
