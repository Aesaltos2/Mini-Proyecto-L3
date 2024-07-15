import "./HotelCard.css";
import star from "../../assets/StarIcon.svg"

function HotelCard(props) {
	return (
		<div className="hotelcard">
			<img className="card-img" src={props.photo} alt="hotel-pic" />
			<div className="line1">
				<div className="sub-line">
					{props.superHost && <p className="sh">SUPER HOST</p>}
					<p className="type">
						{props.type}
						{props.beds && ` . ${props.beds} beds`}
					</p>
				</div>
				<p className="rate">
					<span className="material-icons-round star_rate">
						<img className= "star-img" src={star} alt="" />
					</span>

					{props.rating}
				</p>
			</div>
			<p className="desc">{props.title}</p>
		</div>
	);
}

export default HotelCard;
