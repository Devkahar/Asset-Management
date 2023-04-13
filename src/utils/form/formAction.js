import { clientAction } from "../client";
import Icons from "../iconPath";

export const actions = {
  edit: {
    placeholder: "edit",
    actionType: clientAction.putClient,
    title: "Edit",
    icon: Icons.edit,
  },
  delete: {
    placeholder: "delete",
    actionType: clientAction.deleteClient,
    title: "Delete",
    icon: Icons.delete,
  },
  add: {
    placeholder: "add",
    actionType: clientAction.postClient,
    title: "Add",
    icon: Icons.plus,
  },
  update: {
    placeholder: "update",
    actionType: clientAction.patchClient,
    title: "Update",
    icon: Icons.edit,
  },
};
