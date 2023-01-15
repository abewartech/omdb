import { useEffect, useMemo, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import { useFormik } from "formik";
import MaterialReactTable from "material-react-table";
import {
  ListItemIcon,
  MenuItem,
  Button,
  Modal,
  TextField,
  Box
} from "@mui/material";
import axios from "axios";
import { Delete, Edit } from "@mui/icons-material";

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

export default function Kategori(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [open, setOpen] = useState(false);
  const [kategori, setKategori] = useState([]);

  const formik = useFormik({
    initialValues: {
      id: null,
      name: ""
    },
    onSubmit: values => {
      if (isEdit) {
        axios.post("/api/editkategori", values).then(response => {
          if (response.data.success) {
            window.location.reload();
          }
        });
      } else {
        axios.post("/api/kategori", values).then(response => {
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
        accessorKey: "id",
        header: "ID"
      },
      {
        accessorKey: "name",
        header: "Name"
      }
    ],
    []
  );

  useEffect(() => {
    if (props.data) {
      setKategori(props.data);
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
    axios.delete(`/api/kategori/${data.original.id}`).then(response => {
      if (response.data.success) {
        window.location.reload();
      }
    });
  };

  return (
    <AuthenticatedLayout auth={props.auth} errors={props.errors}>
      <Head title="Kategori" />
      <div className="py-12">
        <div className="flex flex-row-reverse">
          <div className="basis-1/5 mb-5">
            <Button variant="contained" onClick={handleOpen}>
              Add Kategori
            </Button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <MaterialReactTable
              columns={columns}
              data={kategori}
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
          <Button type="submit">Submit</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </Box>
      </Modal>
    </AuthenticatedLayout>
  );
}
