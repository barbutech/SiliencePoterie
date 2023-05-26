import {date, number, string} from "yup";

export enum FieldValidationType {
  REQUIRED_STRING = "REQUIRED_STRING",
  REQUIRED_NUMBER = "REQUIRED_NUMBER",
  REQUIRED_EMAIL = "REQUIRED_EMAIL",
  REQUIRED_TIME = "REQUIRED_TIME",
}

const fieldsValidation = {
  [FieldValidationType.REQUIRED_STRING]: string().nullable()
    .required("errors.fields.required"),
  [FieldValidationType.REQUIRED_EMAIL]: string().nullable()
    .required("errors.fields.required")
    .email("errors.fields.email"),
  [FieldValidationType.REQUIRED_NUMBER]: number().nullable()
    .required("errors.fields.required"),
  [FieldValidationType.REQUIRED_TIME]: date().nullable()
    .required("errors.fields.required")
    .typeError("errors.fields.time"),
};

export const getFieldError = (value: any, validationType: FieldValidationType) => {
  try {
    fieldsValidation[validationType].validateSync(value);
  } catch (err: any) {
    return err.message;
  }
};

export const checkIfErrors: any = (errors: Object) => Object.values(errors).some(
  (err) => typeof err === "string" || typeof err === "undefined" ? !!err : checkIfErrors(err)
);
