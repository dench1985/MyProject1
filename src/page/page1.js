import React from 'react';
import ReactDOM from 'react-dom/client';
import LogoSvg from "../images/image_logo1.svg"
import BasketSvg from "../images/basket.svg"
import ImagePng from "../images/image 2.png"
import FertilizerPng from "../images/16-320x370 1.png"
import SepticPng from "../images/16-320x370 2.png"
import PlantingPng from "../images/16-320x370 3.png"
import InventoryPng from "../images/16-320x370 4.png"
import HobitPng from "../images/hobit.png"
import DecorativeBridgePng from "../images/bridge_1.png"
import FlowerBasketPng from "../images/flower_1.png"
import AquariumPng from "../images/castle_1.png"
import InstagramPng from "../images/instagram 3.png"
import WhatappPng from "../images/whatsapp 1.png"



export default function (){
    return(
        <div>
            <header>
            <div class="left">
                <div class="icon">
                    <img src={LogoSvg} alt="" />
                </div>
                <button class="green-btn">Catalog</button>
            </div>
            <div class="right">
                <div class="active">Categories</div>
                <div>Coupon</div>
                <div>Sale</div>
                <div>Contact</div>
                <div>
                    <img src={BasketSvg} alt="" />
                </div>
            </div>
        </header>
        <main>
            <section class="group-hero">
                <div class="left">
                    <div class="title">Sale <br />
                        <span>New season</span>
                    </div>
                    <div class="btns">
                        <button>Sale</button>
                        <button class="secondary">Learn more</button>
                    </div>

                </div>
                <div class="right">
                    <img src={ImagePng} alt="" />
                </div>
            </section>
            <section class="categories">
                <div class="top">
                    <div class="title">Catalog</div>
                    <button>All Categories</button>
                </div>
                <div class="botton">
                    <div class="item">
                        <img src={FertilizerPng} alt="" />
                        <div class="item-name">Fertilizer</div>
                    </div>
                    <div class="item">
                        <img src={SepticPng} alt="" />
                        <div class="item-name">Protective products and septic tanks</div>
                    </div>
                    <div class="item">
                        <img src={PlantingPng} alt="" />
                        <div class="item-name">Planting material</div>
                    </div>
                    <div class="item">
                        <img src={InventoryPng} alt="" />
                        <div class="item-name">Tools and Inventory</div>
                    </div>
                </div>
            </section>
            <section class="sales">
                <div class="left">
                    <img src={HobitPng} alt="" />
                </div>
                <div class="right">
                    <div class="title">
                        <div class="title-top"> 5%<span> off</span> </div>
                        <div class="title-botton">  on the first order</div>
                    </div>
                    <input type="text" placeholder="+7" />
                    <button> Get a discount</button>
                </div>
            </section>
            <section class="stock">
                <div class="stock-item">Sale</div>
                <div class="stock-container">
                    <div class="container-item">
                        <div class="thumbanail">
                            <img src={DecorativeBridgePng} alt="" />
                            <button>Add to cart</button>
                        </div>
                        <div class="price">
                            <span> 500$</span>
                            <span class="og-price">1000$</span>
                            <span class="sale">-7%</span>
                        </div>
                        <div class="title">Decorative forged bridge</div>
                    </div>
                    <div class="container-item">
                        <div class="thumbanail">
                            <img src={FlowerBasketPng} alt="" />
                            <button>Add to cart</button>
                        </div>
                        <div class="price">
                            <span> 100$</span>
                            <span class="og-price">150$</span>
                            <span class="sale">-7%</span>
                        </div>
                        <div class="title">Flower basket</div>
                    </div>
                    <div class="container-item">
                        <div class="thumbanail">
                            <img src={AquariumPng} alt="" />
                            <button>Add to cart</button>
                        </div>
                        <div class="price">
                            <span> 150$</span>
                            <span class="og-price">200$</span>
                            <span class="sale">-7%</span>
                        </div>
                        <div class="title">Aquarium lock</div>
                    </div>
                </div>
            </section>
        </main>
        <footer>
            <div class="container">
                <div class="left">
                    <div class="kontackt">Contact</div>
                    <div class="phone">+7 999 999 99 99</div>
                    <div class="social-netrwork">
                        <div class="social-netrwork-item">
                            <img class="item-inst" src={InstagramPng} alt="" />
                            <p class="item-instag">instagram</p>
                        </div>
                        <div class="social-netrwork-item">
                            <img src={WhatappPng} alt="" />
                            <p class="item-whatsapp">WhatsApp</p>
                        </div>
                    </div>
                </div>
                <div class="rigth">
                    <div class="adress">Address</div>
                    <div class="city">  <a href='https://www.google.com/search?q=telranDE'> Kosmonavtov <p >proezd Kosmonavtov, 11 </p> </a>
                    </div>
                    <div class="work-regim"> Working Hours:  <p class="work-regim2">24 hours a day</p> </div>
                </div>
            </div>
        </footer>
        </div>
    )
}