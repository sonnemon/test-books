import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchListBooks } from '../../actions';
import Book from '../../components/Book';

class Home extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.callData();
		console.log('props', this.props);
	}
	callData() {
		this.props.fetchListBooks();
	}
	render() {
		return (
			<section className="section">
				<div className="container">
					<div className="header-books">
						<div className="title-book">
							<h1 className="title has-text-danger title-book">
								Best sellers all times
							</h1>
						</div>
						<div className="search-book">
							<div class="field">
								<div class="control has-icons-right">
									<input
										class="input"
										type="text"
										placeholder="Buscar..."
										value="bulma"
									/>
									<span class="icon is-small is-right">
										<i class="fas fa-search" />
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div class="columns is-multiline">
						{this.props.listBooks.map((book) => {
							return <Book {...book} />;
						})}
					</div>
				</div>
			</section>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		...state.app
	};
};

const mapDispatchToProps = {
	fetchListBooks
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
