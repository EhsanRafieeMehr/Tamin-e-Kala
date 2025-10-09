import React from 'react';
import './Providers.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Grid, Navigation } from 'swiper/modules';
function Providers() {
	return (
		<section className="providers">
			<h2 className="providers__title">کارخانه جات تامین کننده</h2>
			<p className="providers__description">بهترین ها را برای شما گرد هم آوردیم</p>
			<Swiper
				navigation={true}
				modules={[Grid, Navigation]}
				className="myProvidersSwiper"
				spaceBetween={40}
				slidesPerView={2}
				loop={true}
				grid={{
					fill: 'row',
					rows: 2,
				}}
				breakpoints={{
					0: { slidesPerView: 2, grid: { rows: 2 } },
					640: { slidesPerView: 'auto', grid: { rows: 1 } },
					1024: { slidesPerView: 'auto', grid: { rows: 1 } },
				}}
			>
				<SwiperSlide className="providersSlide">
					<img className="providers__item__img" src="img/pro1.png" alt="شرکت سیمان صوفیان" />
					<p className="providers__item__name">شرکت سیمان صوفیان</p>
				</SwiperSlide>
				<SwiperSlide className="providersSlide">
					<img className="providers__item__img" src="img/pro2.png" alt="شرکت فولاد کاوه" />
					<p className="providers__item__name">شرکت فولاد کاوه</p>
				</SwiperSlide>
				<SwiperSlide className="providersSlide">
					<img className="providers__item__img" src="img/pro333.png" alt="شرکت سیمان صوفیان" />
					<p className="providers__item__name">شرکت قطران ساوه</p>
				</SwiperSlide>
				<SwiperSlide className="providersSlide">
					<img className="providers__item__img" src="img/pro4.svg" alt="شرکت سیمان صوفیان" />
					<p className="providers__item__name">شرکت پارس پلاستیک</p>
				</SwiperSlide>
				<SwiperSlide className="providersSlide">
					<img className="providers__item__img" src="img/pro5.svg" alt="شرکت سیمان صوفیان" />
					<p className="providers__item__name">شرکت انوشا پرشیا</p>
				</SwiperSlide>
				<SwiperSlide className="providersSlide">
					<img className="providers__item__img" src="img/pro6.png" alt="شرکت سیمان صوفیان" />
					<p className="providers__item__name">شرکت سپاهان اصفهان</p>
				</SwiperSlide>
				<SwiperSlide className="providersSlide">
					<img className="providers__item__img" src="img/pro1.png" alt="شرکت سیمان صوفیان" />
					<p className="providers__item__name">شرکت سیمان صوفیان</p>
				</SwiperSlide>
				<SwiperSlide className="providersSlide">
					<img className="providers__item__img" src="img/pro2.png" alt="شرکت فولاد کاوه" />
					<p className="providers__item__name">شرکت فولاد کاوه</p>
				</SwiperSlide>
				<SwiperSlide className="providersSlide">
					<img className="providers__item__img" src="img/pro333.png" alt="شرکت سیمان صوفیان" />
					<p className="providers__item__name">شرکت قطران ساوه</p>
				</SwiperSlide>
				<SwiperSlide className="providersSlide">
					<img className="providers__item__img" src="img/pro4.svg" alt="شرکت سیمان صوفیان" />
					<p className="providers__item__name">شرکت پارس پلاستیک</p>
				</SwiperSlide>
				<SwiperSlide className="providersSlide">
					<img className="providers__item__img" src="img/pro5.svg" alt="شرکت سیمان صوفیان" />
					<p className="providers__item__name">شرکت انوشا پرشیا</p>
				</SwiperSlide>
				<SwiperSlide className="providersSlide">
					<img className="providers__item__img" src="img/pro6.png" alt="شرکت سیمان صوفیان" />
					<p className="providers__item__name">شرکت سپاهان اصفهان</p>
				</SwiperSlide>
			</Swiper>
		</section>
	);
}

export default Providers;
