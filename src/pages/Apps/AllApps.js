import React from "react";
import { Apps } from "../../modals/common.model";
import { Card, CardHeader, CardContent } from "../../components/shared";
import { useNavigate, Outlet } from "react-router-dom";
import "./AllApps.scss";

export default function AllApps() {
  const navigate = useNavigate();
  const openApp = (app) => {
    navigate(`${app.path}`);
  };

  return (
    <div className="all-apps h-100">
      {Apps.map((app, index) => (
        <Card onClick={() => openApp(app)} key={index}>
          <CardHeader title={app.name}></CardHeader>
          <CardContent>
            <div>
              <app.icon></app.icon>
            </div>
          </CardContent>
        </Card>
      ))}
      <Outlet />
    </div>
  );
}
