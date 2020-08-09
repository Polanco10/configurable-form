export interface Validator {
    name: string;
    validator: any;
    message: string;
}
export interface FieldConfig {
    label?: string;             //Label del campo
    name?: string;              //Nombre de formControl
    inputType?: string;         //Tipo de input (text, email, password)
    options?: string[];         //Opciones para select y para checkbox
    collections?: any;
    type?: string;               //Tipo de field (input,radiobutton,select)
    value?: any;                //Valor del campo por defecto
    validations?: Validator[];  //Validaciones
    inputs?: [];                //Array de inputs
}