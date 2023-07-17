import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Form from "../../components/form/form";
import { MenuService } from "../../apis/MenuService";

interface Props {}

const Edit: React.FC<Props> = () => {
  const menuService = new MenuService();
  const { id } = useParams();
  const navigate = useNavigate();

  const actionClick = () => {
    navigate("/menu");
  };
  const handleSubmit = (details: any) => {
    menuService.saveMenuItem(details);
    navigate("/menu");
  };
  const [details, setDetails] = useState({});
  let idInt = 0;
  if (id) {
    idInt = parseInt(id);
  }
  useEffect(() => {
    menuService.getMenuItemDetails(idInt).then((itemDetails) => {
      setDetails(itemDetails);
    });
  }, []);

  return (
    <div className="flex-box wrapper">
      <div className="breadcrumb">
        <span className="text-lg-primary">Edit Menu Items</span>
        <span className="action-item" onClick={() => actionClick()}>
          Cancel
        </span>
      </div>
      <Form
        wrapperClass="btn-group-vertical"
        details={details}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Edit;
