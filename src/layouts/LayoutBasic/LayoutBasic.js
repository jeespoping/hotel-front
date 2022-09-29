import React from "react";
import TopBar from "../../components/TopBar";
import DashboardRoutes from "../../routes/DashboardRoutes";
import MenuLeft from "../../components/MenuLeft";
import { Grid } from "semantic-ui-react";
import "./LayoutBasic.scss";

export default function LayoutBasic() {
  return (
    <Grid className="layout-basic">
      <Grid.Row>
        <Grid.Column width={3}>
          <MenuLeft />
        </Grid.Column>
        <Grid.Column className="content" width={13}>
          <TopBar />
          <DashboardRoutes />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
