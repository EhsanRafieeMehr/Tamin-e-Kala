import React from 'react';
import './Consulting.css';
function Consulting() {
	return (
		<section className="Consulting">
			<h2 className="consulting__title">نیاز به مشاوره دارید؟</h2>
			<p className="consulting__description">لحظه به لحظه در کنار شما هستیم</p>
			<div className="consulting__btns">
				<a className="consulting__callbtn" href="tel:+9809128102505">
					۰۹۱۲۸۱۰۲۵۰۵
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M11.1222 5.102C10.9742 4.69922 10.6778 4.36832 10.2936 4.17716C9.90944 3.98601 9.46669 3.9491 9.05618 4.074C7.11018 4.674 5.75018 6.344 6.04218 8.276C6.36874 10.4203 7.09535 12.4841 8.18418 14.36C9.26135 16.2316 10.6735 17.8892 12.3502 19.25C13.8582 20.47 15.9742 20.134 17.4662 18.734C17.78 18.4394 17.9704 18.0368 17.999 17.6073C18.0276 17.1779 17.8922 16.7536 17.6202 16.42L16.5522 15.114C16.3383 14.8514 16.0504 14.6591 15.7258 14.5621C15.4013 14.4651 15.0551 14.4679 14.7322 14.57L12.2682 15.35L11.8382 14.906C11.2964 14.3441 10.8225 13.7205 10.4262 13.048C10.0415 12.3679 9.74196 11.6432 9.53418 10.89L9.36818 10.3L11.2682 8.55C11.5189 8.31721 11.6948 8.01515 11.7735 7.6822C11.8522 7.34924 11.8301 7.00041 11.7102 6.68L11.1242 5.104L11.1222 5.102ZM8.46818 2.162C9.36648 1.88716 10.3359 1.96626 11.1778 2.3831C12.0196 2.79995 12.6702 3.52296 12.9962 4.404L13.5822 5.98C13.8407 6.67239 13.8874 7.42602 13.7165 8.14505C13.5455 8.86408 13.1646 9.51604 12.6222 10.018L11.6422 10.92C11.7682 11.268 11.9382 11.666 12.1582 12.052C12.3782 12.432 12.6342 12.778 12.8682 13.06L14.1282 12.66C14.8326 12.4376 15.5876 12.4317 16.2954 12.6432C17.0031 12.8546 17.6312 13.2737 18.0982 13.846L19.1662 15.152C19.7597 15.8778 20.0556 16.8019 19.9939 17.7375C19.9323 18.673 19.5178 19.5503 18.8342 20.192C16.8462 22.058 13.6002 22.832 11.0942 20.804C9.22686 19.2891 7.65403 17.4438 6.45418 15.36C5.23948 13.2677 4.42874 10.9657 4.06418 8.574C3.58418 5.388 5.87018 2.962 8.46818 2.164V2.162Z"
							fill="white"
						/>
					</svg>
				</a>
			</div>
			<div className="consulting__collage">
				<figure className="collage__img-1">
					<img src="/img/cl1.png" alt="شخصی در حال مکالمه" />
				</figure>
				<figure className="collage__img-2">
					<img src="/img/cl2.png" alt="شخصی در حال مکالمه" />
				</figure>
				<figure className="collage__img-3">
					<img src="/img/cl3.png" alt="شخصی در حال مکالمه" />
				</figure>
			</div>
			<div className="stats__container">
				<div className="stats__item">
					<div className="stats__item__icon stats__item__icon-3">
						<p>۱۰۰+</p>
					</div>
					<div className="stats__item__desc">
						<p>کاربر فعال</p>
					</div>
				</div>
				<div className="stats__item">
					<div className="stats__item__icon stats__item__icon-2">
						<p>۲۰۰+</p>
					</div>
					<div className="stats__item__desc">
						<p>محصول مختلف</p>
					</div>
				</div>
				<div className="stats__item">
					<div className="stats__item__icon stats__item__icon-1">
						<p>۲۰+</p>
					</div>
					<div className="stats__item__desc">
						<p>شرکت تامین کننده</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Consulting;
