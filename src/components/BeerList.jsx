import React, { useState, useEffect, useCallback } from "react";
import { DataGrid } from "@material-ui/data-grid";

import { getBeers } from "../services/beerService";
import SpringModal from "../components/Modal";

function BeerList() {
  const [beerList, setBeerList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [rowState, setRowState] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState({});

  const [modalData, setModalData] = useState([]);

  const fetchBeerList = useCallback(async () => {
    const { data } = await getBeers();
    const modal = [];
    const beerList = [];

    setIsLoading(true);

    for (const key in data) {
      const {
        id,
        name,
        abv,
        tagline,
        first_brewed,
        description,
        image_url,
        food_pairing,
        brewers_tips,
        contributed_by,
        ph,
      } = data[key];

      beerList.push({
        id: id,
        Name: name,
        ABV: abv,
        pH: ph,
        Brewed: first_brewed,
      });

      modal.push({
        id: id,
        name: name,
        abv: abv,
        tagline: tagline,
        first_brewed: first_brewed,
        description: description,
        image_url: image_url,
        food_pairing: food_pairing + " ,",
        brewers_tips: brewers_tips,
        contributed_by: contributed_by,
      });
    }
    setModalData(modal);
    setBeerList(beerList);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchBeerList();
  }, [fetchBeerList]);

  let columns = [];
  let rows = [];

  if (beerList.length > 0) {
    const keys = Object.keys(beerList?.[0]);
    columns = keys?.map((_, index) => {
      const attributes = {
        field: keys[index],
        width: 150,
      };
      return {
        ...attributes,
      };
    });
    rows = beerList?.map((value, index) => {
      return {
        ...value,
      };
    });
  }

  const handleRowClick = (rowParam) => {
    const selectedRowId = rowParam.data.id;
    const selectedRowData = modalData[selectedRowId - 1];
    setSelectedRowData(selectedRowData);
    setRowState(true);
  };

  return (
    <div style={{ height: 700, width: "100vw" }}>
      {rowState && (
        <SpringModal
          isOpen={rowState}
          onRowSelected={(state) => setRowState(state)}
          selectedData={selectedRowData}
          style={{ cursor: "pointer" }}
          checkboxSelection={false}
        />
      )}
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        loading={isLoading}
        onRowSelected={(rowParam) => handleRowClick(rowParam)}
        checkboxSelection={true}
      />
    </div>
  );
}

export default BeerList;
