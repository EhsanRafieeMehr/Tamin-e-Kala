import './PopularProducts.css';
import ProductsCounter from './ProductsCounter';
function PopularProducts() {
	return (
		<section className="popular-products">
			<div className="background__svg"></div>
			<div className="products-category">
				<h2 className="category__title">محصولات منتخب</h2>
				<p className="category__description">خرید به صرفه ، در کمترین زمان ممکن</p>
				<div className="category__buttons">
					<button className="category__button category__button--active">کالاهای گاز رسانی</button>
					<button className="category__button">مصالح ساختمانی</button>
				</div>
			</div>
			<div className="cart">
				<p className="quantity">
					۲ <span>محصول</span>
				</p>
				<p className="price">
					<span>تومان</span>
					۵/۲۰۰/۰۰۰
				</p>
			</div>
			<div className="products__container">
				<div className="products__item">
					<img src="/img/p1.png" alt="کاپلر مدل 250 سانت" className="products__item__image" />
					<div className="products__item__info">
						<h3 className="products__item__info__title">کاپلر مدل 250 سانت</h3>
						<div className="products__item__info__desc">
							<span className="products__item__info__desc__number">هر عدد:</span>
							<p className="products__item__info__desc__price">
								<span>تومان</span>
								۴/۵۲۰/۰۰۰
							</p>
						</div>
						<div>
							<ProductsCounter unit={'عدد'} />
						</div>
					</div>
				</div>
				<div className="products__item">
					<img src="/img/p2.png" alt="نوار زرد اخطار 25 سانت" className="products__item__image" />
					<div className="products__item__info">
						<h3 className="products__item__info__title">نوار زرد اخطار 25 سانت</h3>
						<div className="products__item__info__desc">
							<span className="products__item__info__desc__number">هر عدد:</span>
							<p className="products__item__info__desc__price">
								<span>تومان</span>
								۵۲۰/۰۰۰
							</p>
						</div>
						<div>
							<ProductsCounter unit={'عدد'} />
						</div>
					</div>
				</div>
				<div className="products__item">
					<img src="/img/p3.png" alt="شیر فلکه 100 عددی" className="products__item__image" />
					<div className="products__item__info">
						<h3 className="products__item__info__title">شیر فلکه 100 عددی</h3>
						<div className="products__item__info__desc">
							<span className="products__item__info__desc__number">قیمت کل:</span>
							<p className="products__item__info__desc__price">
								<span>تومان</span>
								۱/۵۲۰/۰۰۰
							</p>
						</div>
						<div>
							<ProductsCounter unit={'عدد'} />
						</div>
					</div>
				</div>
				<div className="products__item">
					<img src="/img/p4.png" alt="نوار بیتوسل" className="products__item__image" />
					<div className="products__item__info">
						<h3 className="products__item__info__title">نوار بیتوسل</h3>
						<div className="products__item__info__desc">
							<span className="products__item__info__desc__number">هر رول:</span>
							<p className="products__item__info__desc__price">
								<span>تومان</span>
								۷۳۳/۰۰۰
							</p>
						</div>
						<div>
							<ProductsCounter unit={'رول'} />
						</div>
					</div>
				</div>
				<div className="products__item">
					<img src="/img/p5.png" alt="سه راهی 25 سانت" className="products__item__image" />
					<div className="products__item__info">
						<h3 className="products__item__info__title">سه راهی 25 سانت</h3>
						<div className="products__item__info__desc">
							<span className="products__item__info__desc__number">هر عدد:</span>
							<p className="products__item__info__desc__price">
								<span>تومان</span>
								۲۰/۰۰۰
							</p>
						</div>
						<div>
							<ProductsCounter unit={'عدد'} />
						</div>
					</div>
				</div>
				<div className="products__item">
					<img src="/img/p1.png" alt="کاپلر مدل 250 سانت" className="products__item__image" />
					<div className="products__item__info">
						<h3 className="products__item__info__title">کاپلر مدل 250 سانت</h3>
						<div className="products__item__info__desc">
							<span className="products__item__info__desc__number">هر عدد:</span>
							<p className="products__item__info__desc__price">
								<span>تومان</span>
								۴/۵۲۰/۰۰۰
							</p>
						</div>
						<div>
							<ProductsCounter unit={'عدد'} />
						</div>
					</div>
				</div>
				<div className="products__item">
					<img src="/img/p2.png" alt="نوار زرد اخطار 25 سانت" className="products__item__image" />
					<div className="products__item__info">
						<h3 className="products__item__info__title">نوار زرد اخطار 25 سانت</h3>
						<div className="products__item__info__desc">
							<span className="products__item__info__desc__number">هر عدد:</span>
							<p className="products__item__info__desc__price">
								<span>تومان</span>
								۵۲۰/۰۰۰
							</p>
						</div>
						<div>
							<ProductsCounter unit={'عدد'} />
						</div>
					</div>
				</div>
				<div className="products__item">
					<img src="/img/p3.png" alt="شیر فلکه 100 عددی" className="products__item__image" />
					<div className="products__item__info">
						<h3 className="products__item__info__title">شیر فلکه 100 عددی</h3>
						<div className="products__item__info__desc">
							<span className="products__item__info__desc__number">قیمت کل:</span>
							<p className="products__item__info__desc__price">
								<span>تومان</span>
								۱/۵۲۰/۰۰۰
							</p>
						</div>
						<div>
							<ProductsCounter unit={'عدد'} />
						</div>
					</div>
				</div>
				<div className="products__item">
					<img src="/img/p4.png" alt="نوار بیتوسل" className="products__item__image" />
					<div className="products__item__info">
						<h3 className="products__item__info__title">نوار بیتوسل</h3>
						<div className="products__item__info__desc">
							<span className="products__item__info__desc__number">هر رول:</span>
							<p className="products__item__info__desc__price">
								<span>تومان</span>
								۷۳۳/۰۰۰
							</p>
						</div>
						<div>
							<ProductsCounter unit={'رول'} />
						</div>
					</div>
				</div>
				<div className="products__item">
					<img src="/img/p5.png" alt="سه راهی 25 سانت" className="products__item__image" />
					<div className="products__item__info">
						<h3 className="products__item__info__title">سه راهی 25 سانت</h3>
						<div className="products__item__info__desc">
							<span className="products__item__info__desc__number">هر عدد:</span>
							<p className="products__item__info__desc__price">
								<span>تومان</span>
								۲۰/۰۰۰
							</p>
						</div>
						<div>
							<ProductsCounter unit={'عدد'} />
						</div>
					</div>
				</div>
				<button className="show-more">
					<span className="text">نمایش بیشتر</span>
					<svg
						width="19"
						height="9"
						viewBox="0 0 19 9"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M9.3122 7.68645C9.23587 7.68739 9.16019 7.6721 9.09002 7.64155C9.01986 7.611 8.95676 7.56587 8.9048 7.50907L3.66679 2.18764C3.43399 1.95113 3.43399 1.58454 3.66679 1.34804C3.89959 1.11153 4.26043 1.11153 4.49323 1.34804L9.32384 6.25558L14.1428 1.35986C14.3756 1.12335 14.7364 1.12335 14.9692 1.35986C15.202 1.59637 15.202 1.96296 14.9692 2.19946L9.73124 7.52089C9.61484 7.63915 9.46352 7.69827 9.32384 7.69827L9.3122 7.68645Z"
							fill="#333333"
						/>
					</svg>
				</button>
			</div>
		</section>
	);
}

export default PopularProducts;
