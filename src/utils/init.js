import {
  Button,
  Spin,
  Input,
  Alert,
  Icon,
  Tabs,
  Dropdown,
  Upload,
  Form,
  Modal,
  Result,
  Skeleton,
  Avatar,
  Popover,
  Table,
  Drawer,
  Select,
  DatePicker,
  message,
  Pagination,
} from "ant-design-vue/lib";
import UUID from "vue-uuid";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faCircleUser,
  faUser,
  faEllipsisH,
  faBookBookmark,
  faEnvelope,
  faFlag,
  faHouse,
  faHashtag,
  faHeart,
  faList,
  faBell,
  faGear,
  faRetweet,
  faFilm,
  faSmile,
  faReply,
  faStar,
  faAngleDown,
  faPlus,
  faCheck,
  faChartBar,
  faImage,
  faEnvelopeOpen,
  faKey,
  faXmark,
  faArrowLeft,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
/* add icons to the library */
library.add(
  faTwitter,
  faCircleUser,
  faUser,
  faEllipsisH,
  faBell,
  faGear,
  faHouse,
  faBookBookmark,
  faEnvelope,
  faFlag,
  faHashtag,
  faHeart,
  faList,
  faRetweet,
  faReply,
  faFilm,
  faSmile,
  faStar,
  faAngleDown,
  faPlus,
  faCheck,
  faChartBar,
  faImage,
  faEnvelopeOpen,
  faKey,
  faXmark,
  faArrowLeft,
  faPen,
  faTrash
);
const register = function (Vue) {
  Vue.component(Button.name, Button);
  Vue.component(Spin.name, Spin);
  Vue.component(Input.name, Input);
  Vue.component(Input.Password.name, Input.Password);
  Vue.component(Input.TextArea.name, Input.TextArea);
  Vue.component(Alert.name, Alert);
  Vue.component(Icon.name, Icon);
  Vue.component(Tabs.name, Tabs);
  Vue.component(Tabs.TabPane.name, Tabs.TabPane);
  Vue.component(Dropdown.name, Dropdown);
  Vue.component(Upload.name, Upload);
  Vue.component(Form.name, Form);
  Vue.component(Form.Item.name, Form.Item);
  Vue.component(Modal.name, Modal);
  Vue.component(Result.name, Result);
  Vue.component(Skeleton.name, Skeleton);
  Vue.component(Avatar.name, Avatar);
  Vue.component(Popover.name, Popover);
  Vue.component(Table.name, Table);
  Vue.component(Drawer.name, Drawer);
  Vue.component(Select.name, Select);
  Vue.component(Select.Option.name, Select.Option);
  Vue.component(DatePicker.name, DatePicker);
  Vue.use(message);
  Vue.component(Pagination.name, Pagination);
  Vue.component("font-awesome-icon", FontAwesomeIcon);

  Vue.use(UUID);
  // Vue.mixin({
  //   created() {
  //     console.log("[created] " + this.$options.name);
  //   },
  // });
};
export default register;
