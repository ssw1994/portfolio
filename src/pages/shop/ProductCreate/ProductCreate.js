import React from "react";
import {
  Card,
  CardContent,
  TextField,
  CardHeader,
  Button,
  CardActions,
} from "../../../components/shared";
import { useFormGroup } from "use-form-group";
import Product from "../Product/Product";
import "./ProductCreate.scss";
export default function ProductCreate() {
  const [productForm, updateForm] = useFormGroup({
    product_name: {
      value: "",
      validator: {
        required: true,
        msgs: {
          required: "Product name is required",
        },
      },
    },
    product_price: {
      value: "",
      validator: {
        required: true,
        msgs: {
          required: "Product price is required",
        },
      },
    },
    about_product: {
      value: "",
      validator: {
        required: true,
        msgs: {
          required: "About product is required",
        },
      },
    },
    stock_quantity: {
      value: "",
      validator: {
        required: true,
        msgs: {
          required: "Stock quantity is required",
        },
      },
    },
    category: {
      value: "",
      validator: {
        required: false,
      },
    },
    color: {
      value: "",
    },
  });

  const save = () => {
    const {
      product_price,
      product_name,
      stock_quantity,
      category,
      color,
      about_product,
    } = productForm;
    const payload = {
      product_price: product_price.value,
      product_name: product_name.value,
      stock_quantity: stock_quantity.value,
      category: category.value,
      color: color.value,
      about_product: about_product.value,
    };
    console.log(payload);
  };

  const buildControl = (controlName) => {
    console.log(controlName.split("_").join(" "));
    return (
      <div>
        <TextField
          value={productForm[controlName].value}
          id={controlName}
          label={controlName.split("_").join(" ")}
          onChange={updateForm}
          variant="outlined"
        />
      </div>
    );
  };

  const getProductPreview = () => {
    const {
      product_price,
      product_name,
      stock_quantity,
      category,
      color,
      about_product,
    } = productForm;
    const payload = {
      product_price: product_price.value,
      product_name: product_name.value,
      stock_quantity: stock_quantity.value,
      category: category.value,
      color: color.value,
      about_product: about_product.value,
    };
    return payload;
  };

  return (
    <Card class="create-product">
      <Card className="product_creation_form">
        <CardContent>
          {Object.keys(productForm).map((control) => buildControl(control))}
        </CardContent>
        <CardActions>
          <Button onClick={save}>Save</Button>
        </CardActions>
      </Card>
      <Card className="product_preview">
        <CardHeader title="Product Preview"></CardHeader>
        <CardContent>
          <Product item={getProductPreview()} preview={true}></Product>
        </CardContent>
      </Card>
    </Card>
  );
}
