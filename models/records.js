
var recordA = {
	id : 1, 
	title : 'record1',
	user:  'user'
};

var recordB = {
	id : 2, 
	title : 'record2',
	user:  'user'
};

function findRecords() {       
     return [recordA, recordB];
     /*
		{
		id : 1, 
		title : 'record1',
		user:  'user'
		}
		,
		{
		id : 2, 
		title : 'record2',
		user:  'user
		}		
     
     };   */
        
}



module.exports = {findRecords};