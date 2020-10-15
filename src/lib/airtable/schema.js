/*
    THIS IS A GENERATED FILE
    Changes might be overwritten in the future, edit with caution!
*/

export const Tables = {
	AdminUsers: 'Admin Users',
	Farms: 'Farms',
	HarvestLogs: 'Harvest Logs',
	PlantingLogs: 'Planting Logs',
	Crops: 'Crops',
};

export const Columns = {
	"Admin Users": {
		name: {name:`name`, type:`text`},
		passwordhash: {name:`passwordhash`, type:`text`},
		email: {name:`email`, type:`text`},
		organization: {name:`organization`, type:`select`},
	},
	"Farms": {
		farm_id: {name:`farm_id`, type:`formula`},
		name: {name:`name`, type:`text`},
		harvest_logIds: {name:`harvest_logs`, type:`foreignKey-many`},
		contact: {name:`contact`, type:`text`},
		address: {name:`address`, type:`text`},
		photo: {name:`photo`, type:`multipleAttachment`},
	},
	"Harvest Logs": {
		id: {name:`id`, type:`formula`},
		farm_idId: {name:`farm_id`, type:`foreignKey-one`},
		planting_idId: {name:`planting_id`, type:`foreignKey-one`},
		dateCreated: {name:`Date Created`, type:`date`},
		crop_iIds: {name:`crop_id`, type:`foreignKey-many`},
	},
	"Planting Logs": {
		id: {name:`ID`, type:`formula`},
		harvest_logIds: {name:`harvest_logs`, type:`foreignKey-many`},
		containers_cleaned: {name:`containers_cleaned`, type:`checkbox`},
		equipment_harvest: {name:`equipment_harvest`, type:`checkbox`},
		planting_dummy: {name:`planting_dummy`, type:`text`},
	},
	"Crops": {
		trackingNumber: {name:`Tracking Number`, type:`text`},
		variety: {name:`variety`, type:`multiSelect`},
		quantity: {name:`quantity`, type:`number`},
		location: {name:`location`, type:`text`},
		employee_initials: {name:`employee_initials`, type:`text`},
		measurement: {name:`measurement`, type:`text`},
		cropType: {name:`Crop type`, type:`select`},
		harvestLogsId: {name:`Harvest Logs`, type:`foreignKey-one`},
	},
};
