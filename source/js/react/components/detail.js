import React, {useState} from "react";
import useAxios from "axios-hooks";
import { css } from "@emotion/core";
import Spinner from "react-spinners/BeatLoader";
import {SITE_URL} from "../helper";

const override = css`
  display: block;
  border-color: 832323;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%)
`;

const Detail = () => {
  const [{ data: detail, loading, error }] = useAxios(
    `${SITE_URL}detail.json`
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

      <img className="detail__foto" src={detail.photo} width="1440" height="820" alt={detail.title}/>
      <div className="detail__text"  dangerouslySetInnerHTML={{__html: detail.description}}>


      </div>
    </>
  )

};

export default Detail
