define(["require","dataSource/model/JdbcDataSourceModel","dataSource/model/BaseDataSourceModel","dataSource/collection/JdbcDriverCollection","settings!dataSourcePatterns","dataSource/enum/connectionTypes","bi/repository/enum/repositoryResourceTypes","underscore","jquery","bundle!jasperserver_messages","settings!awsSettings","bundle!jasperserver_config","dataSource/util/settingsUtility"],function(e){"use strict";var r=e("dataSource/model/JdbcDataSourceModel"),t=e("dataSource/model/BaseDataSourceModel"),s=e("dataSource/collection/JdbcDriverCollection"),a=(e("settings!dataSourcePatterns"),e("dataSource/enum/connectionTypes")),i=e("bi/repository/enum/repositoryResourceTypes"),o=e("underscore"),n=e("jquery"),d=e("bundle!jasperserver_messages"),u=e("settings!awsSettings"),l=e("bundle!jasperserver_config"),c=e("dataSource/util/settingsUtility"),v=r.extend({otherDriverIsPresent:!1,type:i.AZURE_SQL_DATA_SOURCE,defaults:function(){var e={};return o.extend(e,r.prototype.defaults,{subscriptionId:"",keyStorePassword:"",keyStoreUri:"",serverName:"",dbName:"",selectedDriverClass:"",useMicrosoftDriver:!1,microsoftDriverAvailable:!1,connectionType:a.AZURE_SQL}),e}(),validation:function(){var e={};return o.extend(e,r.prototype.validation,{subscriptionId:[{required:!0,msg:d["ReportDataSourceValidator.error.azureSqlDataSource.subscriptionId"]}],keyStorePassword:[{required:!0,msg:d["ReportDataSourceValidator.error.azureSqlDataSource.keyStorePassword"]}],keyStoreUri:[{required:!0,msg:d["ReportDataSourceValidator.error.azureSqlDataSource.keyStoreUri"]}],serverName:[{required:!0,msg:d["ReportDataSourceValidator.error.azureSqlDataSource.serverName"]}],dbName:[{required:!0,msg:d["ReportDataSourceValidator.error.not.empty.reportDataSource.dbNameIsEmpty"]}],username:[{required:!0,msg:d["ReportDataSourceValidator.error.not.empty.reportDataSource.username"]}]}),e}(),initialize:function(e,r){t.prototype.initialize.apply(this,arguments);c.deepDefaults(r,{awsSettings:u});this.isNew()||(this.set("password",l["input.password.substitution"]),this.set("keyStorePassword",l["input.password.substitution"])),this.initialization=n.Deferred(),this.drivers=new s([],this.options);var a=this;this.drivers.fetch({reset:!0}).done(function(){a.isNew()?a.set("selectedDriverClass",a.drivers.getDriverByName("sqlserver").get("jdbcDriverClass")):a.set("selectedDriverClass",a.get("driverClass"));var e=a.drivers.getDriverByName("sqlserver_standard");null!=e&&(a.set("microsoftDriverAvailable",e.get("available")),a.set("useMicrosoftDriver",a.get("selectedDriverClass")===e.get("jdbcDriverClass"))),a.initialization.resolve()}),this.on("change:dbName change:serverName change:connectionUrlTemplate change:useMicrosoftDriver",this.updateConnectionUrl),this.on("change:useMicrosoftDriver",this.updateDriverClass)},updateConnectionUrl:function(){if(this.get("connectionUrlTemplate")){var e=this.pick(["dbName","serverName","dbPort"]);e.dbPort=1433;var r=this.drivers.getDriverByName("sqlserver_standard"),t=this.get("connectionUrlTemplate");this.get("useMicrosoftDriver")&&null!=r&&(e.serverName+=".database.windows.net",t=r.get("jdbcUrl")),e.dbHost=e.serverName;var s=this.replaceConnectionUrlTemplatePlaceholdersWithValues(t,e);this.set("connectionUrl",s)}},updateDriverClass:function(){var e=this.drivers.getDriverByName("sqlserver_standard"),r=this.get("useMicrosoftDriver")&&null!=e?"sqlserver_standard":"sqlserver",t=this.drivers.getDriverByName(r).get("jdbcDriverClass");this.set("selectedDriverClass",t),this.set("driverClass",t)},toJSON:function(){var e=r.prototype.toJSON.apply(this,arguments);return this.options.isEditMode&&e.keyStorePassword===l["input.password.substitution"]&&(e.keyStorePassword=null),e},getFullDbTreePath:function(){return this.get("serverName")&&this.get("dbName")?"/"+this.get("serverName")+"/"+this.get("dbName"):null}});return v});