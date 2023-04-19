import { clientAction } from "../constants";
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
  search: {
    placeholder: "search",
    actionType: clientAction.postClient,
    title: "Update",
    icon: Icons.search,
  },
  schedule: {
    placeholder: "schedule",
    actionType: clientAction.postClient,
    title: "Add",
    icon: Icons.calender,
  },
};
