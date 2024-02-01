"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import BottomSection from "./BottomSection";
import LeftSection from "./LeftSection";
import MiddleSection from "./MiddleSection";
import RigthSection from "./RigthSection";
import Header from "./Header";
import useImage from "use-image";
import {
  GetData,
  PostData,
  PostDataUplaod,
  PutData,
} from "../../../utlis/ClientApi";
import { useRouter, useSearchParams } from "next/navigation";
import { ToastSuccess } from "../../../utlis/Toast";
import dynamic from "next/dynamic";
import { urlImage } from "../../../Environment";
const TirtleModal = dynamic(() => import("./TirtleModalNew"));
import MainDesignerEdit from './[productid]/page'
import { useSelector } from "react-redux";
const Main = ({ page, textColor }) => {
  const [bagsImages, setBagsImages] = useState([
    {
      id: 1,
      colors: "#300",
      height: 1500,
      width: 1000,
      price: 100,
      bag_color: "#eee",
      images: "",
      rotoColor: "#00000",
      rotoColorbag: "#300",
      rotoPrice: 0,
      qty: 2000,
    },
  ]);
  const [titleOpen, setOpenTitle] = useState(true);
  const [designName, setDesignName] = useState("Design Name");
  const [title, setTitle] = useState("");
  const [logo, setLogo] = useState([]);
  const searchQuery = useSearchParams();
  const saveRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [loadingSecond, setSecondLoading] = useState(false);
  const stageRef = useRef(null);
  const backgroundImginitial = {
    x: 50,
    y: 50,
    width: 550,
    height: 700,
    url: "/img/bag/about-1.jpg",
    urlback: "img/bag/about-1c.jpg",
    id: 25,
    back: 0,
  };
  const [previewOpen, setPreviewOpen] = useState(false);

  const [backgroundImg, setBackgroungImg] = useState({});
  const [backgroundColors, setBackgroundColors] = useState([]);
  const [selectedId, selectShape] = useState(null);
  const [imageside, setImageSide] = useState(backgroundImg);
  useEffect(() => {
    setImageSide(backgroundImg);
  }, []);
  const [selectedIdText, selectShapeText] = useState(null);
  const [colorPickeropen, setColorPickerOpen] = useState(false);
  const [scale, setScale] = useState(100);
  const [colors, setColors] = useState("#000000");
  const divRef = useRef(null);
  const [image, status] = useImage(backgroundImg?.url, "Anonymous");

  const [outerBorder, setOuterBorder] = useState({
    x: { left: 128.0000054931644, right: 415, down: 128.0000054931644 },
    y: { upper: 200, down: 678 },
    opacity: 1,
    stroke: "red",
    strokeWidth: 2,
    points: {
      left: [0, 0, 0, 0, 0, 480],
      upper: [0, 0, 288, 0, 0, 0],
      rigth: [0, 480, 0, 0, 0, 0],
    },
  });
  const [borderState, setBorderState] = useState({
    x: { left: 140.0000054931644, right: 400 },
    y: { upper: 214, down: 660 },
    opacity: 1,
    stroke: "white",
    strokeWidth: 1,
    points: {
      left: [0, 0, 0, 0, 0, 450],
      upper: [0, 0, 265, 0, 0, 0],
      rigth: [0, 450, 0, 0, 0, 0],
    },
    dash: [5, 10],
  });
  const [safeArea, setrSafeArea] = useState({
    x: 150,
    y: 145,
    opacity: 1,
    stroke: "blue",
    strokeWidth: 1,
    points: [0, 0, 0, 0, 0, 70],
    dash: [5, 10, 10],
    raduis: 4,
    text: "Safe Area",
    fontSize: 15,
  });
  const [selectedEdit, setSelectedEdit] = useState("text");
  const [size, setSize] = useState({
    width: 500,
    height: 700,
  });
  const initialImages = [
    {
      blue: 0,
      green: 255,
      height: 200,
      id: 2,
      red: 255,
      url: "img/logo/a.png",
      width: 200,
      x: 250,
      y: 400,
      rotation: 0,
      draggable: true,
      zIndex: 1,
      alpha: 0,
    },
  ];
  const initialText = [
    {
      blue: 0,
      fontSize: 20,
      green: 255,
      height: 25,
      icon: "img/logos/youtube.png",
      id: "5ca1d6d1-ec7b-43ed-ba2f-16644b177ad5",
      red: 255,
      text: "Youtube",
      width: 100,
      x: 320,
      y: 610,
      fontFamily: "Arial",
      fontStyle: "normal",
      align: "center",
      fill: "black",
      strokeWidth: "2",
      rotation: 0,
      textDecoration: "",
    },
    {
      blue: 0,
      fontSize: 20,
      green: 255,
      height: 25,
      icon: "img/logos/facebook.png",
      id: "b4520a9c-9dcb-4c89-8ea5-5c962f40fab5",
      red: 255,
      text: "Facebook",
      width: 100,
      x: 50,
      y: 1210,
      fontFamily: "Arial",
      fontSize: 20,
      fontStyle: "normal",
      align: "center",
      fill: "red",
      strokeWidth: "2",
      rotation: 0,
      textDecoration: "",
    },
    {
      blue: 0,
      fontSize: 20,
      green: 255,
      height: 25,
      icon: "img/logos/instagram.png",
      id: "ab84d1de-0b9e-4284-8970-33406d999810",
      red: 255,
      text: "Instagram",
      width: 100,
      x: 600,
      y: 1210,
      fontFamily: "Arial",
      fontSize: 20,
      fontStyle: "normal",
      align: "center",
      fill: "red",
      strokeWidth: "5",
      rotation: 0,
      textDecoration: "",
    },
  ];
  const [text, setText] = useState([]);
  const [design, setDesign] = useState(backgroundImg?.url);
  const [images, setImages] = useState([]);
  const handleExport = (uri) => {
    const nameOfDownload = "Image.png";
    const anchorElement = document.createElement("a");
    anchorElement.href = uri;
    anchorElement.download = nameOfDownload;
    document.body.appendChild(anchorElement);
    // anchorElement.click();
    document.body.removeChild(anchorElement);
    window.URL.revokeObjectURL(uri);
    setDesign(uri);
  };
  // function for auto set center
  const handleUpdateXandY = () => {
    //   const prevStateImg = images;
    //   const prevStateText = text;
    //   // if text is null then logo goes to center
    //   if (text.length === 0) {
    //     if (prevStateText[0]) {
    //       prevStateImg[0].y = 380;
    //       prevStateImg[0].x = size.width / 2;
    //       setImages([...prevStateImg]);
    //     }
    //     // if text add then logo goes to upper center
    //   } else if (text.length === 1) {
    //     prevStateImg[0].x = 161;
    //     prevStateImg[0].y = 954;
    //     setImages([...prevStateImg]);
    //   }
    //   if (text.length === 1) {
    //     prevStateText[0].x = size.width / 1.9;
    //     prevStateText[0].y = Math.max(
    //       size.height - 470,
    //       Math.min(size.height - 90)
    //     );
    //   } else if (text.length === 2) {
    //     prevStateText[0].x = size.width / 2.5;
    //     prevStateText[0].y = Math.max(
    //       size.height - 470,
    //       Math.min(size.height - 90)
    //     );
    //     prevStateText[1].y = Math.max(
    //       size.height - 470,
    //       Math.min(size.height - 90)
    //     );
    //     prevStateText[1].x = size.width - size.width / 3.3;
    //   } else if (text.length === 3) {
    //     prevStateText[2].x = prevStateImg[0].x + 25;
    //     prevStateText[2].y = prevStateImg[0].y + 130;
    //   }
  };
  const handleScale = (e) => {
    if (divRef.current) {
      divRef.current.style.transform = `scale(${e / 100})`;
    }
  };

  useEffect(() => {
    if (status === "loaded" && backgroundImg.url == "img/bg-bag.jpeg") {
      setOuterBorder({
        x: {
          left: 1,
          right: image.width >= 1200 ? 1200 : image.width,
          down: 0,
        },
        y: { upper: 325, down: image.height >= 2000 ? 2000 : image.height },
        opacity: 1,
        stroke: "red",
        strokeWidth: 2,
        points: {
          left: [
            0,
            0,
            0,
            0,
            0,
            (image.height >= 2000 ? 2000 : image.height) - 325,
          ],
          upper: [0, 0, image.width >= 1000 ? 1000 : image.width, 0, 0, 0],
          rigth: [
            0,
            (image.height >= 2000 ? 2000 : image.height) - 325,
            ,
            0,
            0,
            0,
            0,
          ],
        },
      });
      setBorderState({
        x: {
          left: 15,
          right: (image.width >= 1200 ? 1200 : image.width) - 15,
          down: 0,
        },
        y: {
          upper: 340,
          down: image.height >= 2000 ? 2000 : image.height - 20,
        },
        opacity: 1,
        stroke: "white",
        strokeWidth: 1,
        points: {
          left: [
            0,
            0,
            0,
            0,
            0,
            (image.height >= 2000 ? 2000 : image.height) - 360,
          ],
          upper: [
            0,
            0,
            (image.width >= 1200 ? 1200 : image.width) - 25,
            0,
            0,
            0,
          ],
          rigth: [
            0,
            (image.height >= 2000 ? 2000 : image.height) - 360,
            ,
            0,
            0,
            0,
            0,
          ],
        },
        dash: [5, 10],
      });
      setrSafeArea({
        x: 150,
        y: (image.height >= 2000 ? 2000 : image.height) - 990,
        opacity: 1,
        stroke: "blue",
        strokeWidth: 1,
        points: [0, 0, 0, 0, 0, 70],
        dash: [5, 10, 10],
        raduis: 4,
        text: "Safe Area",
        fontSize: 15,
      });
      setText(initialText);
      setImages(initialImages);
    }
    if (
      status === "loaded" &&
      backgroundImg.id === 2 &&
      backgroundImg.back === 0
    ) {
      setOuterBorder({
        x: {
          left: 50,
          right: (image.width >= 1200 ? 1180 : image.width) - 10,
          down: 50,
        },
        y: {
          upper: image.height / 10 - 10,
          down: image.height / 10 + 610,
        },
        opacity: 1,
        stroke: "blue",
        strokeWidth: 1,
        points: {
          left: [0, 0, 0, 0, 0, image.height / 10 - 320],
          upper: [0, 0, image.width / 5 - 5, 0, 0, 0],
          rigth: [0, image.height / 10 - 320, , 0, 0, 0, 0],
        },
      });
      setBorderState({
        x: {
          left: 50,
          right: (image.width >= 1200 ? 1185 : image.width) - 15,
          down: 0,
        },
        y: {
          upper: image.height / 10 - 10,
          down: image.height / 10 + 610,
        },
        opacity: 1,
        stroke: "blue",
        strokeWidth: 1,
        points: {
          left: [0, 0, 0, 0, 0, image.height / 10 - 350],
          upper: [0, 0, image.width / 5 - 10, 0, 0, 0],
          rigth: [0, image.height / 10 - 320, , 0, 0, 0, 0],
        },
        dash: [5, 10],
      });
      setrSafeArea({
        x: 150,
        y: image.height / 10 - 80,
        opacity: 1,
        stroke: "blue",
        strokeWidth: 1,
        points: [0, 0, 0, 0, 0, 70],
        dash: [5, 10, 10],
        raduis: 4,
        text: "Safe Area",
        fontSize: 15,
      });
    } else if (
      status === "loaded" &&
      backgroundImg.id === 2 &&
      backgroundImg.back === 1
    ) {
      setOuterBorder({
        x: {
          left: 10,
          right: (image.width >= 1200 ? 1200 : image.width) - 10,
          down: 10,
        },
        y: {
          upper: image.height / 10 - 10,
          down: image.height / 10 + 610,
        },
        opacity: 1,
        stroke: "red",
        strokeWidth: 2,
        points: {
          left: [0, 0, 0, 0, 0, image.height / 10 - 320],
          upper: [0, 0, image.width / 5 + 55, 0, 0, 0],
          rigth: [0, image.height / 10 - 320, , 0, 0, 0, 0],
        },
      });
      setBorderState({
        x: {
          left: 15,
          right: (image.width >= 1200 ? 1200 : image.width) - 15,
          down: 0,
        },
        y: {
          upper: image.height / 10,
          down: image.height / 10 + 600,
        },
        opacity: 1,
        stroke: "black",
        strokeWidth: 1,
        points: {
          left: [0, 0, 0, 0, 0, image.height / 10 - 350],
          upper: [0, 0, image.width / 5 + 43, 0, 0, 0],
          rigth: [0, image.height / 10 - 340, , 0, 0, 0, 0],
        },
        dash: [5, 10],
      });
      setrSafeArea({
        x: 150,
        y: image.height / 10 - 70,
        opacity: 1,
        stroke: "blue",
        strokeWidth: 1,
        points: [0, 0, 0, 0, 0, 70],
        dash: [5, 10, 10],
        raduis: 4,
        text: "Safe Area",
        fontSize: 15,
      });
      setText([]);
      setImages([]);
    } else if (status === "loaded") {
      const designDatalocal = JSON.parse(localStorage.getItem("designTemp"));
      if (designDatalocal !== undefined && designDatalocal !== null) {
        setOuterBorder(designDatalocal.outerBorder);
        setBorderState(designDatalocal.borderState);
        setrSafeArea(designDatalocal.safeArea);
      } else {
        setOuterBorder({
          x: {
            left: 10,
            right: (image.width >= 1200 ? 1200 : image.width) - 10,
            down: 10,
          },
          y: {
            upper: (image.height > 2000 ? 2000 : image.height) / 10,
            down: (image.height > 2000 ? 2000 : image.height) - 50,
          },
          opacity: 1,
          stroke: "red",
          strokeWidth: 3,
          points: {
            left: [
              0,
              0,
              0,
              0,
              0,
              (image.height > 2000 ? 2000 : image.height) -
              (image.height > 2000 ? 2000 : image.height) / 8.2,
            ],
            upper: [
              0,
              0,
              (image.width >= 1200 ? 1200 : image.width) - 20,
              0,
              0,
              0,
            ],
            rigth: [
              0,
              (image.height > 2000 ? 2000 : image.height) -
              (image.height > 2000 ? 2000 : image.height) / 8.2,
              0,
              0,
              0,
              0,
            ],
          },
        });
        setBorderState({
          x: {
            left: 15,
            right: (image.width >= 1200 ? 1200 : image.width) - 15,
            down: 0,
          },
          y: {
            upper: (image.height > 2000 ? 2000 : image.height) / 10,
            down: (image.height > 2000 ? 2000 : image.height) - 60,
          },
          opacity: 1,
          stroke: "#0000ff",
          strokeWidth: 3,
          points: {
            left: [
              0,
              0,
              0,
              0,
              0,
              (image.height > 2000 ? 2000 : image.height) -
              (image.height > 2000 ? 2000 : image.height) / 7.5,
            ],
            upper: [
              0,
              0,
              (image.width >= 1200 ? 1200 : image.width) - 30,
              0,
              0,
              0,
            ],
            rigth: [
              0,
              (image.height > 2000 ? 2000 : image.height) -
              (image.height > 2000 ? 2000 : image.height) / 7.5,
              0,
              0,
              0,
              0,
            ],
          },
          dash: [5, 10],
        });
        setrSafeArea({
          x: 150,
          y: (image.height > 2000 ? 2000 : image.height) / 10 - 70,
          opacity: 1,
          stroke: "#0000ff",
          strokeWidth: 3,
          points: [0, 0, 0, 0, 0, 70],
          dash: [5, 10, 10],
          raduis: 4,
          text: "Safe Area",
          fontSize: 15,
        });
      }
    }
  }, [backgroundImg, status]);
  const [historyStep, setHistoryStep] = useState(0);
  const [history, setHistory] = useState([
    {
      imageState: images,
      textState: text,
    },
  ]);
  const handleUndo = () => {
    if (historyStep === 0) {
      return;
    }
  };

  const handleRedo = () => {
    if (historyStep === history.length - 1) {
      return;
    }
  };

  const IdDesign = searchQuery.get("designid");
  const backid = searchQuery.get("back");
  const controller = new AbortController();
  const signal = controller.signal;
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const GetDesign = async (back) => {
      if (IdDesign !== null && back !== "back") {
        const response = await GetData(
          `design_templates_table/${IdDesign}`,
          setLoading,
          signal,
        );
        if (response !== undefined) {
          const designData = JSON.parse(response.designData);
          setOuterBorder(designData.outerBorder);
          setBorderState(designData.borderState);
          setrSafeArea(designData.safeArea);
          setText(designData.text);
          setImages(designData.images);
          setBackgroungImg(designData.backgroundImg);
        }
      } else if (back === "back") {
        setText([]);
        setImages([]);
      }
    };
    if (status === "loaded" && backgroundImg.back === 0) {
      const designDatalocal = JSON.parse(localStorage.getItem("designTemp"));
      if (designDatalocal !== undefined && designDatalocal !== null) {
        setOuterBorder(designDatalocal.outerBorder);
        setBorderState(designDatalocal.borderState);
        setrSafeArea(designDatalocal.safeArea);
        setText(designDatalocal.text);
        setImages(designDatalocal.images);
        // setBackgroungImg(designDatalocal.backgroundImg)
      } else {
        GetDesign();
      }
    } else if (status === "loaded" && backgroundImg.back === 1) {
      const designDatalocal = JSON.parse(
        localStorage.getItem("designTempBack"),
      );
      if (designDatalocal !== undefined && designDatalocal !== null) {
        setText(designDatalocal.text);
        setImages(designDatalocal.images);
        // setBackgroungImg(designDatalocal.backgroundImg)
      } else {
        GetDesign("back");
      }
    }
    return () => controller.abort();
  }, [status, backgroundImg]);
  const handleSaveDesign = async () => {
    if (backgroundImg.back === 1) {
      localStorage.setItem(
        "designTempBack",
        JSON.stringify({
          images,
          text,
        }),
      );
    } else {
      localStorage.setItem(
        "designTemp",
        JSON.stringify({
          images,
          text,
          backgroundImg,
          safeArea,
          borderState,
          outerBorder,
        }),
      );
    }
    const formData = new FormData();

    formData.append(`photos[${0}]`, design);

    var uploadImage = await PostDataUplaod(
      `upload/file_manager`,
      setLoading,
      signal,
      formData,
    );
    if (uploadImage !== undefined) {
      var uplodedImage =
        urlImage + uploadImage.path + "/" + uploadImage.file[0];
    }
    const designId = JSON.parse(localStorage.getItem("designId"));
    const designIdBack = JSON.parse(localStorage.getItem("designIdBack"));
    const data = {
      design_name: designName,
      design_url: uplodedImage ? uplodedImage : "Design url",
      images: "none",
      oter_settings: designIdBack?.id ?? "other_setting",
      colors: colors,
      designData: {
        text,
        images,
        borderState,
        outerBorder,
        backgroundImg,
        safeArea,
        backgroundColors,
      },
    };
    if (
      designId !== undefined &&
      designId !== null &&
      backgroundImg.back !== 1
    ) {
      var response = await PutData(
        `design_templates_table/${designId.id}`,
        setLoading,
        signal,
        data,
      );
    } else if (designIdBack !== undefined && designIdBack !== null) {
      if (backgroundImg.back === 1) {
        var response = await PutData(
          `design_templates_table/${designIdBack.id}`,
          setLoading,
          signal,
          data,
        );
      }
    } else if (designId === undefined || designId === null) {
      var response = await PostData(
        "design_templates_table",
        setLoading,
        signal,
        data,
      );
    } else if (designIdBack === undefined || designIdBack === null) {
      var response = await PostData(
        "design_templates_table",
        setLoading,
        signal,
        data,
      );
    }
    if (response !== undefined) {
      if (backgroundImg.back === 1) {
        const designData = await response;
        localStorage.setItem("designIdBack", JSON.stringify(designData));
      } else {
        const designData = await response;
        localStorage.setItem("designId", JSON.stringify(designData));
      }
      ToastSuccess("Saved Successfully");
      setSecondLoading(false);
    }
  };

  const unsavedChanges = true;
  const warningText =
    "You have unsaved changes - are you sure you wish to leave this page?";
  const router = useRouter();
  useEffect(() => {
    const handleWindowClose = (e) => {
      if (!unsavedChanges) return;
      e.preventDefault();

      return (e.returnValue = warningText);
    };
    const handleBrowseAway = () => {
      if (!unsavedChanges) return;
      if (window.confirm(warningText)) return;
      router.events.emit("routeChangeError");
      throw "routeChange aborted.";
    };
    window.addEventListener("beforeunload", handleWindowClose);
    // router.events.on("routeChangeStart", handleBrowseAway);
    return () => {
      window.removeEventListener("beforeunload", handleWindowClose);
      // router.events.off("routeChangeStart", handleBrowseAway);
    };
  }, [unsavedChanges]);
  useEffect(() => {
    if (status === "loaded" && backgroundImg.back === 1) {
      const backdesign = JSON.parse(localStorage.getItem("designTempBack"));
      if (backdesign !== undefined && backdesign !== null) {
        // setBackgroungImg(backdesign.backgroundImg);
        setImages(backdesign.images);
        setText(backdesign.text);
      } else {
        const backdesign = JSON.parse(localStorage.getItem("designIdBack"));
        if (backdesign !== undefined && backdesign !== null) {
          const backdesignTemp = JSON.parse(backdesign.designData);
          // setBackgroungImg(backdesignTemp.backgroundImg);
          setImages(backdesignTemp.images);

          setText(backdesignTemp.text);
        }
      }
    } else {
      const backdesign = JSON.parse(localStorage.getItem("designTemp"));
      if (backdesign !== undefined && backdesign !== null) {
        setImages(backdesign.images);
        setText(backdesign.text);
      } else {
        const backdesign = JSON.parse(localStorage.getItem("designId"));
        if (backdesign !== undefined && backdesign !== null) {
          const backdesignTemp = JSON.parse(backdesign.designData);
          setImages(backdesignTemp.images);
          setText(backdesignTemp.text);
        }
      }
    }
  }, [backgroundImg?.back]);
  useEffect(() => {
    setLoading(true);
    setSecondLoading(true);
    setTimeout(() => {
      if (backgroundImg.back === 1) {
        localStorage.setItem(
          "designTempBack",
          JSON.stringify({
            images,
            text,
          }),
        );
        handleSaveDesign(1);
      } else {
        localStorage.setItem(
          "designTemp",
          JSON.stringify({
            images,
            text,
            backgroundImg,
            safeArea,
            borderState,
            outerBorder,
          }),
        );
        handleSaveDesign();
      }
    }, 1500);
    return () => controller.abort();
  }, [images, text]);


  // if add design on added product
  const products = useSelector((state) => state.products)
  useEffect(() => {
    setTimeout(() => {
      if (page === "edit") {
        if (products) {
          console.log(products)
          setOpenTitle(false)
          function returnData(data) {
            return {
              x: 50,
              y: 50,
              width: 550,
              height: 700,
              url: data,
              urlback: data,
              id: 25,
              back: 0,
            }
          }
          var imagesView;
          Object.entries(products)?.map(([key, value]) => {

            imagesView = value?.image
          })
          const data = []
          imagesView?.forEach((item) => {
            data.push(returnData(item))
          })
          setBackgroundColors(data)
          setBackgroungImg(data[0])
          setColors(textColor)
        }
      }
    }, 1000)
  }, [products])
  return (
    <Fragment>
      <Header
        selectedIdText={selectedIdText}
        setText={setText}
        text={text}
        selectShapeText={selectShapeText}
        colorPickeropen={colorPickeropen}
        setColorPickerOpen={setColorPickerOpen}
        selectedId={selectedId}
        selectShape={selectShape}
        setImages={setImages}
        images={images}
        setPreviewOpen={setPreviewOpen}
        previewOpen={previewOpen}
        design={design}
        handleSaveDesign={handleSaveDesign}
        saveRef={saveRef}
        loading={loading}
        designName={designName}
      />

      <div
        className="container pt-4 ml-pl-0 w-100 max-w-100 h-100"
        style={{ background: "white" }}
      >
        <div className="row pt-3 mt-3">
          <LeftSection
            colorPickeropen={colorPickeropen}
            setSelectedEdit={setSelectedEdit}
            selectedEdit={selectedEdit}
            setImages={setImages}
            images={images}
            setBackgroungImg={setBackgroungImg}
            backgroundImg={backgroundImg}
            setText={setText}
            text={text}
            selectedIdText={selectedIdText}
            selectShapeText={selectShapeText}
            selectedId={selectedId}
            backgropundColors={backgroundColors}
            setBackgroundsColors={setBackgroundColors}
            colors={colors}
            setLogo={setLogo}
            logo={logo}
          />
          <MiddleSection
            images={images}
            setImages={setImages}
            setSize={setSize}
            size={size}
            backgroundImg={backgroundImg}
            setBackgroungImg={setBackgroungImg}
            setText={setText}
            text={text}
            handleExport={handleExport}
            handleUpdateXandY={handleUpdateXandY}
            borderState={borderState}
            safeArea={safeArea}
            outerBorder={outerBorder}
            scale={scale}
            divRef={divRef}
            selectedIdText={selectedIdText}
            selectShapeText={selectShapeText}
            image={image}
            status={status}
            dimension={outerBorder}
            selectedId={selectedId}
            selectShape={selectShape}
            previewOpen={previewOpen}
            stageRef={stageRef}
            setHistoryStep={setHistoryStep}
            setHistory={setHistory}
            setBorderState={setBorderState}
            setOuterBorder={setOuterBorder}
            setrSafeArea={setrSafeArea}
            loading={loadingSecond}
          />
          <RigthSection
            backgroundImg={backgroundImg}
            design={design}
            imageside={imageside}
            setImageSide={setImageSide}
            setBackgroungImg={setBackgroungImg}
            selectShapeText={selectShapeText}
            selectShape={selectShape}
            colors={colors}
            setImages={setImages}
            images={images}
            logo={logo}
            setLogo={setLogo}
          />
        </div>
        <BottomSection
          handleScale={handleScale}
          setScale={setScale}
          scale={scale}
          setHistoryStep={setHistoryStep}
          setHistory={setHistory}
          setImages={setImages}
          setText={setText}
          handleUndo={handleUndo}
          handleRedo={handleRedo}
          setSelectedEdit={setSelectedEdit}
        />
      </div>
      <TirtleModal
        setPreviewOpen={setOpenTitle}
        previewOpen={titleOpen}
        design={design}
        setDesignName={setDesignName}
        setTitle={setTitle}
        title={title}
        designName={designName}
        setBackgroungImg={setBackgroungImg}
        setBackgroundColors={setBackgroundColors}
        backgroundColors={backgroundColors}
        backgroundImg={backgroundImg}
        setColors={setColors}
        colors={colors}
        bagsImages={bagsImages}
        setBagsImages={setBagsImages}
      />
    </Fragment>
  );
};

export default Main;
