import { useEffect, useMemo, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import MaterialReactTable from "material-react-table";
import { ListItemIcon, MenuItem } from "@mui/material";
import { Edit } from "@mui/icons-material";

export default function Kategori(props) {
  console.log(props.data);
  const [kategori, setKategori] = useState([]);

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

  return (
    <AuthenticatedLayout auth={props.auth} errors={props.errors}>
      <Head title="Kategori" />

      <div className="py-12">
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
