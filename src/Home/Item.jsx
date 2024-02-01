import Image from "next/image";
import { urlImage } from "../Environment/index";
import Link from "next/link";

const Item = ({ item }) => {
  return (
    <div
      className="t-all-product-info"
      style={{
        width: "225px",
        maxHeight: "500px",
        paddingBottom: "15px",
        margin: "12px",
        marginBottom: "50px",
      }}
    >
      <div className="p-sign">new</div>
      <div className="t-product-img">
        <Link href={`/des?bag=${item.id}`}>
          <Image
            src={`${urlImage}/${item.img_url.slice(7)}`}
            alt={item.alt_text}
            id={item.id}
            width={225}
            height={250}
          />
          <Image
            className="second-img"
            src={`${urlImage}/${item.img_url.slice(7)}`}
            alt={item.alt_text}
            id={item.id}
            width={225}
            height={250}
          />
        </Link>
      </div>
      <div className="tab-p-info">
        <Link
          style={{ fontSize: "14px", fontWeight: "500" }}
          href={`/des?bag=${item.id}`}
          className="swan-link swan-link-skin-cta swan-ml-5 swan-mt-2"
        >
          Shop all {"\u00A0"}
          {"\u00A0"}
          <span>&#10132;</span>
        </Link>
      </div>
    </div>
  );
};

export default Item;
