import React, { useState, useEffect, useCallback } from "react";
import { DataGrid } from "@material-ui/data-grid";

import { getBeers } from "../services/beerService";
import SpringModal from "./modal";

function BeerList() {
  const [beerList, setBeerList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [rowState, setRowState] = useState(false);

  const [modalData, setModalData] = useState([]);

  const fetchBeerList = useCallback(async () => {
    const { data } = await getBeers();
    const modal = [];
    const beerList = [];

    setIsLoading(true);

    for (const key in data) {
      beerList.push({
        id: data[key].id,
        name: data[key].name,
        abv: data[key].abv,
      });

      modal.push({
        ...beerList,
        tagline: data[key].tagline,
        first_brewed: data[key].first_brewed,
        description: data[key].description,
        image_url: data[key].image_url,
        food_pairing: data[key].food_pairing,
        brewers_tips: data[key].brewers_tips,
        contributed_by: data[key].contributed_by,
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
    console.log(rowParam);
    setRowState(true);
  };

  return (
    <div style={{ height: 700, width: "100%" }}>
      {rowState && (
        <SpringModal
          isOpen={rowState}
          onRowSelected={(state) => setRowState(state)}
          data={modalData}
          style={{ cursor: "pointer" }}
        />
      )}
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        loading={isLoading}
        onRowSelected={(rowParam) => handleRowClick(rowParam)}
      />
    </div>
  );
}

export default BeerList;

// const [beerList, setBeerList] = useState([]);
// const [httpError, setHttpError] = useState();
// const [isLoading, setIsLoading] = useState(false);

//   const fetchBeerListHandler = useCallback(async () => {
//     setIsLoading(true);
//     setHttpError(null);
//     try {
//       const response = await fetch(apiUrl);

//       if (!response.ok) {
//         throw new Error("Something went wrong!");
//       }

//       const data = await response.json();
//       const beerList = [];
//       for (const key in data) {
//         beerList.push({
//           id: data[key].Id,
//           Ins_Emp: data[key].Ins_Emp,
//           Up_Emp: data[key].Up_Emp,
//           Item_Code: data[key].Item_Code,
//           Item_Name: data[key].Item_Name,
//           Item_Spec: data[key].Item_Spec,
//           Remark: data[key].Remark,
//           Unit_Code: data[key].Unit_Code,
//           Up_DateTime: data[key].Up_DateTime,
//           Ins_DateTime: data[key].Ins_DateTime,
//           Use_YN: data[key].Use_YN,
//         });
//       }
//       setBeerList(beerList);
//     console.log(data)
//     } catch (error) {
//       setHttpError(error.message);
//     }
//     setIsLoading(false);
//   }, []);

//   useEffect(() => {
//     fetchBeerListHandler();
//   }, [fetchBeerListHandler]);
