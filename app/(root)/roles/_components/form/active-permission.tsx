import React from "react";

type Props = {
  roleId: string;
};

function ActivePermission({ roleId }: Props) {
  return <div>ActivePermission for role {roleId}</div>;
}

export default ActivePermission;
