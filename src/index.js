import React from 'react';
import ReactDOM from 'react-dom/client';
import LogoSvg from "./images/image_logo1.svg"
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <div>
    <header>
        <div class="left">
            <div class="icon">
                <img src={LogoSvg} alt=""/>
            </div>
            <button class="green-btn">Каталог</button>
        </div>
        <div class="right">
            <div class="active">Категории</div>
            <div>Купон</div>
            <div>Акции</div>
            <div>Контакты</div>
            <div>
                <img src="images/basket.svg" alt=""/>
            </div>
        </div>
    </header>
    <main>
        <section class="group-hero">
            <div class="left">
                <div class="title">Распродажа <br/>
                    <span>в честь нового сезона</span>
                </div>
                <div class="btns">
                    <button>Все акции</button>
                    <button class="secondary">Подробнее</button>
                </div>

            </div>
            <div class="right">
                <img src="images/image 2.png" alt=""/>
            </div>
        </section>
        <section class="categories">
            <div class="top">
                <div class="title">Категории</div>
                <button>Все категории</button>
            </div>
            <div class="botton">
                <div class="item">
                    <img src="./images/16-320x370 1.png" alt=""/>
                    <div class="item-name">Удобрение</div>
                </div>
                <div class="item">
                    <img src="./images/16-320x370 2.png" alt=""/>
                    <div class="item-name">Средства Защиты и септики</div>
                </div>
                <div class="item">
                    <img src="./images/16-320x370 3.png" alt=""/>
                    <div class="item-name">Посадочный материал</div>
                </div>
                <div class="item">
                    <img src="./images/16-320x370 4.png" alt=""/>
                    <div class="item-name"> Инструменты и Инвентарь</div>
                </div>
            </div>
        </section>
        <section class="sales">
            <div class="left">
                <img src="./images/hobit.png" alt=""/>
            </div>
            <div class="right">
                <div class="title">
                    <div class="title-top"> Скидка <span>5%</span> </div>
                    <div class="title-botton">на первый заказ</div>
                </div>
                <input type="text" placeholder="+7"/>
                <button> Получить скидку</button>
            </div>
        </section>
        <section class="stock">
            <div class="stock-item">Акции</div>
            <div class="stock-container">
                <div class="container-item">
                    <div class="thumbanail">
                        <img src="./images/bridge_1.png" alt=""/>
                        <button>Добавить в корзину</button>
                    </div>
                    <div class="price">
                        <span> 145000<span class="p">p</span></span>
                        <span class="og-price">15400<span class="p">p</span></span>
                        <span class="sale">-7%</span>
                    </div>
                    <div class="title">Мостик декоративный кованый</div>
                </div>
                <div class="container-item">
                    <div class="thumbanail">
                        <img src="./images/flower_1.png" alt=""/>
                        <button>Добавить в корзину</button>
                    </div>
                    <div class="price">
                        <span> 145000<span class="p">p</span></span>
                        <span class="og-price">15400<span class="p">p</span></span>
                        <span class="sale">-7%</span>
                    </div>
                    <div class="title">Корзина с цветами</div>
                </div>
                <div class="container-item">
                    <div class="thumbanail">
                        <img src="./images/castle_1.png" alt=""/>
                        <button>Добавить в корзину</button>
                    </div>
                    <div class="price">
                        <span> 145000<span class="p">p</span></span>
                        <span class="og-price">15400<span class="p">p</span></span>
                        <span class="sale">-7%</span>
                    </div>
                    <div class="title">Замок для аквариума</div>
                </div>
            </div>
        </section>
    </main>
    <footer>
        <div class="container">
            <div class="left">
                <div class="kontackt">Контакты</div>
                <div class="phone">+7 999 999 99 99</div>
                <div class="social-netrwork">
                    <div class="social-netrwork-item">
                        <img class="item-inst" src="./images/instagram 3.png" alt=""/>
                        <p class="item-instag">instagram</p>
                    </div>
                    <div class="social-netrwork-item">
                        <img  src="./images/whatsapp 1.png" alt=""/>
                        <p class="item-whatsapp">WhatsApp</p>
                    </div>
                </div>
            </div>
            <div class="rigth">
                <div class="adress">Адрес</div>
                <div class="city">г. Космонавтов <p >проезд Космонавтов, д.11 </p>  </div>
                <div class="work-regim"> Режим работы  <p class="work-regim2">Круглосуточно</p> </div>
            </div>
        </div>
    </footer>
  </div>
  
);

