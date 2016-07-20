db.BinaryCollection.update({
	'name': 'Dusti Lemmond'
},{
	$set: {
		'accepted': 'true'
	}
},{
	multi: true
})


/* Система отработала 2 записи. */