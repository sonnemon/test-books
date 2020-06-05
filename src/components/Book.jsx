import React from 'react';

export default function Book({ title, description, authorId, author = '' }) {
	return (
		<div class="column is-full">
			<div className="container-book">
				<div className="title-single-book">
					<div>
						<h3 className="is-5 subtitle">{title}</h3>
					</div>
					<div>
						<span class="tag is-primary">{`AUTHORID: ${authorId}`}</span>
					</div>
				</div>

				<h3 className="is-6 subtitle">{author}</h3>
				<p>{description}</p>
				<div className="link">
					<a className="show" href="">
						SHOW BOOK
					</a>
				</div>
			</div>
		</div>
	);
}
