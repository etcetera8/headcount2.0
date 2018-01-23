import React from 'react';

export default class DistrictRepository {
  constructor(data) {
    this.data = 
    data.reduce((obj, district) => {
      district.Location = district.Location.toUpperCase()
      if (!obj[district.Location]) {
        obj[district.Location] = {}
        obj[district.Location].data = {}
      }

      if (!obj[district.Location].data[district.TimeFrame]) {
        if (isNaN(district.Data)) {
            obj[district.Location].data[district.TimeFrame] = 0;
        } else {
          let roundedData = Math.round(1000*district.Data)/1000
          obj[district.Location].data[district.TimeFrame] = roundedData
        }
      }
      obj[district.Location].location = district.Location;

      return obj;
    }, {})
  }

  findByName(search) {
    if (search === undefined) {
      return undefined
    } else {
      let searched = search.toUpperCase();

      if (!this.data[searched]) {
        return undefined
      } else {
        return this.data[searched]
      }
    }
  }
}