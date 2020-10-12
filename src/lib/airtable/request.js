/* eslint no-restricted-imports: 0 */
/* eslint-disable no-unused-vars */

/*
  THIS IS A GENERATED FILE
  Changes might be overwritten in the future, edit with caution!

  Wrapper functions around functions in airtable.js that interact with Airtable, designed
  to provide basic functionality

  If you're adding a new function: make sure you add a corresponding test (at least 1) for it in request.spec.js

*/

import { Tables, Columns } from './schema';
import {
  createRecord,
  updateRecord,
  getAllRecords,
  getRecordsByAttribute,
  getRecordById,
  deleteRecord
} from './airtable';

  /*
 ******* CREATE RECORDS *******
 */

export const createAdminUsers = async record => { 
    return createRecord(Tables.AdminUsers, record)
};

export const createFarms = async record => { 
    return createRecord(Tables.Farms, record)
};

export const createHarvestLogs = async record => { 
    return createRecord(Tables.HarvestLogs, record)
};

export const createPlantingLogs = async record => { 
    return createRecord(Tables.PlantingLogs, record)
};

export const createCrops = async record => { 
    return createRecord(Tables.Crops, record)
};

  /*
 ******* READ RECORDS *******
 */

export const getAdminUsersById = async id => { 
  return getRecordById(Tables.AdminUsers, id);
};

export const getAdminUsersByIds = async ids => {
  const formula = `OR(${ids.reduce((f, id) => `${f} {ID}='${id}',`, '')} 1 < 0)`;
  return getAllRecords(Tables.AdminUsers, formula)
}

export const getAllAdminUsers = async (filterByFormula = '', sort = []) => { 
  return getAllRecords(Tables.AdminUsers, filterByFormula, sort);
};

export const getFarmsById = async id => { 
  return getRecordById(Tables.Farms, id);
};

export const getFarmsByIds = async ids => {
  const formula = `OR(${ids.reduce((f, id) => `${f} {ID}='${id}',`, '')} 1 < 0)`;
  return getAllRecords(Tables.Farms, formula)
}

export const getAllFarms = async (filterByFormula = '', sort = []) => { 
  return getAllRecords(Tables.Farms, filterByFormula, sort);
};

export const getHarvestLogsById = async id => { 
  return getRecordById(Tables.HarvestLogs, id);
};

export const getHarvestLogsByIds = async ids => {
  const formula = `OR(${ids.reduce((f, id) => `${f} {ID}='${id}',`, '')} 1 < 0)`;
  return getAllRecords(Tables.HarvestLogs, formula)
}

export const getAllHarvestLogs = async (filterByFormula = '', sort = []) => { 
  return getAllRecords(Tables.HarvestLogs, filterByFormula, sort);
};

export const getPlantingLogsById = async id => { 
  return getRecordById(Tables.PlantingLogs, id);
};

export const getPlantingLogsByIds = async ids => {
  const formula = `OR(${ids.reduce((f, id) => `${f} {ID}='${id}',`, '')} 1 < 0)`;
  return getAllRecords(Tables.PlantingLogs, formula)
}

export const getAllPlantingLogs = async (filterByFormula = '', sort = []) => { 
  return getAllRecords(Tables.PlantingLogs, filterByFormula, sort);
};

export const getCropsById = async id => { 
  return getRecordById(Tables.Crops, id);
};

export const getCropsByIds = async ids => {
  const formula = `OR(${ids.reduce((f, id) => `${f} {ID}='${id}',`, '')} 1 < 0)`;
  return getAllRecords(Tables.Crops, formula)
}

export const getAllCrops = async (filterByFormula = '', sort = []) => { 
  return getAllRecords(Tables.Crops, filterByFormula, sort);
};

  /*
 ******* UPDATE RECORDS *******
 */

export const updateAdminUsers = async (id, recordUpdates) => { 
  return updateRecord(Tables.AdminUsers, id, recordUpdates);
};

export const updateFarms = async (id, recordUpdates) => { 
  return updateRecord(Tables.Farms, id, recordUpdates);
};

export const updateHarvestLogs = async (id, recordUpdates) => { 
  return updateRecord(Tables.HarvestLogs, id, recordUpdates);
};

export const updatePlantingLogs = async (id, recordUpdates) => { 
  return updateRecord(Tables.PlantingLogs, id, recordUpdates);
};

export const updateCrops = async (id, recordUpdates) => { 
  return updateRecord(Tables.Crops, id, recordUpdates);
};

  /*
 ******* DELETE RECORDS *******
 */

export const deleteAdminUsers = async id => { 
    return deleteRecord(Tables.AdminUsers, id);
};
export const deleteFarms = async id => { 
    return deleteRecord(Tables.Farms, id);
};
export const deleteHarvestLogs = async id => { 
    return deleteRecord(Tables.HarvestLogs, id);
};
export const deletePlantingLogs = async id => { 
    return deleteRecord(Tables.PlantingLogs, id);
};
export const deleteCrops = async id => { 
    return deleteRecord(Tables.Crops, id);
};