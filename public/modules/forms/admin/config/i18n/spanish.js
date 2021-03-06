'use strict';

angular.module('forms').config(['$translateProvider', function ($translateProvider) {

	$translateProvider.translations('es', {

		//Configure Form Tab View
		ADVANCED_SETTINGS: 'Configuraciones avanzadas',
		FORM_NAME: 'Nombre del formulario',
		FORM_STATUS: 'Estado del formulario',
		PUBLIC: 'Público',
		PRIVATE: 'Privado',
		DISPLAY_FOOTER: '¿Mostrar pie de página?',
		SAVE_CHANGES: 'Grabar',
		CANCEL: 'Cancelar',
		DISPLAY_START_PAGE: '¿Mostrar página de inicio?',
		DISPLAY_END_PAGE: '¿Mostrar paǵina de fin?',

		//List Forms View
		CREATE_A_NEW_FORM: 'Crear formulario',
		CREATE_FORM: 'Crear formulario',
		CREATED_ON: 'Creado en',
		MY_FORMS: 'Mis formularios',
		NAME: 'Nombre',
		LANGUAGE: 'Idioma',
		FORM_INACTIVE: 'Formulario inactivo',

		//Edit Field Modal
		EDIT_FIELD: 'Editar',
		SAVE_FIELD: 'Grabar',
		ON: 'ON',
		OFF: 'OFF',
		REQUIRED_FIELD: 'Requerido',
		LOGIC_JUMP: 'Salto lógico',
		SHOW_BUTTONS: 'Botones adicionales',
		SAVE_START_PAGE: 'Grabar',

		//Admin Form View
		ARE_YOU_SURE: '¿Estás absolutamente seguro?',
		READ_WARNING: '¡Algo malo ocurrirá si no lees esto!',
		DELETE_WARNING1: 'Esta acción no tiene vuelta atrás. Esto borrará permanentemente el "',
		DELETE_WARNING2: '" formulario y todos los datos asociados.',
		DELETE_CONFIRM: 'Por favor escribí el nombre del formulario para confirmar.',
		I_UNDERSTAND: 'Entiendo las consecuencias y quiero borrarlo.',
		DELETE_FORM_SM: 'Borrar',
		DELETE_FORM_MD: 'Borrar formulario',
		DELETE: 'Borrar',
		FORM: 'Formulario',
		VIEW: 'Vista',
		LIVE: 'Online',
		PREVIEW: 'Vista previa',
		ADMIN: 'Admin',
		COPY: 'Copiar',
		COPY_AND_PASTE: 'Copiar y pegar esto para agregar su formulario a su sitio web',
		CHANGE_WIDTH_AND_HEIGHT: 'Cambie los valores de ancho y altura para adaptar el formulario a sus necesidades',
		POWERED_BY: 'Con la tecnlogía de',
		SHARE_URL_TEXT: 'Tu formulario está en esta URL permanente',

		//Edit Form View
		DISABLED: 'Deshabilitado',
		YES: 'SI',
		NO: 'NO',
		ADD_LOGIC_JUMP: 'Agregar salto lógico',
		ADD_FIELD_LG: 'Click para agregar campo',
		ADD_FIELD_MD: 'Agregar nuevo campo',
		ADD_FIELD_SM: 'Agregar campo',
		EDIT_START_PAGE: 'Editar paǵina de inicio',
		EDIT_END_PAGE: 'Editar página de finalización',
		WELCOME_SCREEN: 'Comienzo',
		END_SCREEN: 'Fin',
		INTRO_TITLE: 'Título',
		INTRO_PARAGRAPH: 'Parágrafo',
		INTRO_BTN: 'Botón de comienzo',
		TITLE: 'Título',
		PARAGRAPH: 'Paragrafo',
		BTN_TEXT: 'Botón para volver atrás',
		BUTTONS: 'Botones',
		BUTTON_TEXT: 'Texto',
		BUTTON_LINK: 'Link',
		ADD_BUTTON: 'Agregar Botón',
		PREVIEW_FIELD: 'Vista previa Pregunta',
		QUESTION_TITLE: 'Título',
		QUESTION_DESCRIPTION: 'Descripción',
		OPTIONS: 'Opciones',
		ADD_OPTION: 'Agregar Opciones',
		NUM_OF_STEPS: 'Cantidad de pasos',
		CLICK_FIELDS_FOOTER: 'Click en los campos para agregar',
		SHAPE: 'Forma',
		IF_THIS_FIELD: 'Si este campo',
		IS_EQUAL_TO: 'es igual a',
		IS_NOT_EQUAL_TO: 'no es igual a',
		IS_GREATER_THAN: 'es mayor que',
		IS_GREATER_OR_EQUAL_THAN: 'es mayor o igual que',
		IS_SMALLER_THAN: 'es menor que',
		IS_SMALLER_OR_EQUAL_THAN: 'is menor o igual que',
		CONTAINS: 'contiene',
		DOES_NOT_CONTAINS: 'no contiene',
		ENDS_WITH: 'termina con',
		DOES_NOT_END_WITH: 'no termina con',
		STARTS_WITH: 'comienza con',
		DOES_NOT_START_WITH: 'no comienza con',
		THEN_JUMP_TO: 'luego salta a',

		//Edit Submissions View
		REFERENCE_NO: 'Número de referencia',
		SUBMISSION_TIME: 'Tiempo de presentación',
		RESPONDENT_EMAIL: 'Correo electrónico del demandado',

		//Design View
		BACKGROUND_COLOR: 'Color de fondo',
		DESIGN_HEADER: 'Cambiar diseño de formulario',
		QUESTION_TEXT_COLOR: 'Color de la pregunta',
		ANSWER_TEXT_COLOR: 'Color de la respuesta',
		BTN_BACKGROUND_COLOR: 'Color de fondo del botón',
		BTN_TEXT_COLOR: 'Color del texto del botón',

    //Share View
    EMBED_YOUR_FORM: 'Pone tu formulario',
    SHARE_YOUR_FORM: 'Compartí tu formulario',

		//Admin Tabs
		CREATE_TAB: 'Crear',
		PREVIEW_TAB: 'Avance',
		CONFIGURE_TAB: 'Configuración',
		RESPONSE_TAB: 'Respuesta',
    SHARE_TAB: 'Compartir',

    //Field Types
    SHORT_TEXT: 'Texto corto',
		PARAGRAPH_TEXT: 'Párrafo',
    EMAIL: 'Email',
		NUMBERS: 'Números',
    DROPDOWN: 'Desplegable',
    DATE: 'Fecha',
    YES_NO: 'Si/No',
		RATING: 'Puntaje',
		STATEMENT: 'Declaración',
    SECTION: 'Sección',
		LINK: 'Enlace',
		FILE_UPLOAD: 'Subir archivo',
		HIDDEN: 'Oculto',
    LEGAL: 'Legal',
    MULTIPLE_CHOICE: 'Opciones múltiples'
	});
}]);
