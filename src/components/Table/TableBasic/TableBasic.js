import React, { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { filter } from "lodash";
import { Input } from "semantic-ui-react";
import "./TableBasic.scss";

export default function TableBasic({ columns, data }) {
  const [filterText, setFilterText] = useState("");

  const filteredItems = filter(
    data,
    (item) =>
      item.fileName &&
      item.fileName.toLowerCase().includes(filterText.toLowerCase())
  );

  const customStyles = {
    header: {
      style: {
        Height: "56px",
        padding: "0px",
      },
    },
    headRow: {
      style: {
        borderTopStyle: "solid",
        borderTopWidth: "1px",
        borderTopColor: "gray",
      },
    },
    headCells: {
      style: {
        "&:not(:last-of-type)": {
          borderRightStyle: "solid",
          borderRightWidth: "1px",
          borderRightColor: "gray",
        },
      },
    },
    cells: {
      style: {
        "&:not(:last-of-type)": {
          borderRightStyle: "solid",
          borderRightWidth: "1px",
          borderRightColor: "gray",
          fontSize: "11px",
          fontWeight: "bold",
        },
      },
    },
  };

  const subHeaderComponentMemo = useMemo(() => {
    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        filterText={filterText}
      />
    );
  }, [filterText]);

  return (
    <div className="table-basic">
      <DataTable
        subHeaderComponent={subHeaderComponentMemo}
        paginationPerPage={15}
        customStyles={customStyles}
        pagination
        columns={columns}
        data={filteredItems}
        subHeader
      />
    </div>
  );
}

const FilterComponent = ({ filterText, onFilter }) => (
  <>
    <Input
      icon="search"
      onChange={onFilter}
      value={filterText}
      palceholder="Buscar..."
    />
  </>
);
