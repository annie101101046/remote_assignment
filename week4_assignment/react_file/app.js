const SideNav = (props) => {
	return (
	  <div id="mySidenav" className="sidenav">
		<a href="javascript:void(0)" className="closebtn"
		onClick={props.onCloseClick}
		>
		x
		</a>
		<a href="#">item1</a>
		<a href="#">item2</a>
		<a href="#">item3</a>
		<a href="#">item4</a>
	  </div>
	);
	}
	
	const Banner = (props) => {
	return(
		<div id ="banner"
		onClick = {props.onClick}
		>
 		 <p>{props.message}</p>
  	</div>
		);
	}
	
	const Second = () => {
		return(
	<div className="second">
  <p>second title</p>
	</div>
	);
}

  const Container = (props) => {
	return (
	  <div className ="container">
  
		<div className ="navbar">
		  <div className="topnav">
			<a className="active" href="#home">website</a>
			<a className="logo">
			  <img src="student.svg" />
			</a>

			<div className="topnav-right">
				<a href="#item1">item1</a>
				<a href="about">item2</a>
				<a href="#about">item3</a>
				<a href="#about">item4</a>
			</div>
		  </div>
		</div>

	
		<button className="mobile-nav-btn"
			onClick={props.onMenuClick}
		>
		<span style={{color:'white'}}>&#9776;</span>
		</button>
	  </div>
	);
	}

	const FlexContainer = (props) => {
		return (
		<div className="flex-container">
			{
				props.item.map((it, key) =>{
					return(
					<div key={key}>{it}</div>
					);
				})}
		</div>
		);
	}


	const AddButton = (props) => {
		return(
		<button type="button" 
		id ="call" 
		onClick={props.onClick}
		>
		call to cation
		
		</button>
		)
	}

	class Main extends React.Component{
		
		state = {
				item1: [1,2],
				item2: [3,4],
				show : false,
				mobileNav: false,
				message:'Welcome message'
		}

		buttonClickHandler = () => {
				const { show } = this.state;
				this.setState({
					 show: !show,
				});
		}

		toggleMobileNav = () =>{
			const { mobileNav } = this.state;
			this.setState({
				mobileNav: !mobileNav,
			});
		}

		bannerClick = () =>{
			this.setState({
				message:'Have a Good Time!',
			});
		}

		render =() => {
			const { item1, item2, show, mobileNav, message } = this.state;
			return(
				<div>
				{mobileNav && (<SideNav 
					onCloseClick={this.toggleMobileNav}
					/>
				)}
				<Container 
					onMenuClick={this.toggleMobileNav}
				/>
				<Banner 
					onClick={this.bannerClick}
					message={message} 
				/>
				<Second/>
				<FlexContainer item={item1}/>
				<FlexContainer item={item2}/>
				<AddButton onClick={this.buttonClickHandler} />
				{show && (
					<div>
					<FlexContainer item={item1}/>
					<FlexContainer item={item2}/>	
					</div>
				)}
			</div>
			);
		}
	}

  ReactDOM.render(
	<Main />,
	document.getElementById('root')
	);
	