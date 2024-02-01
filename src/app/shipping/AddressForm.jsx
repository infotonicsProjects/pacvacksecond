import {
  Box,
  Button,
  Checkbox,
  FormControl,
  InputBase,
  NativeSelect,
  Radio,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { Fragment, useEffect, useState } from "react";
import { GetData, PostData } from "../../utlis/ClientApi";
import { useSelector } from "react-redux";
import stateData from "../../utlis/state.json";
import { ToastColor } from "../../utlis/Toast";
import { useRouter } from "next/navigation";
const AddressForm = ({ setLayout }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [secondLoading, setSecondLoading] = useState(false);
  const [address, setAddress] = useState([]);
  const [selected, setSelected] = useState({});
  const controller = new AbortController();
  const signal = controller.signal;
  useEffect(() => {
    const getData = async () => {
      const response = await GetData(
        "shipping_information_table",
        setLoading,
        signal,
      );
      if (response) {
        setAddress(response);
      }
    };
    getData();
  }, [secondLoading]);
  const user = useSelector((state) => state.userData);
  const formSubmit = async (e) => {
    e.preventDefault();
    const zip1 = e.target[12].value;
    const zip2 = e.target[19].value;

    const firstname = e.target[0].value;
    const lastname = e.target[2].value;
    const name = firstname + " " + lastname;
    const cname = e.target[4].value;
    // const s_address = e.target[6].value
    const b_address = e.target[6].value;
    const b_city = e.target[9].value + "," + zip1;
    const b_state = e.target[11].value;

    const s_address = e.target[14].value;
    const s_city = e.target[16].value + "," + zip2;
    const s_state = e.target[18].value;

    const number = e.target[21].value;
    const gst = e.target[23].value;
    const email = e.target[25].value;

    // const order_id = e.target[18].value
    // const shipping = e.target[22].value
    // const delivery_date = e.target[26].value
    // const track_information = e.target[30].value

    const data = {
      user_id: user?.id.toString(),
      order_id: "0",
      shipping: "0",
      delivery_date: new Date().toISOString().slice(0, 10),
      track_information: "0",
      receipent_name: name,
      cname,
      b_address,
      b_city,
      b_state,
      s_address,
      s_city,
      s_state,
      // zip,
      number,
      email,
      gst,
    };
    const response = await PostData(
      "shipping_information_table",
      setSecondLoading,
      signal,
      data,
    );
    if (response) {
      setLayout(false);
    }
  };
  const handleOrderOn = async (e, value) => {
    const data = {
      t_amount: sessionStorage.getItem("price"),
      order_status: "Processing",
      shipping_method: "Bluedart",
      payment_method: "by cash",
      payment_status: "paid",
    };

    const response = await PostData("orders_table", setLoading, signal, data);
    if (response) {
      const cartItems = JSON.parse(sessionStorage.getItem("cart"));
      if (cartItems) {
        const orderItems = new Promise((resolve) => {
          cartItems?.forEach(async (item, i) => {
            if (item.price && item?.price[0] === "[") {
              const imagesData = JSON.parse(item?.images);
              var elementPrice = imagesData[0];
            } else if (item.images) {
              var elementPrice = item?.price;
            } else if (item.atributes) {
              var elementPrice;
              const attribute = JSON.parse(item.atributes);
              Object.entries(attribute).forEach(([key, value]) => {
                elementPrice = Object.values(value?.dimensions)[0].price;
              });
            }

            const postData = {
              order_id: response.id,
              product_id: item.product_id,
              design_id: item.designid,
              qty: item.qty,
              taxes: "0",
              unit_price: elementPrice,
            };
            const responseSecond = await PostData(
              "order_items_table",
              setLoading,
              signal,
              postData,
            );
            if (responseSecond && i === cartItems.length - 1) {
              resolve({ status: true });
            }
          });
        });
        const result = await orderItems;
        if (result) {
          router.push("/");
          ToastColor("Ordered successfully");
        }
      }
    }
  };

  const controlProps = (item) => ({
    checked: selected?.id === item?.id,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });
  return (
    <Fragment>
      {address.length > 0 &&
        address?.map((item, i) => (
          <div className="my-4" style={{ cursor: "pointer" }}>
            <Box
              className="border d-flex p-3 align-items-center bg-white "
              gap="10px"
              key={i}
            >
              <Radio
                {...controlProps(item)}
                color="default"
                sx={{
                  color: "black",
                  "& .MuiSvgIcon-root": {
                    fontSize: 28,
                  },
                }}
                onChange={(e) => setSelected(item)}
              />
              <Box className="d-flex flex-column align-items-start " gap="2px">
                <p className="m-0 fw-bold fs-5 text-capitalize">
                  {item?.receipent_name}
                </p>
                <p className="m-0 fs-5"> {item?.s_address}</p>
                <p className="m-0 fs-5">{item?.s_city},</p>
                <p className="m-0 fs-5"> {item?.b_state}</p>
                <p className="m-0 fs-5">{item?.number}</p>
                <p className="m-0 fs-5"> {item?.email}</p>
              </Box>
            </Box>
            {selected?.id === item?.id && (
              <Box display="flex" justifyContent={"end"}>
                <button
                  className="btn btn-dark btn-lg rounded-pill m-3"
                  onClick={(e) => handleOrderOn(e, item)}
                >
                  Order to this address
                </button>
              </Box>
            )}
          </div>
        ))}
      <Box component="form" autoComplete="on" onSubmit={formSubmit}>
        <FormControl sx={{ gap: "20px" }} className="d-flex flex-column">
          <Box>
            <h4>Shipping adress</h4>
          </Box>
          <Box className="d-flex" sx={{ gap: "20px" }}>
            <TextField
              id="outlined-basic"
              label="First name"
              variant="outlined"
              name="first name"
              autoComplete="first-name"
              sx={{ flex: "1 0 45%" }}
              required
              size="small"
            />
            <TextField
              id="outlined-basic"
              label="Last name"
              variant="outlined"
              sx={{ flex: "1 0 45%" }}
              name="last name"
              size="small"
              autoComplete="family-name"
              required
            />
          </Box>
          <Box className="d-flex flex-column" sx={{ gap: "20px" }}>
            <TextField
              id="outlined-basic"
              label="Company (required for bussiness address)"
              variant="outlined"
              name="cname"
              size="small"
              required
              autoComplete="company"
            />

            <TextField
              id="outlined-basic"
              label="Billing Address"
              multiline
              rows={2}
              variant="outlined"
              name="address"
              size="small"
              autoComplete="address-line1"
              required
            />
            <TextField
              id="outlined-basic"
              label="Billing City/Town"
              variant="outlined"
              name="city"
              size="small"
            />
            <NativeSelect
              id="demo-customized-select-native"
              name="b_state"
              input={<BootstrapInput />}
              autoComplete="state"
              required
            >
              <option aria-label="None" value="">
                Choose Billing State *
              </option>
              {stateData?.map((item) => (
                <option value={item.key}>{item?.name}</option>
              ))}
            </NativeSelect>

            <TextField
              id="outlined-basic"
              label="Zip1"
              variant="outlined"
              name="zip "
              type="number"
              size="small"
              autoComplete="zip code"
              required
            />

            <TextField
              id="outlined-basic"
              label="Shipping Address"
              variant="outlined"
              name="adress 2"
              sx={{ flex: "1 0 45%" }}
              size="small"
              required
            />
            <TextField
              id="outlined-basic"
              label="Shipping city"
              variant="outlined"
              name="city 2"
              sx={{ flex: "1 0 45%" }}
              size="small"
              required
            />
            <NativeSelect
              id="demo-customized-select-native"
              label="State"
              sx={{ flex: "1 0 45%" }}
              input={<BootstrapInput label="State" />}
            >
              <option aria-label="None" value="">
                Choose Shipping State *
              </option>
              {stateData?.map((item) => (
                <option value={item.key}>{item?.name}</option>
              ))}
            </NativeSelect>

            <TextField
              id="outlined-basic"
              label="Zip"
              variant="outlined"
              name="zip "
              type="number"
              size="small"
              required
            />
            <TextField
              id="outlined-basic"
              label="Phone"
              variant="outlined"
              name="Phone "
              type="number"
              size="small"
              required
            />
            {/* <TextField
            id="outlined-basic"
            label="order_id"
            variant="outlined"
            name="order_id"
            type="number"
            size="small"
          /> */}
            <TextField
              id="outlined-basic"
              label="Gst"
              variant="outlined"
              name="gst"
              type="text"
              size="small"
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              name="email"
              type="email"
              size="small"
              required
            />
            {/* <Box>
            <Box>
              <Checkbox
              {...label}
                sx={{
                  color: grey[600],
                  "&.Mui-checked": {
                    color: grey[800],
                  },
                }}

              />
              <Typography as="span" component={"p"}>
                Set as default shipping address
              </Typography>
              </Box>
              <Box>
              <Checkbox
                {...label}
                sx={{
                  color: grey[600],
                  "&.Mui-checked": {
                    color: grey[800],
                  },
                }}

              />
              <Typography as="span" component={"p"}>
                Set as default billing address
              </Typography>
            </Box>
          </Box> */}
            <div>
              {loading ? (
                <button
                  className="btn btn-md btn-dark rounded-pill  float-end"
                  disabled
                >
                  Saving Shipping address
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn btn-md btn-dark rounded-pill  float-end"
                >
                  Save Shipping address
                </button>
              )}
            </div>
          </Box>
        </FormControl>
      </Box>
    </Fragment>
  );
};

export default AddressForm;
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    height: 10,
    borderRadius: 4,
    position: "relative",
    height: 33,
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: ['"Graphik"'].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      border: "2px solid #80bdff",
    },
  },
}));

const Address = () => { };
