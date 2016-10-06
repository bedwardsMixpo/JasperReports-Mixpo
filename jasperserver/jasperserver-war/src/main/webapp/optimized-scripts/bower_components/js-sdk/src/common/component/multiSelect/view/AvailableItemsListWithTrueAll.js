define(["require","jquery","underscore","common/component/multiSelect/view/AvailableItemsList","common/component/multiSelect/mixin/listWithTrueAllSelectionTrait"],function(e){"use strict";var t=(e("jquery"),e("underscore")),i=e("common/component/multiSelect/view/AvailableItemsList"),l=e("common/component/multiSelect/mixin/listWithTrueAllSelectionTrait"),s=i.extend({initialize:function(e){e.trueAll&&delete e.value,i.prototype.initialize.call(this,e),this.setTrueAll(e.trueAll)},_createListView:function(e){var s=i.prototype._createListView.call(this,e);return t.extend(s,l)},initListeners:function(){i.prototype.initListeners.call(this),this.listenTo(this.model,"change:isTrueAll",this.changeTrueAll,this)},selectionAdd:function(e){if(this.model.get("isTrueAll")){this.model.set("isTrueAll",!1,{silent:!0});var i=t.chain(this.listViewModel.get("items")).map(function(e){return e.value}).reject(function(t){return t===e.value}).value();this.listView.setTrueAll(!1,{silent:!0}),this.listView.setValue(i,{silent:!0}),this.listViewModel.once("selection:change",function(){this.listViewModel.once("selection:remove",function(){this.processSelectionThroughApi(this.listView.getValue())},this),this.listViewModel.toggleSelection(e.value,e.index)},this),this.listView.selectAll({silent:!0})}else this.model.get("value")[e.value]=!0,this.model.trigger("change:value")},onSelectAll:function(){this.model.get("isTrueAll")||this.model.set("isTrueAll",!0)},onSelectNone:function(){this.model.set("isTrueAll",!1),i.prototype.onSelectNone.call(this)},onInvertSelection:function(){this.model.get("isTrueAll")?this.onSelectNone():t.isEmpty(this.model.get("value"))?this.onSelectAll():i.prototype.onInvertSelection.call(this)},changeTrueAll:function(){var e=this.model.get("isTrueAll");if(e){this.listView.activate(void 0),this.listView.reset({silent:!0});var t=this;this.clearFilter(function(){t.listView.once("selection:change",t.processSelectionThroughApi,t),t.listView.setTrueAll(!0)})}else this.model.trigger("change:value"),this.listView.setTrueAll(!1)},getModelForRendering:function(){return t.extend(i.prototype.getModelForRendering.call(this),{isTrueAll:this.model.get("isTrueAll")})},setTrueAll:function(e){this.model.set("isTrueAll",e)},getTrueAll:function(){return this.model.get("isTrueAll")}});return s});