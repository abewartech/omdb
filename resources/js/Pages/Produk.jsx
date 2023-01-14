import { useEffect, useMemo, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import MaterialReactTable from "material-react-table";
import { ListItemIcon, MenuItem } from "@mui/material";
import { Edit } from "@mui/icons-material";

export default function Produk(props) {
  const [produk, setProduk] = useState([]);

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
      },
    ],
    []
  );

  useEffect(() => {
    if (props.data) {
      setProduk(props.data);
    }
  });

  return (
    <AuthenticatedLayout auth={props.auth} errors={props.errors}>
      <Head title="produk" />

      <div className="py-12">
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
              renderRowActionMenuItems={({ closeMenu }) => [
                <MenuItem
                  key={0}
                  onClick={() => {
                    closeMenu();
                  }}
                  sx={{ m: 0 }}
                >
                  <ListItemIcon>
                    <Edit />
                  </ListItemIcon>
                  Edit
                </MenuItem>
              ]}
            />
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
