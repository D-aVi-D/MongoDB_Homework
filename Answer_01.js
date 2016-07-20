db.BinaryCollection.find({
	scores: {
		$elemMatch: {
			$and: [{score: {$gt: 87}},{score: {$lt: 93}}]
		}
	}
}).pretty()