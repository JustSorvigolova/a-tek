import React from 'react';
import filter_img from './../../img/outline_filter_list_black_24dp.png'
import './Main.css'
import Cards from "../Cards/Cards";

const Main = () => {
    return (
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-7 pt-5 ">
                    <button className=" hoc"><img src={filter_img} alt="filter"/> Фильтры</button>
                </div>
                <div className="col-2 pt-5 ">
                    <input className="form-control" list="datalistOptions" id="exampleDataList"
                           placeholder="Цена по увеличению"/>
                    <datalist id="datalistOptions">
                        <option value="San Francisco"/>
                        <option value="New York"/>
                        <option value="Seattle"/>
                        <option value="Los Angeles"/>
                        <option value="Chicago" />
                    </datalist>
                </div>
                <div className="col-2 pt-5 ">
                    <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Доставка"/>
                        <datalist id="datalistOptions">
                            <option value="San Francisco"/>
                                <option value="New York"/>
                                    <option value="Seattle"/>
                                        <option value="Los Angeles"/>
                                            <option value="Chicago" />
                        </datalist>

                </div>
            </div>
            <div className="row justify-content-start text-end">
                <h4 className="col-3">Цены</h4>
            </div>
            <div className="row justify-content-around">
                <div className="col col-2 pt-4">
                    <input type="text" className=" forms  " width={50}/>
                  </div>
                <div className="col col-xl-5 pt-4 ">
                    <input type="text" className="form"  /></div>
                <div className="col  pt-4">
                    <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Доставка"/>
                    <datalist id="datalistOptions">
                        <option value="San Francisco"/>
                        <option value="New York"/>
                        <option value="Seattle"/>
                        <option value="Los Angeles"/>
                        <option value="Chicago" />
                    </datalist>
                   </div>
                <div className="col  pt-4">
                    <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Страна производства"/>
                    <datalist id="datalistOptions">
                        <option value="San Francisco"/>
                        <option value="New York"/>
                        <option value="Seattle"/>
                        <option value="Los Angeles"/>
                        <option value="Chicago" />
                    </datalist></div>
                <div className="col  pt-4">
                    <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Компания"/>
                    <datalist id="datalistOptions">
                        <option value="San Francisco"/>
                        <option value="New York"/>
                        <option value="Seattle"/>
                        <option value="Los Angeles"/>
                        <option value="Chicago" />
                    </datalist></div>
            </div>
            <div className="row pt-4 justify-content-start">
                <div className="col-3">
                    <input type="range" className="form-range " min={0}  max={1500} /></div>
            </div>
           <div>
               <Cards />
           </div>
        </div>
    );
};

export default Main;