<template>
    <div class="video">
    <video autoplay muted loop>
                    <source src="../base/video/intro3.MOV" type="video/mp4">
                    Ваш браузер не поддерживает видео.
    </video>
    </div>

    <div class="home" id="gsap">
        <div class="info" id="gsap2">
            <div class="info-prev">
                <div class="info-logo">
                    <img src="../base/images/logo.jpg" alt="">
                </div>
            </div>
            <div class="main-info" id="gsap3">

                <div class="Unit" id="target">
                    <div class="Unit_img ">
                        <img src="../base/images/Unit-imgs/нагиев.webp" alt="">
                    </div>
                    <div class="Unit-text ">
                        <div class="Unit-title">
                            Владелец
                        </div>
                        <div class="Unit-subtitle">
                            Дмитрий Владимирович Нагиев
                        </div>
                        <div class="Unit-desc">
                            «Очень хороший фильм. Я сценарий прочитал — ничего не понял, вообще ничего!»឵឵឵឵឵឵ — ©Дмитрий Нагиев(актер и владелец ресторана claude monet)
                        </div>
                    </div>
                </div>

                <div class="Unit" id="target">
                    <div class="Unit_img bc-red">
                        <img src="../base/images/Unit-imgs/шеф.webp" alt="">
                    </div>
                    <div class="Unit-text bc-red">
                        <div class="Unit-title">
                            Шеф-повар
                        </div>
                        <div class="Unit-subtitle">
                            Виктор Петрович Баринов
                        </div>
                        <div class="Unit-desc">
                            «Известный шеф-повар Поль Бокюз однажды сказал: "Жизнь — это маленькая кухня, на которой мы готовим блюда под названием ,,счастье''.  На этой кухне мы сами себе шеф-повара, и только нам решать, какие ингредиенты мы будем добавлять в наши блюда. Важно помнить, что универсального рецепта нет, поэтому творите, пробуйте что-то новое. И, может быть, тогда, в конце, вас будет ждать награда".»
                        </div>
                    </div>
                </div>

                <div class="Unit" id="target">
                    <div class="Unit_img bc-orange">
                        <img src="../base/images/Unit-imgs/вика.webp" alt="">
                    </div>
                    <div class="Unit-text bc-orange">
                        <div class="Unit-title">
                            Директор
                        </div>
                        <div class="Unit-subtitle">
                            Виктория Сергеевна Гончарова
                        </div>
                        <div class="Unit-desc">
                            Красивая, уверенная в себе и независимая женщина. Она любит дорого и элегантно одеваться, поэтому почти каждый день на ней разный наряд.
                        </div>
                    </div>
                </div>

                <Swiper
    :modules="[Pagination, Autoplay]"
    :slides-per-view="1"
    :loop="true"
    :speed="1000"
    :autoplay="{ delay: 3000}"
    pagination
    class="mySwiper"
  >
    <SwiperSlide>
      <img src="../base/images/slider3.jpg" alt="Слайд 1" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="../base/images/slider2.jpg" alt="Слайд 2" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="../base/images/slider1.webp" alt="Слайд 3" />
    </SwiperSlide>
  </Swiper>
            <div class="grid_wrapper">
                <div class="Unit mini" id="target2">
                    <div class="Unit_img">
                        <img src="../base/images/Unit-imgs/лева.webp" alt="">
                    </div>
                    <div class="Unit-text">
                        <div class="Unit-title">
                            Су-шеф
                        </div>
                        <div class="Unit-subtitle">
                            Лев Семёнович Соловьёв
                        </div>
                        <div class="Unit-desc">
                            су-шеф ресторана Claude Monet при Викторе Баринове и некоторое время при Германе. Всё время заикается, но это не мешало ему быть лучшим су-шефом Claude Monet.
                        </div>
                    </div>
                </div>

                <div class="Unit mini" id="target2">
                    <div class="Unit_img">
                        <img src="../base/images/Unit-imgs/макс.webp" alt="">
                    </div>
                    <div class="Unit-text">
                        <div class="Unit-title">
                            Повар
                        </div>
                        <div class="Unit-subtitle">
                            Максим Леонидович Лавров (Огузок)
                        </div>
                        <div class="Unit-desc">
                            «Вот как-то так. У каждой медали есть две стороны, и однажды все может перевернуться. Тот, кому ты нравился — начинает тебя ненавидеть. Тот, кому ты бил морду — становится твоим другом. Ну а тот, кто казался злобным тираном — становится им чуть меньше» — ©Огузок
                        </div>
                    </div>
                </div>

                <div class="Unit mini" id="target2">
                    <div class="Unit_img">
                        <img src="../base/images/Unit-imgs/сеня.webp" alt="">
                    </div>
                    <div class="Unit-text">
                        <div class="Unit-title">
                            Повар
                        </div>
                        <div class="Unit-subtitle">
                            Сеня
                        </div>
                        <div class="Unit-desc">
                            «Хлебать мой суп!»឵឵឵឵឵ — ©Сеня 
                        </div>
                    </div>
                </div>

                <div class="Unit mini" id="target2">
                    <div class="Unit_img">
                        <img src="../base/images/Unit-imgs/федя.webp" alt="">
                    </div>
                    <div class="Unit-text">
                        <div class="Unit-title">
                            Повар
                        </div>
                        <div class="Unit-subtitle">
                            Фёдор Михайлович Юрченко 
                        </div>
                        <div class="Unit-desc">
                            Специалист по рыбе. Вместе со своим лучшим другом Сеней постоянно подшучивает над персоналом
                        </div>
                    </div>
                </div>

                <div class="Unit mini" id="target2">
                    <div class="Unit_img">
                        <img src="../base/images/Unit-imgs/луи.webp" alt="">
                    </div>
                    <div class="Unit-text">
                        <div class="Unit-title">
                            Кондитер-пекарь
                        </div>
                        <div class="Unit-subtitle">
                            Луи Бенуа 
                        </div>
                        <div class="Unit-desc">
                            Прибыл из Прованса (Франция), лучший в своем деле.
                        </div>
                    </div>
                </div>

                <div class="Unit mini" id="target2">
                    <div class="Unit_img bc-red">
                        <img src="../base/images/Unit-imgs/айнура.webp" alt="">
                    </div>
                    <div class="Unit-text bc-red">
                        <div class="Unit-title">
                            Уборщик
                        </div>
                        <div class="Unit-subtitle">
                            Айнура Жаннатбековна Кененсарова
                        </div>
                        <div class="Unit-desc">
                            красивая, уверенная в себе и независимая женщина. Она любит дорого и элегантно одеваться, поэтому почти каждый день на ней разный наряд.
                        </div>
                    </div>
                </div>


            </div>
            <div class="Unit end" id="target3">
                    <div class="Unit_img bc-yellow">
                        <img src="../base/images/Unit-imgs/o1.webp" alt="">
                        <div class="Unit-text bc-yellow">
                            <div class="Unit-title">
                                Официант
                            </div>
                            <div class="Unit-subtitle">
                                Анастасия Степановна Анисимова 
                            </div>
                        </div>
                    </div>
                    <div class="Unit_img bc-yellow">
                        <img src="../base/images/Unit-imgs/02.webp" alt="">
                        <div class="Unit-text bc-yellow">
                        <div class="Unit-title">
                            Официант
                        </div>
                        <div class="Unit-subtitle">
                            Александра Павловна Бубнова 
                        </div>
                    </div>
                    </div>
                    <div class="Unit_img bc-yellow">
                        <img src="../base/images/Unit-imgs/03.webp" alt="">
                        <div class="Unit-text bc-yellow">
                            <div class="Unit-title">
                                Официант
                            </div>
                            <div class="Unit-subtitle">
                                Илья Владимирович Пелевин
                            </div>
                        </div>
                    </div>
                    <div class="Unit_img bc-red">
                        <img src="../base/images/Unit-imgs/o4.webp" alt="">
                        <div class="Unit-text bc-red">
                            <div class="Unit-title">
                                Хостес
                            </div>
                            <div class="Unit-subtitle">
                                Ангелина Денисовна Смирнова
                            </div>
                        </div>
                    </div>

                </div>

            <div class="ps">

                Claude Monet — московский ресторан французской кухни, главное место действия 1—4 сезонов сериала «Кухня».
                Ресторан был открыт актёром и шоуменом Дмитрием Нагиевым, в начале двухтысячных. Директором становится Виктория Сергеевна Гончарова. В 2004 году в ресторане появляется шеф-повар — друг Нагиева — Виктор Петрович Баринов. Через некоторое время ресторан становится самым престижным и лучшим в Москве, туда приходят работать множество поваров. 
                <br>
                <br>
                Адрес: Москва, улица Спиридонова, 25
                (В сериале — Малая Бронная, 25)
                <br>
                <br>
                <span>Claude Monet©</span>
            </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'

import { Navigation, Pagination, Autoplay } from 'swiper/modules'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {

  gsap.to("#gsap2", {
    scrollTrigger: {
      scrub: 1,
    },
    width: '300%',
    boxShadow: "none",
    scrub: true,
  })

})

onMounted(() => {
  gsap.utils.toArray("#target").forEach((el) => {
    gsap.fromTo(el,
      { opacity: 0.2, y: 100 },
      {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        scrollTrigger: {

          trigger: el,
          start: "top 80%",
          end: "top 30%",
          scrub: true, 
        },
      }
    )
  })
})
onMounted(() => {
  gsap.utils.toArray("#target2").forEach((el) => {
    gsap.fromTo(el,
      { opacity: 0.2, y: 100 },
      {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 100%",
          end: "top 60%",
          scrub: true, 
        },
      }
    )
  })
})
onMounted(() => {
  gsap.utils.toArray("#target3").forEach((el) => {
    gsap.fromTo(el,
      { opacity: 0.7, y: 50 },
      {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        gap:"85px",
    
        scrollTrigger: {
            scrub:2,
          trigger: el,
          start: "top 90%",
          end: "top 10%",
          scrub: true, 
        },
      }
    )
  })
})
</script>

<style scoped>
    body{
        align-items: center;

    }
    .home{
        
        display: inline-grid;
    }
    .info{
        margin-left: 0;
        margin-right: 0;
        margin-bottom: 0;
        display: grid;
        align-items: center;
        justify-self: center;
        font-size: 22px;
        margin-top: 540px;
        background-color: #ffffff3b;
        backdrop-filter: blur(20px);
        color: rgb(0, 0, 0);
        width:60%;
        max-width: 100%;
        height:fit-content;

        box-shadow:rgb(182, 182, 182) 0px 0px 10px;
    }
    .grid_wrapper{
    display: inline-grid;
    justify-content: center;
    gap: 10px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;

}

    hr{
        width: 90%;
    }
    .main-info{
        padding: 35px;
        display: grid;
        justify-self: center;
    }
    .info-prev{
        margin: 0;
        padding: 0;
        width: 100%;
        height:250px;
        background-color: #1f4b27;
        display: inline-grid;
        justify-content: center;
    }
    .info-prev>.info-logo>img{
        height: 250px;
    }
    .video{
        display: flex;
        position: fixed;
        z-index: -1;
        top: 0;
        left: 0;
        height: 1071.8px;
    }
    .info>.main-info>img{
        justify-self: center;
        display: flex;
        margin-top: 10px;
        padding: 0;

        margin-bottom: 10px;
        /* height: 420px; */
        width: 100%;
    }
    .Unit{
        justify-self: center;
        display: flex;
        max-width: 90%;
        background-color: #ffffffa1;
        backdrop-filter: blur(20px);
        padding: 20px;
        box-shadow: 0px 0px 15px 0px #e6e6e6c9;
        border-radius: 20px;
        margin-bottom: 30px;
    }
    .Unit_img:hover{
        scale: 1.05;
        transition: 0.5s;
    }
    .Unit_img:not(:hover){
        transition: 0.3s;
    }
    .Unit-text:hover{
        scale: 1.03;
        transition: 0.5s;
    }
    .Unit-text:not(:hover){
        transition: 0.3s;
    }
    .Unit_img{
        min-width: 300px;
        height: 300px;
        box-shadow: #727272 0px 0px 5px 0px;
        border-radius: 12px;
        border: 3px solid #337c41;

    }
    .Unit_img>img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 0 0;
        border-radius: 10px;
    }
    .Unit-text{
        padding: 40px;
        margin-left: 30px;
        width: 100%;
        background-color: #ffffff;
        border-radius:20px ;
        border: 3px solid #337c41;
    }
    .Unit-title{
        font-weight: bolder;
        font-size: 24px;
    }
    .Unit-subtitle{
        font-weight:bold;
        font-size: 16px;
        color: #252525;
    }
    .Unit-desc{
        margin-top: 10px;
        color: #5a5a5a;
        font-size: 18px;

    }
    .mySwiper {
  width: 90%;
  height: 700px;
  margin-bottom: 40px;
  margin-top: 20px;
  box-shadow: 0px 0px 15px 0px #e6e6e6c9;
}

.mySwiper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* border-radius: 10px; */
}
.mini{
    width: 45%;
}
.mini>.Unit-text>.Unit-desc{
    font-size: 14px;

}
.end{
    height: 420px;
    margin-top: 40px;
    display: flex;
    gap:0px;
    justify-content: center;
}
.end>.Unit_img{
    min-width: 230px;
    min-height: 200px;
}
.end>.Unit_img>.Unit-text{
    min-height: 44px;
    margin-top: 10px;
    margin-left: 0;
    padding: 10px;
    border-radius: 10px;
}
.end>.Unit_img>.Unit-text>.Unit-title{
    font-size: 15px;
}
.end>.Unit_img>.Unit-text>.Unit-subtitle{
font-size: 12px;

}
.ps{
    text-align: center;
    justify-self: center;
    color: #ffffffa1;
    padding-top: 130px;
    padding-bottom: 20px;
    font-size: 12px;
    width: 650px;
}



.bc-yellow{
    border-color: rgb(255, 240, 25);
}
.bc-red{
    border-color: rgb(172, 34, 34);
}
.bc-orange{
    border-color: rgb(253, 179, 41);
}

</style>