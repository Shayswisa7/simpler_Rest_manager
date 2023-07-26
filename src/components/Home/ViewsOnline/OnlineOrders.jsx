import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allImages } from '../../../Images/importImags';
import './viewsOnline.css';
const OnlineOrders = () => {
  const dispatch = useDispatch();
  const allOrders = useSelector((state) => state.allOrders);
  const colors = ['darkRed', 'red', 'yellow', 'lightGreen', 'lightBlue'];
  const [posOfServing, setPostOfServing] = useState(0);
  const [posOfOrders, setPostOfOrders] = useState(0);
  return (
    <React.Fragment>
      <h1>
        {allOrders.servingsInOrder.length > 0
          ? allOrders.servingsInOrder[posOfOrders].obj[posOfServing].name
          : ''}
      </h1>
      <div className="container" id="salatina">
        {Object.keys(
          allOrders.servingsInOrder[posOfOrders]
            ? allOrders.servingsInOrder[posOfOrders].obj[posOfServing].salads
            : []
        )
          .reverse()
          .map((x) => {
            return (
              <div className="col" id="salads">
                <div
                  className="col"
                  id="salad"
                  style={{
                    backgroundColor:
                      colors[
                        allOrders.servingsInOrder[posOfOrders].obj[posOfServing]
                          .salads[x].pos
                      ],
                    alignItems: 'center',
                  }}
                >
                  {x}
                  <br />
                  <img
                    src={allImages[x]}
                    style={{
                      height: 'auto',
                      width: '150px',
                      alignSelf: 'center',
                    }}
                  ></img>
                </div>
              </div>
            );
          })}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="row">
        {Object.keys(
          allOrders.servingsInOrder[posOfOrders]
            ? allOrders.servingsInOrder[posOfOrders].obj[posOfServing].sauces
            : []
        )
          .reverse()
          .map((x) => {
            return (
              <div className="col" id="salads">
                <div
                  className="col"
                  id="salad"
                  style={{
                    backgroundColor:
                      colors[
                        allOrders.servingsInOrder[posOfOrders].obj[posOfServing]
                          .sauces[x].pos
                      ],
                  }}
                >
                  {x}
                  <br />
                  <img
                    src={allImages[x]}
                    style={{
                      height: 'auto',
                      width: '150px',
                    }}
                  ></img>
                </div>
              </div>
            );
          })}
        <div></div>
        {Object.keys(
          allOrders.servingsInOrder[posOfOrders]
            ? allOrders.servingsInOrder[posOfOrders].obj[posOfServing].breads
            : []
        )
          .reverse()
          .map((x) => {
            return (
              <div className="col" id="salads">
                <div
                  className="col"
                  id="salad"
                  style={{
                    backgroundColor:
                      colors[
                        allOrders.servingsInOrder[posOfOrders].obj[posOfServing]
                          .breads[x].pos !== 0
                          ? allOrders.servingsInOrder[posOfOrders].obj[
                              posOfServing
                            ].breads[x].pos + 1
                          : 0
                      ],
                  }}
                >
                  {x}
                  <br />
                  <img
                    src={allImages[x]}
                    style={{
                      height: 'auto',
                      width: '150px',
                      float: 'none',
                    }}
                  ></img>
                </div>
              </div>
            );
          })}
      </div>
      <div className="row">
        <br />
        &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
        <div className="col">
          <button
            className="btn btn-primary"
            onClick={() =>
              setPostOfServing(posOfServing > 0 ? posOfServing - 1 : 0)
            }
          >
            הקודם
          </button>
        </div>
        <div className="col">
          <button
            className="btn btn-primary"
            onClick={() =>
              setPostOfServing(
                posOfServing + 1 <
                  allOrders.servingsInOrder[posOfOrders].obj.length
                  ? posOfServing + 1
                  : posOfServing
              )
            }
          >
            הבא
          </button>
        </div>
        <div className="col">
          <button
            className="btn btn-danger"
            onClick={() => {
              setPostOfOrders(
                posOfOrders < allOrders.servingsInOrder.length - 1
                  ? posOfOrders + 1
                  : posOfOrders
              );
              setPostOfServing(0);
            }}
          >
            סיום
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OnlineOrders;
