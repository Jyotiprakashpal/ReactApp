// src/services/Endpoints.js
export const ENDPOINTS = {
  LOGIN: "/api/login",
  MENU_MASTER: "/api/menu-master",
  USER_MASTER: "/api/user-master",
  //   ROLE_MASTER: "/api/role-master",
  GET_ROLE: "/api/get-menu-master",
  ROLE_SETUP: "/api/role-setup",
  SAVE_ROLE_SETUP: "/api/role-setup",
  SAVE_ITEMS: "/api/items",

  //Email Notification
  EMAIL_NOTIFICATION: "/api/send-customer-review-mail",
  MODIFICATION_EMAIL: "/api/send-customer-modified-mail",

  // ----------Masters---------
  HSN_CODE: "/api/get-hsncode-master",
  SZCD: "/api/get-szcd-master",
  SUB_PRODUCT_SEGMENT: "/api/get-sub-product-segment",
  BUYERGROUPS: "/api/get-buyergroups-master",
  PACKTYPE: "/api/get-packtype-master",
  SUB_PACKTYPE: "/api/SubPacktypeGroupMaster",
  PACKERGROUP_TYPE: "/api/get-packtypegroup-master",
  STORAGE_DIMENSIONGROUP: "/api/get-storagedimensiongroup-master",
  TRACKING_DIMENSIONGROUP: "/api/get-trackingdimensiongroup-master",
  UNIT_MEASUREMENT_TRANSLATION: "/api/get-unitofmeasurement-master",

  UNIT_MEASURE: "/api/get-unitofmeasure-master",
  COST_PRODUCTION_GROUP: "/api/get-costproductiongroup-master",
  BRAND: "/api/get-brand-master",
  BRAND_CATEGORY: "/api/get-brandcategory-master",
  PRICE_GROUP: "/api/get-pricediscount-master",
  FLCD: "/api/get-flcd-master",
  PRODUCT_CATEGORY: "/api/get-productcategory-master",
  PACK_SIZE: "/api/get-packsize-master",
  PRODUCT_DETAIL: "/api/get-productdetail-master",
  SGA_SIZE: "/api/get-sgasize-master",
  PRODUCT_SEGMENT: "/api/get-productsegment-master",
  ITEM_MODEL_GROUP: "/api/get-modelgroups-master",
  INVENT_TABLE: "/api/get-invent-master",
  VENDOR: "/api/get-vendor-master",

  ITEM_GROUP: "/api/get-itemgroup-master",

  //-------------------------------------------------------------------

  POST_ITEM: "/api/items",
  GET_ITEMS: "/api/get-items",
  APPROVAL_TO_FNO: "/api/post-item-d365",
  GET_ITEM_LOGS: "/api/get-response-logs",

  // SUGAR_APPROVAL_TO_FNO: "/api/post-item-d365",

  LEVEL_SETUP: "/api/level",
  GET_LEVEL: "/api/Levels",
  // Role Assignment related endpoints
  GET_USER_SETUP: "/api/get-user-setup",
  ROLE_ASSIGNMENT: "/api/role-assignment",
  GET_ROLE_SETUP: "/api/get-role-setup",
  SEND_RESET_OTP: "/api/send-reset-otp",
  RESET_PASSWORD_OTP: "/api/reset-password-otp",
  // Api Mapping
  API_FIELD_MAPPING_MASTER: "/api/api-field-mapping-master",
  GET_API_FIELD_MAPPING: "/api/get-api-field-mapping-master",
  SYNC_SUB_MASTER: "/api/sync-sub-master",
  GET_SYNC_SUB_MASTER: "/api/get-sync-sub-master",
  GET_SUB_MASTER_LOGS: "/api/sub-master-logs",
  SUB_MSTER_NAME:"/api/get-modules-without-fields",

  // User Setup related endpoints
  USER_SETUP: "/api/user-setup",

  // Legal Entity related endpoints
  GET_LEGAL_ENTITY: "/api/get-legal-entity",
  LEGALENTITY_ASSIGNMENT: "/api/legalentity-assignment",
  GET_LEGALENTITY_ASSIGNMENT: "/api/get-legalentity-assignment",
  // Menu Item related endpoints
  GET_MODULE_MASTER: "/api/get-module-master",
  MODULE_MASTER: "/api/module-master",
  MENU_MASTER: "/api/menu-master",
  UPDATE_MENU_MASTER: "/api/update-menu-master",
  GET_MENU_MASTER: "/api/get-menu-master",

  // Multi Role related endpoints
  GET_USER_ROLES: "/api/get-user-roles",
  MULTIROLE_ASSIGNMENT: "/api/multirole-assignment",

  // Level Assignment related endpoints
  GET_LEVEL_ASSIGNMENTS: "/api/get-level-assignment",
  GET_LEVELS: "/api/get-levels",
  LEVEL_ASSIGNMENT: "/api/level-assignment",
  All_LEVEL_USER: "/api/get-all-levels-with-users",

  //Approval Hierarchy
  APPROVAL_HIERARCHY: "/api/approval-hierarchy",

  // Permissions related endpoints
  GET_PERMISSIONS: "/api/get-permissions",

  // Role Assignment related endpoints
  GET_ROLE_ASSIGNMENTS: "/api/get-role-assignment",

  //ITEM TEMPLATE MASTER:
  // GET_ITEM_TEMPLATE_MASTER: "/api/get-item-template-master",
  // POST_ITEM_TEMPLATE_MASTER: "/api/item-template-master",

  //ITEM TEMPLATE DETAILS:
  GET_ITEM_TEMPLATE_DETAILS: "/api/get-item-template-details",
  ITEM_TEMPLATE_DETAILS: "/api/item-template-details",

  //master_DATA API:
  GET_MASTER_API: "/api/get-item-master-apis",
  GET_CUSTOMER_API: "/api/get-customer-master-apis",
  

  // Change Password
  CHANGE_PASSWORD: "/api/change-password",
  //Field Master

  GET_FIELD_MASTER: "/api/get-fieldmaster",
  FIELD_MASTER: "/api/fieldmaster",

  // Customer Master
  SAVE_CUSTOMER: "/api/customers",
  GET_CUSTOMERS: "/api/get-customers",
  SAVE_CUSTOMER_FA: "/api/fa-customers",
  GET_CUSTOMERS_FA: "/api/get-fa-customers",

  GET_CUSTOMERS_FROM_FNO: "/api/get-customer-master",
  // GET_CUSTOMERS_FROM_FNO_BY_ACCOUNT: "/api/get-customer-d365",
  GET_CUSTOMERS_FROM_FNO_BY_ACCOUNT: "https://kandharigroup.azure-api.net/mdmuat/customerdetails",
  // GET_CUSTOMERS_FROM_FNO_BY_ACCOUNT: "https://kandharigroup.azure-api.net/mdmprod/customerdetails",
  SAVE_CUSTOMER_MODIFICATION: "/api/customer-modification",
  GET_CUSTOMER_MODIFICATION: "/api/get-customer-modification",
  // GST_SEND_TO_D365: "/api/post-gst-d365",
  GST_SEND_TO_D365: "https://kandharigroup.azure-api.net/mdmuat/insertgst",
  // GST_SEND_TO_D365: "https://kandharigroup.azure-api.net/mdmprod/insertgst",
  
  // POST_CUSTOMER_TO_D365: "/api/post-customer-d365",
  POST_CUSTOMER_TO_D365: "https://kandharigroup.azure-api.net/mdmuat/insertcustomer",
  // POST_CUSTOMER_TO_D365: "https://kandharigroup.azure-api.net/mdmprod/insertcustomer",
 
  // RMDM
  GET_RMDM_DATA: "/api/get-rm-dm",
  SAVE_RMDM: "/api/rm-dm",

  // BOM
  GET_BOM: "/api/get-Bom",
  SAVE_BOM: "/api/Bom",

  // FA 
  GET_FA_LOGS: "/api/get-lookup-validation-response",
  SEND_TO_FA: "https://kandharigroup.azure-api.net/sendstatus/status",

  // CUSTOMER_GROUPS: "/api/get-customergroups",
  GET_CUSTOMER_GROUPS_BY_LEGAL_ENTITY:
    "/api/get-customer-groups-by-legal-entity",
  CCI_CUSTGROUPS: "/api/get-cci-custgroups",
  SALES_AREAS: "/api/get-salesareas",
  ADDRESS_CITIES: "/api/get-address-cities",
  ADDRESS_DISTRICTS: "/api/get-address-districts",
  CHANNEL_TABLE: "/api/get-channel-table",
  CUSTOMERPRIORITYCLASSIFICATIONGROUP_MASTER:
    "/api/get-customerpriorityclassificationgroup-master",
  BUSINESS_SUBSEGMENT_MASTER: "/api/get-businesssubsegment-master",
  COMMISSION_SALESREP_GROUP_MASTER: "/api/get-commission-salesrep-group-master",
  CUSTOMER_SHIPTO_MASTER: "/api/get-customer-shipto-master",
  CURRENCIES_MASTER: "/api/get-currencies-master",
  BUSINESS_SEGMENT_MASTER: "/api/get-business-segment-master",
  LINE_DISCOUNT: "/api/get-line-discount",
  LINE_DISCOUNT_CUSTOMER_GROUPS: "/api/get-line-discount-customer-groups",
  COUNTRY: "/api/get-address-country-region-master",
  ZIP_CODE: "/api/get-address-postalcode-master",
  SITES: "/api/get-site-master",
  WITHHOLDING_GROUP: "/api/get-withholdinggroups-master",
  CUSTOMER_BANK_ACCOUNTS: "/api/get-customer-bankaccounts",
  CREDIT_MANAGEMENT_PAYMENT_RANK:
    "/api/get-creditmanagement-paymenttermrank-master",
  INVENT_SITES: "/api/get-invent-sites-master",
  ADDRESS_POSTAL_CODE: "/api/get-address-postalcode-master",
  ADDRESS_POSTALWITHCITYALIAS_CODE:"/api/get-address-postalcode-by-zip-city",
  ADDRESS_COUNTRY_REGION: "/api/get-address-postalcode-master",
  AREA_CODE: "/api/get-area-code-master",
  DELIVERY_MODE: "/api/get-deliverymode",
  PAYMENT_TERM: "/api/get-paymentterm",
  PURPOSE: "/api/get-purposemaster",
  CUSTOMER_CATEGORY: "/api/get-customercategory",
  SUB_CHANNEL: "/api/get-subchannelmaster",
  INVOICE_ACCOUNT: "/api/get-invoice-account-master",
  GST_MASTER: "/api/get-gstmaster",
  // SALES_HIERARCHY: "/api/get-saleshierarchiesmaster",
  PRICE_CUSTOMER_GROUP: "/api/get-price-customer-group-master",
  APPROVED_BY:"/api/get-employees-master",
  STATE_MASTER: "/api/get-state-master",
  COUNTRY_MASTER: "/api/get-country-master",
  TCS_MASTER: "/api/get-tcs-master",
  TDS_MASTER: "/api/get-tds-master",
  // Template Configuration
  GET_TEMPLATE_CONFIG: "/api/get-template-configuration",
  POST_TEMPLATE_CONFIG: "/api/template-configuration",

  //Module Sequence:

  GET_MODULE_SEQUENCE: "/api/get-module-sequence",
  MODULE_SEQUENCE: "/api/module-sequence",

  // Auth Master
  GET_AUTH_MASTER: "/api/get-auth-master",
  POST_AUTH_MASTER: "/api/auth-master",

  // API Master
  GET_API_MASTER: "/api/get-api-master",
  POST_API_MASTER: "/api/api-master",
  GET_ALL_USERS: "/api/get-all-users-details",

  UPLOAD_FILE: "/api/upload-file",
  DELETE_FILE: "/api/delete-file",

  
  // KBPL CUSTOMER POST TO D365 
  
  GET_AUTO_FIELDS_FROM_SALES_HEIRARCHY: "/api/get-saleshierarchy-by-level",

  // Validate field
  VALIDATE_FIELDS: "/api/validate-fields",
  UNIQUE_PRICE_SEQUENCE: "/api/sales-price-duplicate",

  // Sales Price Master
  GET_SALES_PRICES: "/api/get-sales-price",
  SAVE_SALES_PRICE: "/api/sales-price",
  GET_SALESPRICE_MASTER:"/api/get-sales-price-master-apis",

  //sales price master
  SITE_MASTER:"/api/get-site-master",
  COLOR_MASTER:"/api/get-color-master",
  STYLE_MASTER:"/api/get-style-master",
  PRICE_DISCOUNT_MASTER:"/api/get-discount-group-master",
  CUSTOMER_MASTER:"/api/get-customer-master",
  SIZE_MASTER:"/api/get-size-master",
  TAX_MASTER:"/api/get-tax-master",
  INVENT_TABLE: "/api/get-invent-master",
  CUST_PRICE_TABLE:"/api/cust-discount-group-master",
  INVENT_PRICE_TABLE:"/api/invent-discount-group-master",
  TAX_BY_ITEMID:"/api/get-taxmaster-by-hsn",
  TAX_BY_GROUPID:"/api/get-taxmaster-by-acxpricegroup",
  MRP:"/api/get-mrp-master",


  //Corrected Customer Sub Master Endpoints

  SALES_HIERARCHY: "/api/SalesHierarchy",
  CUSTOMER_GROUPS: "/api/CustomerGroup",
};
