'use strict';

class ModelAttributeValue {
  constructor(type, dirty) {
    this._value = null;
    this._type  = type;
    this._dirty = !!dirty;
  }

  get value() {
    this._value;
  }

  set value(val) {
    this._dirty = true;
    this._value = val;
  }
}

export default class BaseModel {
  constructor(attrs) {
    const attrs_def = this.constructor.Attributes;
    if (!attrs_def) throw new Error('a model object must have a Attributes definition');

    // create a ModelAttributeValue object for each attribute
    this._attributes = Object.keys(attrs_def).reduce(map, attr_name => {
      const attr_type = attrs_def[attr_name];

    }, {});
  }

  save() {

  }

  destroy() {

  }

  //
  // Private Methods
  //

  _assignAttributes(attrs) {

  }

  _writeAttribute(attr_name, value) {

  }

  _readAttribute(attr_name) {

  }
}