import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import DashboardRoutes from "../../routes/DashboardRoutes";
import "./LayoutBasic.scss";

export default function LayoutBasic() {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={3}>
          <h1>Menu left</h1>
        </Grid.Column>
        <Grid.Column className="content" width={13}>
          <h1>Top bar</h1>
          <DashboardRoutes />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
