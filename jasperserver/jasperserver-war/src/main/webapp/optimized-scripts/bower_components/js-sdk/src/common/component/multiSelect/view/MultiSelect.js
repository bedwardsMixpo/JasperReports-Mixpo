define(["require","jquery","backbone","underscore","common/component/multiSelect/view/AvailableItemsList","common/component/multiSelect/view/SelectedItemsList","common/component/multiSelect/dataprovider/SelectedItemsDataProvider","common/util/parse/NumberUtils","common/util/browserDetection","text!common/component/multiSelect/templates/multiSelectTemplate.htm","bundle!js-sdk/ScalableInputControlsBundle","common/util/xssUtil","common/component/list/util/domAndCssUtil","css!common/js_reset","css!common/base","css!common/layout","css!common/modules","css!common/state","css!common/utility"],function(e){"use strict";var t=e("jquery"),s=e("backbone"),i=e("underscore"),l=e("common/component/multiSelect/view/AvailableItemsList"),a=e("common/component/multiSelect/view/SelectedItemsList"),n=e("common/component/multiSelect/dataprovider/SelectedItemsDataProvider"),o=e("common/util/parse/NumberUtils"),c=new o,m=e("common/util/browserDetection"),r=e("text!common/component/multiSelect/templates/multiSelectTemplate.htm"),u=e("bundle!js-sdk/ScalableInputControlsBundle"),d=e("common/util/xssUtil"),h=e("common/component/list/util/domAndCssUtil").doCalcOnVisibleNodeClone;e("css!common/js_reset"),e("css!common/base"),e("css!common/layout"),e("css!common/modules"),e("css!common/state"),e("css!common/utility");var v=100,g=s.View.extend({className:"jrs",events:function(){return{"click  .j-toggle-ctrl":"toggleLists"}},initialize:function(e){this.template=i.template(r),this.visibleItemsCount=e.visibleItemsCount,this.i18n={selected:u["sic.multiselect.toggle.selected"],available:u["sic.multiselect.toggle.available"]},this.availableItemsListModel=this._createAvailableItemsListModel(e),this.availableItemsList=this._createAvailableItemsList(e),this.selectedItemsDataProvider=this._createSelectedItemsListDataProvider(e),this.selectedItemsList=this._createSelectedItemsList(e),this.initListeners(),"undefined"!=typeof e.value&&(this.silent=!0,this.availableItemsList.setValue(e.value)),this.render()},_createAvailableItemsListModel:function(e){return new s.Model},_createAvailableItemsList:function(e){return e.availableItemsList||new l({model:this.availableItemsListModel,getData:e.getData,bufferSize:e.bufferSize,loadFactor:e.loadFactor,chunksTemplate:e.chunksTemplate,scrollTimeout:e.scrollTimeout})},_createSelectedItemsListDataProvider:function(e){return new n(e.selectedListOptions)},_createSelectedItemsList:function(e){return this.formatValue=e.formatValue,new a({getData:this.selectedItemsDataProvider.getData,bufferSize:e.bufferSize,loadFactor:e.loadFactor,chunksTemplate:e.chunksTemplate,scrollTimeout:e.scrollTimeout})},initListeners:function(){this.listenTo(this.availableItemsList,"selection:change",this.selectionChange,this),this.listenTo(this.availableItemsListModel,"change:totalValues",this._updateAvailableItemsCountLabel,this),this.listenTo(this.selectedItemsList,"selection:remove",this.selectionRemoved,this)},render:function(){var e=t(this.template({isIPad:m.isIPad(),i18n:u}));return this.availableItemsList.undelegateEvents(),this.selectedItemsList.undelegateEvents(),this.selectedItemsList.$el.insertAfter(e.find(".m-Multiselect-toggleContainer")),this.availableItemsList.$el.insertAfter(e.find(".m-Multiselect-toggleContainer")),this.$el.empty(),this.$el.append(e[0]),this.availableItemsList.render(),this.selectedItemsList.render(),this._updateAvailableItemsCountLabel(),this.availableItemsList.delegateEvents(),this.selectedItemsList.delegateEvents(),this._tuneCSS(),this},_tuneCSS:function(){var e=this;this._cssDepententSizesSet||(h({el:this.$el,css:{width:"500px"},alwaysClone:!0,callback:function(t){e.toggleContainerHeight=t.find(".m-Multiselect-toggleContainer").outerHeight(),e._tuneCSSInternal(t),t.find(".j-scalable-list").css({height:"0"}),e.emptyContainerHeight=t.outerHeight()}}),this._cssDepententSizesSet=!0),this._tuneCSSInternal(this.$el)},_tuneCSSInternal:function(e){var t=this.toggleContainerHeight;e.find(".j-toggle-panel.j-available").css("padding-top",t),e.find(".j-toggle-panel.j-selected").css("padding-top",t),e.css("height","100%")},toggleLists:function(e){if(e.stopPropagation(),!t(e.currentTarget).hasClass("is-active")){this.$el.find(".j-toggle-ctrl").toggleClass("is-active is-inactive"),this.$el.find(".j-toggle-panel").toggleClass("j-active j-inactive");var s=this.$el.find(".j-toggle-panel.j-inactive");s.css({position:"absolute",left:"-9999px",top:"0",width:s.width()+"px"}),this.$el.find(".j-toggle-panel.j-active").css({position:"relative",left:"",top:"",width:""}),m.isIPad()||this.$el.find(".j-toggle-panel.j-active input").focus()}},selectionChange:function(e){clearTimeout(this.selectionChangeTimeout),this.selectionChangeTimeout=setTimeout(i.bind(this.selectionChangeInternal,this,e),v)},selectionRemoved:function(e){var t,s=this.availableItemsList.model.get("value"),l=e.length;for(t=0;l>t;t+=1)delete s[e[t]];this.availableItemsList.setValue(i.keys(s))},selectionChangeInternal:function(e){var t=this,s=this.selectedItemsList.listView.getActiveValue(),i=this.selectedItemsList.listView.$el.scrollTop();this.selectedItemsDataProvider.setData(e),this.selectedItemsList.fetch(function(){if(t._updateSelectedItemsCountLabel(),t.selectedItemsList.resize(),t.selectedItemsList.listView.$el.scrollTop(i),s&&t.selectedItemsList.$el.hasClass("j-active")){var e=t.selectedItemsList.listView.model.get("total");e&&e>s.index?t.selectedItemsList.listView.activate(s.index):e&&t.selectedItemsList.listView.activate(s.index-1)}}),this.silent?delete this.silent:this.triggerSelectionChange()},_setToggleLabel:function(e,t,s){var i=c.formatNumber(t),l=this.$el.find(e+" .m-Multiselect-toggleLabel"),a=s+": "+i;l.text(a).attr("title",d.escape(a))},_updateAvailableItemsCountLabel:function(){var e=this.availableItemsList.model.get("totalValues")||0;this._setToggleLabel(".j-available",e||0,this.i18n.available)},_updateSelectedItemsCountLabel:function(){var e=this.$el.find(".j-no-selection"),t=this.selectedItemsList.listView.model.get("total")||0;this._setToggleLabel(".j-selected",t,this.i18n.selected),0===t?e.show():e.hide()},triggerSelectionChange:function(){this.trigger("selection:change",this.getValue())},renderData:function(){return this.availableItemsList.renderData(),this.selectedItemsList.renderData(),this},fetch:function(e,t){this.availableItemsList.fetch(e,t)},reset:function(e){this.availableItemsList.reset(e)},resize:function(){this.availableItemsList.resize(),this.selectedItemsList.resize()},setValue:function(e,t){t&&t.silent&&(this.silent=!0),delete t.silent,this.availableItemsList.setValue(e,t)},getValue:function(){var e=this.availableItemsList.getValue(),t=[],s=0;for(var i in e)e.hasOwnProperty(i)&&void 0!==e[i]&&(t[s++]=e[i]);return t},setDisabled:function(e){return this.availableItemsList.setDisabled(e),this.selectedItemsList.setDisabled(e),this},getDisabled:function(){return this.availableItemsList.getDisabled()},remove:function(){this.availableItemsList.remove(),this.selectedItemsList.remove(),s.View.prototype.remove.call(this)}});return g});