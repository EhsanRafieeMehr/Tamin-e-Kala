import { useEffect } from 'react';
import './Blog.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

function Blog() {
	return (
		<section className="blog">
			<svg
				className="bcg"
				width="329"
				height="306"
				viewBox="0 0 329 306"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g opacity="0.15">
					<circle
						cx="13.8077"
						cy="13.8077"
						r="13.8077"
						transform="matrix(-1 0 0 1 276.152 0)"
						fill="#D9D9D9"
					/>
					<circle
						cx="13.8077"
						cy="13.8077"
						r="13.8077"
						transform="matrix(-1 0 0 1 276.152 92.7876)"
						fill="#D9D9D9"
					/>
					<circle
						cx="13.8077"
						cy="13.8077"
						r="13.8077"
						transform="matrix(-1 0 0 1 276.152 185.575)"
						fill="#D9D9D9"
					/>
					<circle
						cx="13.8077"
						cy="13.8077"
						r="13.8077"
						transform="matrix(-1 0 0 1 276.152 278.363)"
						fill="#D9D9D9"
					/>
					<circle
						cx="13.8077"
						cy="13.8077"
						r="13.8077"
						transform="matrix(-1 0 0 1 193.309 0)"
						fill="#D9D9D9"
					/>
					<circle
						cx="13.8077"
						cy="13.8077"
						r="13.8077"
						transform="matrix(-1 0 0 1 193.309 92.7876)"
						fill="#D9D9D9"
					/>
					<circle
						cx="13.8077"
						cy="13.8077"
						r="13.8077"
						transform="matrix(-1 0 0 1 193.309 185.575)"
						fill="#D9D9D9"
					/>
					<circle
						cx="13.8077"
						cy="13.8077"
						r="13.8077"
						transform="matrix(-1 0 0 1 193.309 278.363)"
						fill="#D9D9D9"
					/>
					<circle
						cx="13.8077"
						cy="13.8077"
						r="13.8077"
						transform="matrix(-1 0 0 1 110.461 0)"
						fill="#D9D9D9"
					/>
					<circle
						cx="13.8077"
						cy="13.8077"
						r="13.8077"
						transform="matrix(-1 0 0 1 110.461 92.7876)"
						fill="#D9D9D9"
					/>
					<circle
						cx="13.8077"
						cy="13.8077"
						r="13.8077"
						transform="matrix(-1 0 0 1 27.6172 0)"
						fill="#D9D9D9"
					/>
					<circle
						cx="13.8077"
						cy="13.8077"
						r="13.8077"
						transform="matrix(-1 0 0 1 27.6172 92.7876)"
						fill="#D9D9D9"
					/>
				</g>
			</svg>
			<h2 className="blog__title">بلاگ تامین کالا</h2>
			<p className="blog__description">آخرین اخبار و مقالات</p>

			<div className="blog-section">
				<Swiper
					navigation={true}
					modules={[Navigation]}
					slidesPerView={'auto'}
					spaceBetween={80}
					loop={true}
					className="blog-swiper"
					breakpoints={{
						1280: {
							slidesPerView: 3,
							spaceBetween: 60,
						},
					}}
				>
					<SwiperSlide className="card">
						<img className="card__image" src="img/c1.png" alt=" عکس ساخت و ساز" />
						<h3 className="card__title">راهنمای خرید محصولات ساختمانی برای شروع ساخت و ساز!</h3>
						<p className="card__category">دسته بندی : ساختمانی</p>
						<p className="card__content">
							ابتدا نیاز است که برای ساخت و ساز ساختمان، بررسی و برنامه‌ریزی دقیقی انجام دهید. این
							شامل مطالعه و تحلیل نقشه‌ها، محاسبه هزینه‌ها و تعیین زمانبندی پروژه است.
						</p>
						<button className="card__button">ادامه مطلب</button>
					</SwiperSlide>
					<SwiperSlide className="card">
						<img className="card__image" src="img/c2.png" alt=" عکس ساخت و ساز" />
						<h3 className="card__title">فاکتور های مورد نیاز هر ساختمان</h3>
						<p className="card__category">دسته بندی : ساختمانی</p>
						<p className="card__content">
							ابتدا نیاز است که برای ساخت و ساز ساختمان، بررسی و برنامه‌ریزی دقیقی انجام دهید. این
							شامل مطالعه و تحلیل نقشه‌ها، محاسبه هزینه‌ها و تعیین زمانبندی پروژه است.
						</p>
						<button className="card__button">ادامه مطلب</button>
					</SwiperSlide>
					<SwiperSlide className="card">
						<img className="card__image" src="img/c3.png" alt=" عکس ساخت و ساز" />
						<h3 className="card__title">راهنمای خرید محصولات ساختمانی برای شروع ساخت و ساز!</h3>
						<p className="card__category">دسته بندی : ساختمانی</p>
						<p className="card__content">
							ابتدا نیاز است که برای ساخت و ساز ساختمان، بررسی و برنامه‌ریزی دقیقی انجام دهید. این
							شامل مطالعه و تحلیل نقشه‌ها، محاسبه هزینه‌ها و تعیین زمانبندی پروژه است.
						</p>
						<button className="card__button">ادامه مطلب</button>
					</SwiperSlide>
					<SwiperSlide className="card">
						<img className="card__image" src="img/c1.png" alt=" عکس ساخت و ساز" />
						<h3 className="card__title">راهنمای خرید محصولات ساختمانی برای شروع ساخت و ساز!</h3>
						<p className="card__category">دسته بندی : ساختمانی</p>
						<p className="card__content">
							ابتدا نیاز است که برای ساخت و ساز ساختمان، بررسی و برنامه‌ریزی دقیقی انجام دهید. این
							شامل مطالعه و تحلیل نقشه‌ها، محاسبه هزینه‌ها و تعیین زمانبندی پروژه است.
						</p>
						<button className="card__button">ادامه مطلب</button>
					</SwiperSlide>
					<SwiperSlide className="card">
						<img className="card__image" src="img/c2.png" alt=" عکس ساخت و ساز" />
						<h3 className="card__title">فاکتور های مورد نیاز هر ساختمان</h3>
						<p className="card__category">دسته بندی : ساختمانی</p>
						<p className="card__content">
							ابتدا نیاز است که برای ساخت و ساز ساختمان، بررسی و برنامه‌ریزی دقیقی انجام دهید. این
							شامل مطالعه و تحلیل نقشه‌ها، محاسبه هزینه‌ها و تعیین زمانبندی پروژه است.
						</p>
						<button className="card__button">ادامه مطلب</button>
					</SwiperSlide>
					<SwiperSlide className="card">
						<img className="card__image" src="public\img\c3.png" alt=" عکس ساخت و ساز" />
						<h3 className="card__title">راهنمای خرید محصولات ساختمانی برای شروع ساخت و ساز!</h3>
						<p className="card__category">دسته بندی : ساختمانی</p>
						<p className="card__content">
							ابتدا نیاز است که برای ساخت و ساز ساختمان، بررسی و برنامه‌ریزی دقیقی انجام دهید. این
							شامل مطالعه و تحلیل نقشه‌ها، محاسبه هزینه‌ها و تعیین زمانبندی پروژه است.
						</p>
						<button className="card__button">ادامه مطلب</button>
					</SwiperSlide>
				</Swiper>
				<button className="more">
					مشاهده بیشتر
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							opacity="0.5"
							d="M20 12.75C20.1989 12.75 20.3897 12.671 20.5303 12.5303C20.671 12.3897 20.75 12.1989 20.75 12C20.75 11.8011 20.671 11.6103 20.5303 11.4697C20.3897 11.329 20.1989 11.25 20 11.25L20 12.75ZM20 11.25L4 11.25L4 12.75L20 12.75L20 11.25Z"
							fill="#222222"
						/>
						<path
							d="M10 6L4 12L10 18"
							stroke="#222222"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
			</div>
		</section>
	);
}

export default Blog;
