import React from "react";
import { FiltersBar as FiltersBarStyled } from "../FiltersBar/FiltersBar.styles";
import Icon from "@mdi/react";
import { mdiTune } from "@mdi/js";

const FiltersBar: React.FC = () => {
  return (
    <FiltersBarStyled>
      <Icon className="icon" path={mdiTune} size={1} />
      <h3>Filters</h3>
    </FiltersBarStyled>
  );
};

export default FiltersBar;
