import React from "react";
import useAxios from "axios-hooks";
import { css } from "@emotion/core";
import Spinner from "react-spinners/BeatLoader";
import {SITE_URL} from "../helper";
import AwesomeSlider from "react-awesome-slider";

const override = css`
  display: block;
  border-color: 832323;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%)
`;

const Detail = (props) => {
  const [{ data: detail, loading, error }] = useAxios(
    `http://etnomarshrut.ncfu.ru/api?geoobject=${props.objectId}`
  );

  if (loading) return <Spinner
    css={override}
    size={20}
    color={"#832323"}
    loading={loading}
  />;

  if (error) return <p>Ошибка загрузки</p>;

  return (
    <>

      <div className="detail__row">
        <div className="detail__block detail__block--title">
          <h2 className="detail__title detail__title--sm">{detail.title} <p className="detail__category">{detail.category}</p>
          </h2>
        </div>

        <div className="detail__block detail__block--description">
          <div className="detail__text" dangerouslySetInnerHTML={{__html: detail.pretext}}>
          </div>
        </div>
      </div>

      <AwesomeSlider>
        {detail.gallery.map((image) => {
          return (
            <div key={image}>
              <img  style={{width: "100%", height: "auto"}} src={`${SITE_URL}/${image}`} width="1440" height="820" alt={detail.title}/>
            </div>
          )
        })}
      </AwesomeSlider>
      <div className="detail__text"  dangerouslySetInnerHTML={{__html: detail.description}}>


      </div>
    </>
  )

};

export default Detail
