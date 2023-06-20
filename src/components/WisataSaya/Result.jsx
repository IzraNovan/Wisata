const Result = ({ data }) => {
	return (
		<div className='wrap-result'>
			{data.map((item, id) => {
				return (
					<div
						key={id}
						className='result-card'>
						<div dangerouslySetInnerHTML={{ __html: item.textEditor }}></div>
					</div>
				);
			})}
		</div>
	);
};

export default Result;
