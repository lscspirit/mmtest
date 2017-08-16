'use strict';

import BaseModel from '~/models/base';

export default class User extends BaseModel {

}
User.Attributes = {
  id:    Integer,
  uid:   String,
  type:  Integer,
  name:  String,
  email: String,
  dob:   Date
};