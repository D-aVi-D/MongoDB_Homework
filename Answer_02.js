/* Вариант №1 */

db.BinaryCollection.aggregate([
	{$unwind: "$scores"},
	{$match: {
		$and: [{"scores.type": "exam"}, {"scores.score": {$gt: 90}}]
	}}
]).pretty()


/*Вариант №2 с 'Project'*/

db.BinaryCollection.aggregate([
	{$unwind: "$scores"},
	{$match: {
		$and: [{"scores.type": "exam"}, {"scores.score": {$gt: 90}}]
	}},
	{$project:{
		_id: 0,
		name: {$toUpper: "$name"},
		scores: 1
	}}
]).pretty()