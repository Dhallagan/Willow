// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from './router'
import Store from './store'
import Vuex from 'vuex'
import App from './App'
// Third party
import BootstrapVue from 'bootstrap-vue'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import PortalVue from 'portal-vue'
// Proprietary Components Import
import WillowApplicationLayout from './components/WillowApplicationLayout'
import WillowAnnotatedSection from './components/WillowAnnotatedSection'
import WillowButton from './components/WillowButton'
import WillowBreadcrumbs from './components/WillowBreadcrumbs'
import WillowCalloutCard from './components/WillowCalloutCard.vue'
import WillowLayout from './components/WillowLayout'
import WillowLayoutSection from './components/WillowLayoutSection'
import WillowModal from './components/WillowModal'
import WillowPage from './components/WillowPage'
import WillowPageHeader from './components/WillowPageHeader'
import WillowPageActions from './components/WillowPageActions'
import WillowMenuItem from './components/WillowMenuItem'
import WillowVerticalSubMenu from './components/WillowVerticalSubMenu'
import WillowHorizontalSubMenu from './components/WillowHorizontalSubMenu'
import WillowDrawer from './components/WillowDrawer'
import WillowThemeConfig from './components/WillowThemeConfig'
import WillowThemeConfigItem from './components/WillowThemeConfigItem'
import WillowThemeConfigSection from './components/WillowThemeConfigSectionTitle'
import WillowNotifications from './components/WillowNotifications'
import WillowNotification from './components/WillowNotification'
import WillowResourceList from './components/WillowResourceList.vue'
import WillowResourceListItem from './components/WillowResourceListItem.vue'
import WillowResourceGrid from './components/WillowResourceGrid.vue'
import WillowResourceGridItem from './components/WillowResourceGridItem.vue'
import WillowDescriptionList from './components/WillowDescriptionList.vue'
import WillowDescriptionListItem from './components/WillowDescriptionListItem.vue'
import WillowFilters from './components/WillowFilters'
import WillowFiltersResults from './components/WillowFiltersResults'
import WillowFiltersFields from './components/WillowFiltersFields'
import WillowFiltersFieldSelect from './components/WillowFiltersFieldSelect'
import WillowFiltersFieldTextfield from './components/WillowFiltersFieldTextfield'
import WillowFiltersFieldCheckbox from './components/WillowFiltersFieldCheckbox'

import { Applications, Buildings } from '../static/dummydata.js'

// Proprietary components
Vue.component('application-layout', WillowApplicationLayout)
Vue.component('willow-annotated-section', WillowAnnotatedSection)
Vue.component('willow-breadcrumbs', WillowBreadcrumbs)
Vue.component('willow-button', WillowButton)
Vue.component('willow-callout-card', WillowCalloutCard)
Vue.component('willow-drawer', WillowDrawer)
Vue.component('willow-layout-section', WillowLayoutSection)
Vue.component('willow-layout', WillowLayout)
Vue.component('willow-menu-item', WillowMenuItem)
Vue.component('willow-modal', WillowModal)
Vue.component('page', WillowPage)
Vue.component('page-header', WillowPageHeader)
Vue.component('page-actions', WillowPageActions)
Vue.component('willow-vertical-submenu', WillowVerticalSubMenu)
Vue.component('willow-horizontal-submenu', WillowHorizontalSubMenu)
Vue.component('willow-theme-config', WillowThemeConfig)
Vue.component('willow-theme-config-item', WillowThemeConfigItem)
Vue.component('willow-theme-config-section', WillowThemeConfigSection)
Vue.component('willow-notifications', WillowNotifications)
Vue.component('willow-notification', WillowNotification)
Vue.component('willow-resource-list', WillowResourceList)
Vue.component('willow-resource-list-item', WillowResourceListItem)
Vue.component('willow-resource-grid', WillowResourceGrid)
Vue.component('willow-resource-grid-item', WillowResourceGridItem)
Vue.component('willow-description-list', WillowDescriptionList)
Vue.component('willow-description-list-item', WillowDescriptionListItem)
Vue.component('willow-filters', WillowFilters)
Vue.component('willow-filters-results', WillowFiltersResults)
Vue.component('willow-filters-fields', WillowFiltersFields)
Vue.component('willow-filters-field-select', WillowFiltersFieldSelect)
Vue.component('willow-filters-field-textfield', WillowFiltersFieldTextfield)
Vue.component('willow-filters-field-checkbox', WillowFiltersFieldCheckbox)
// Third Party Components
Vue.component('icon', Icon)
Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(PortalVue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: Router,
  store: Store,
  components: { App },
  template: '<App/>',
  created () {
    this.$store.dispatch('LOAD_APPS', Applications)
    this.$store.dispatch('LOAD_BUILDINGS', Buildings)
  }
})
