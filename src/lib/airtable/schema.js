/*
    THIS IS A GENERATED FILE
    Changes might be overwritten in the future, edit with caution!
*/

export const Tables = {
	AdminUsers: 'Admin Users',
	Farms: 'Farms',
	HarvestLogs: 'Harvest Logs',
	PlantingLogs: 'Planting Logs',
	Tomatos: 'Tomatos',
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
	},
	"Harvest Logs": {
		id: {name:`id`, type:`formula`},
		farm_idId: {name:`farm_id`, type:`foreignKey-one`},
		preharvest_idId: {name:`preharvest_id`, type:`foreignKey-one`},
		postharvest_id: {name:`postharvest_id`, type:`text`},
		date: {name:`date`, type:`date`},
		crop_links: {name:`crop_links`, type:`multiSelect`},
		tomato_logIds: {name:`tomato_logs`, type:`foreignKey-many`},
		field8: {name:`Field 8`, type:`text`},
	},
	"Planting Logs": {
		preharvest_id: {name:`preharvest_id`, type:`formula`},
		toilets_located: {name:`toilets_located`, type:`checkbox`},
		unauthorized_entry: {name:`unauthorized_entry`, type:`checkbox`},
		physical_contamination: {name:`physical_contamination`, type:`checkbox`},
		crop_damage: {name:`crop_damage`, type:`checkbox`},
		drinking_water: {name:`drinking_water`, type:`checkbox`},
		isolated_contaminants: {name:`isolated_contaminants`, type:`checkbox`},
		harvest_logIds: {name:`harvest_logs`, type:`foreignKey-many`},
	},
	"Tomatos": {
		tracking_number: {name:`tracking_number`, type:`text`},
		variety: {name:`variety`, type:`multiSelect`},
		quantity: {name:`quantity`, type:`number`},
		location: {name:`location`, type:`text`},
		employee_initials: {name:`employee_initials`, type:`text`},
		harvest_log_idId: {name:`harvest_log_id`, type:`foreignKey-one`},
		measurement: {name:`measurement`, type:`text`},
	},
};
